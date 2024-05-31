import { Router, Response, Request } from "express";
import Transaction from "../model/transaction";
import { getCryptoPrices } from "../config/crypto-price-api-client";

const router: Router = Router();

const get = async (req: Request, res: Response) => {
    try {
        // Get current prices of crypto currencies
        const prices = new Map();
        const coins = await getCryptoPrices();
        coins.forEach(coin => prices.set(coin.id, coin.currentPrice));

        // Get user transactions grouped by currency with summarized amount and investment prices
        const username = req["user"].username;
        const transactions = await Transaction.aggregate([
            { $match: { username: username } },
            { $group: { _id: '$cryptoCurrency', invested: { $sum: "$price" }, amount: { $sum : "$cryptoAmount" } } }
        ]);

        // merge transactions with current prices and return
        const wallet = transactions.map(t => ({ ...t, price: (prices.get(t._id) * t.amount)  }))
        res.send(wallet);
    } catch (error) {
        console.error(error);
        res.status(400).send(error);
    }
};

router.get("/", get);

export default router;