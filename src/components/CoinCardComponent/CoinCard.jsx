import React from "react";
import styles from "./CoinCard.module.css";
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
const CoinCard = ({
  coinImage,
  coinName,
  coinPrice,
  priceChange,
  volume,
  coinId
}) => {
  
  return (
    
    <div className={styles.Card}>
      <div className={styles.addToTheFavorites}>
      <FontAwesomeIcon icon={faStar} style={{color:'#ffd43b'}}/>
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

export default CoinCard;
