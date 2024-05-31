import mongoose, { Document, Model, model, Schema } from "mongoose";

export interface ITransaction extends Document {
    username: string;
    cryptoCurrency: string;
    cryptoAmount: number;
    price: number;
    transactionDate: Date;
}

const transactionSchema: Schema = new Schema({
    username: {
        type: String,
        required: true
    },
    cryptoCurrency: {
        type: String,
        required: true
    },
    cryptoAmount: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    transactionDate: {
        type: Date
    }
});



export default mongoose.model<ITransaction>('Transaction', transactionSchema);