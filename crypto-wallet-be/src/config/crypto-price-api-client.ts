import axios from 'axios';

export interface CryptoCurrency {
    id: string;
    symbol: string;
    name: string;
    currentPrice: number;
}

let cache: CryptoCurrency[] = [];
let cacheEndTime = new Date();
const cacheLifeInMinutes = 10;

/**
 * getCryptoPrices calls Coin Gecko Api to get current crypto prices.
 * It keeps api response in cache for 10 min in order not to exceed api request limit.
 * 
 * @returns Promise<CryptoCurrency[]>
 */
export const getCryptoPrices = () => {
    return new Promise<CryptoCurrency[]>((resolve, reject) => {
        if (cacheEndTime > new Date()) {
            resolve(cache);
        } else {
            axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false`)
                .then(res => {
                    const cryptoCurrencies = res.data.map(raw => ({ id: raw.id, symbol: raw.symbol, name: raw.name, currentPrice: raw.current_price }));
                    cache = cryptoCurrencies;
                    cacheEndTime = new Date(new Date().getTime() + cacheLifeInMinutes * 60000);
                    resolve(cryptoCurrencies);
                })
                .catch(err => {
                    console.error('Error while fetching Coin prices: ', err.message);
                    reject(err);
                });
        }

    });
}
