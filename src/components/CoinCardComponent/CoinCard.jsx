import React from "react";
import styles from "./CoinCard.module.css";
import { Link } from "react-router-dom";
const CoinCard = ({
  coinImage,
  coinName,
  coinPrice,
  priceChange,
  volume,
  coinId,
}) => {
  return (
    <div className={styles.Card}>
      <Link to={`/coinDetail/${coinId}`}>
        <div className={styles.coinImage}>
          <img src={coinImage} alt={coinName} />
        </div>
        <div className={styles.coinName}>
          <div>{coinName}</div>
        </div>
        <div className={styles.coinPrice}>
          <div>{coinPrice}</div>
        </div>
        <div className={styles.priceChange}>
          <div>{priceChange}</div>
        </div>
        <div className={styles.volume}>
          <div>Volume:{volume}</div>
        </div>
      </Link>
    </div>
  );
};

export default CoinCard;
