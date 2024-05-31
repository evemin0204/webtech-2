import { Response, Request } from "express";
import * as jwt from "jsonwebtoken";
import { IUser } from "../model/user";

const tokenSecret = "4U6[Du<^I}JX$rqYX";

export const generateToken = (user: IUser) => {
    return jwt.sign({ username: user.username }, tokenSecret, { expiresIn: '24h' });
}

export const validateToken = (req: Request, res: Response, next) => {
    const authHeader = req.headers.authorization;

    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, tokenSecret, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }

            req['user'] = user;
            next();
        });
    } else {
        res.sendStatus(401);
    }
}