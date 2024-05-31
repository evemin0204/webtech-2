export default interface Transaction {
    _id: string;
    cryptoCurrency: string;
    cryptoAmount: number;
    price: number;
    transactionDate: Date;
}  