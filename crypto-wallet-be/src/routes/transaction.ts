import { Router, Response, Request } from "express";
import Transaction from "../model/transaction";


const router: Router = Router();

const get = async (req: Request, res: Response) => {
    try {
        const username = req["user"].username;
        const transactions = await Transaction.find({ username }).sort({ transactionDate: -1 });
        res.send(transactions);
    } catch (error) {
        console.error(error);
        res.status(400).send(error);
    }
};

const getOne = async (req: Request, res: Response) => {
    try {
        const username = req["user"].username;
        const _id = req.params.id;
        const transactions = await Transaction.findOne({ username, _id });
        res.send(transactions);
    } catch (error) {
        console.error(error);
        res.status(400).send(error);
    }
};

const create = async (req: Request, res: Response) => {
    try {
        const username = req["user"].username;
        const transaction = new Transaction({ ...req.body, username });

        const created = await transaction.save();
        res.send(created);
    } catch (error) {
        console.error(error);
        res.status(400).send(error);
    }
};

const update = async (req: Request, res: Response) => {
    try {
        const username = req["user"].username;
        const _id = req.params.id;
        const transaction = new Transaction({ ...req.body, username, _id });

        const updated = await Transaction.findOneAndUpdate({ _id, username }, transaction, { new: true });
        res.send(updated);
    } catch (error) {
        console.error(error);
        res.status(400).send(error);
    }
};

const remove = async (req: Request, res: Response) => {
    try {
        const username = req["user"].username;
        const _id = req.params.id;

        await Transaction.findOneAndDelete({ _id, username });
        res.send({ status: "ok" });
    } catch (error) {
        console.error(error);
        res.status(400).send(error);
    }
};


router.get("/", get);
router.get('/:id', getOne);
router.post("/", create);
router.put('/:id', update);
router.delete('/:id', remove);

export default router;