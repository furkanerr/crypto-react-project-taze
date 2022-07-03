import React from "react";
import styles from "./CoinCard.module.css";
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { useCoin } from "../../context/coinContext";
const CoinCard = ({
  coinImage,
  coinName,
  coinPrice,
  priceChange,
  volume,
  coinId
}) => {
  const {addCoin,selectedCoins} = useCoin()
  return (
    
    <div className={styles.Card}>
      <div className={styles.addToTheFavorites}>
      <FontAwesomeIcon 
      icon={faStar}
      style={selectedCoins.map(coin=>coin.coin.id).includes(coinId)?{color:'#f9c826'}:{backgroundColor:'white'}}
      onClick={()=>{
        addCoin(coinId)
      
      }}
      />
      </div>
      <Link to={`/coinDetail/${coinId}`} >
        <div className={styles.coinImage}>
          <img src={coinImage} alt={coinName} />
        </div>
        <div className={styles.coinName}>
          <div>{coinName}</div>
        </div>
        <div className={styles.coinPrice}>
          <div>${coinPrice}</div>
        </div>
        <div className={styles.priceChanges}>
          <div style={priceChange.toString().includes('-')?{color:'red'}:{color:'green'}}>%{priceChange}</div>
        </div>
        <div className={styles.volume}>
          <div>Volume:${parseInt(volume).toLocaleString()}</div>
        </div>
        </Link>
    </div>
 
  );
};
// arama yapılırken tekrar renderi etmeyi engellemek için 
export default React.memo(CoinCard);
