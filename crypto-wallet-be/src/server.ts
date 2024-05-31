import express from "express";
import connectDatabase from "./config/database";
import { validateToken } from "./config/jwt-helper";
import authRoute from "./routes/auth";
import transactionRoute from "./routes/transaction";
import coinsRoute from "./routes/coin";
import walletRoute from "./routes/wallet";
import cors from "cors";

const app = express();

// Connect to database
connectDatabase();

// Express configuration
app.use(express.json());
app.use(cors({ origin: "http://localhost:4200" }));

app.use("/api/auth/", authRoute);
app.use("/api/transactions/", validateToken, transactionRoute);
app.use("/api/coins/", validateToken, coinsRoute);
app.use("/api/wallet/", validateToken, walletRoute);

// Start server
const port = process.env.PORT || 8000;

const server = app.listen(port, () =>
  console.log(`Server started on port ${port}`)
);

export default server;