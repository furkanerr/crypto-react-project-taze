import axios from 'axios';

// create snd service class and export it
export default class Api {
  
    
    static async getAllCoins(page) {
        try {
            return await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=${page}&sparkline=false`);
           
        } catch (error) {
            console.log(error);
        }
    }

    static async getCoin(coinId) {
        try {
            return await axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}?localization=false`);
        } catch (error) {
            console.log(error)
        }

}
static async getCoinHistory(coinId,days=30) {
    try {
        return await axios.get(`https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=${days}`);
    } catch (error) {
        console.log(error)
    }
}

}