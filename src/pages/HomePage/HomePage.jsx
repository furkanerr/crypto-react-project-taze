import React, { useEffect, useState } from "react";
import styles from "./HomePage.module.css";
import CoinCard from "../../components/CoinCardComponent/CoinCard";
import Api from "../../services/api";
import Pagination from "../../components/Pagination/Pagination";

import Header from "../../components/Header/Header";
import { MoonLoader } from "react-spinners";
import { useCoin } from "../../context/coinContext";
import Sidebar from "../../components/Sidebar/Sidebar";
const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { openSideBar, coins, isLoading, setPage,page } = useCoin();

  let filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.searchBar}>
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setSearchTerm(e.target.value)}
        />
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
       {/* positin left ile yok ederek re-renderın önüne geçtik */}
        <div className={styles.SideBarContainer}style={openSideBar?{left:'-1000px'}:{left:'0'}}>
          <Sidebar />
        </div>
      
    </div>
  );
};

export default HomePage;
