import React, { useEffect, useState } from "react";
import styles from "./HomePage.module.css";
import CoinCard from "../../components/CoinCardComponent/CoinCard";
import Api from "../../services/api";
import Pagination from "../../components/Pagination/Pagination";

import Header from "../../components/Header/Header";
import { MoonLoader } from "react-spinners";
const HomePage = () => {
  const [coins, setCoins] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const fetchData = async () => {
    const response = await Api.getAllCoins(page);
    setCoins(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  let filteredCoins = coins.filter(coin => coin.name.toLowerCase().includes(searchTerm.toLowerCase()));


  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.searchBar}>
        <input type="text" placeholder="Search..." onChange={(e)=>setSearchTerm(e.target.value)}/>
      </div>
      {isLoading ? (
        <MoonLoader color="#7b9f05" />
      ) : (
        <div className={styles.coinCards}>
          {filteredCoins.map((coin) => (
            <CoinCard
              key={coin.id}
              coinName={coin.name}
              coinImage={coin.image}
              coinPrice={coin.current_price}
              priceChange={coin.price_change_percentage_24h}
              volume={coin.total_volume}
              coinId={coin.id}
            />
          ))}
        </div>
      )}

      <div className={styles.pagination}>
        <Pagination setPage={setPage} page={page} />
      </div>
    </div>
  );
};

export default HomePage;
