import { Router, Response, Request } from "express";
import * as bcrypt from "bcrypt";
import User, { IUser } from "../model/user";
import { generateToken } from "../config/jwt-helper";

const router: Router = Router();

const login = async (req: Request, res: Response) => {
    try {
        const { username, password } = req.body;
        const user: IUser = await User.findOne({ username });
        if (!user) {
            return res.status(401).send({ msg: "User does not exist" });
        }
        const isCorrectPassword = await bcrypt.compare(password, user.password);
        if (!isCorrectPassword) {
            return res.status(401).send({ msg: "Wrong password" });
        }

        const accessToken = generateToken(user);
        res.send({ accessToken });
    } catch (error) {
        console.error(error);
        res.status(400).send(error);
    }
};


const signup = async (req: Request, res: Response) => {
    try {
        const { username, password } = req.body;
        const existingUser: IUser = await User.findOne({ username }); // = { username: username }
        if (existingUser) {
            return res.status(400).send({ msg: "User already exists" });
        }
        const passwordHash = await bcrypt.hash(password, 10); //10 stands for number of bcrypt hash
        const user = new User({ username, password: passwordHash });
        await user.save();
        res.send({ status: "ok" });
    } catch (error) {
        console.error(error);
        res.status(400).send(error);
    }
};


router.post("/login", login);
router.post("/signup", signup);

export default router;