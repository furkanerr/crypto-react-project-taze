import React,{useEffect,useState} from "react";
import styles from "./HomePage.module.css";
import CoinCard from "../../components/CoinCardComponent/CoinCard";
import Api from "../../services/api";
import Pagination from "../../components/Pagination/Pagination";
const HomePage = () => {
    const [coins, setCoins] = useState([]);
    const [page, setPage] = useState(1);

    const fetchData = async () => {
        const response = await Api.get(page);
        setCoins(response.data.data);
    }
    coinImage,coinName,coinPrice,priceChange,volume
    useEffect(() => {
        fetchData();
    }, [page]);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Crypto Currency Tracker</h1>
      </div>
      <div className={styles.coinCards}>
        {
            coins.map(coin => {
                return <CoinCard 
                key={coin.id} 
                coinName={coin.name} 
                coinImage={coin.image}
                coinPrice={coin.current_price}
                priceChange={coin.price_change_percentage_24h}
                volume={coin.total_volume}
                coinId={coin.id}
                 />
            })
            
        }
      </div>
        <div className={styles.pagination}>
            <Pagination setPage={setPage} page={page}/>
        </div>    
        
    </div>
  );
};

export default HomePage;
