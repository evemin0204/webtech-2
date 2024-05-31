import { Router, Response, Request } from "express";
import { getCryptoPrices } from "../config/crypto-price-api-client";

const router: Router = Router();

const get = async (req: Request, res: Response) => {
    try {
        const coins = await getCryptoPrices();
        res.send(coins);
    } catch (error) {
        console.error(error);
        res.status(400).send(error);
    }
};

router.get("/", get);

export default router;