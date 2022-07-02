import React from "react";
import styles from "./CoinDetail.module.css";
const CoinDetail = ({
  coinImage,
  coinName,
  coinPrice,
  coinMarketCap,
  high,
  low,
  desc,
}) => {
  return (
    <div className={styles.coinDetailCardContainer}>
      <div className={styles.coinImage}>
        <img src={coinImage} alt={coinName} />
      </div>

      <div className={styles.coinName}>{coinName}</div>
      <div className={styles.coinPriceContainer}>
        <div className={styles.coinNameText}>Coin Price:</div>
        <div className={styles.price}>{coinPrice}</div>
      </div>

      <div className={styles.marketCapContainer}>
        <div className={styles.marketCapText}>Market Cap:</div>
        <div className={styles.marketCap}>{coinMarketCap}</div>
      </div>
      <div className={styles.highAndLow}>
        <div className={styles.highContainer}>
          <div className={styles.highText}>High:</div>
          <div className={styles.High}>{high}</div>
        </div>
        <div className={lowContainer}>
          <div className={styles.lowText}>Low:</div>
          <div className={styles.Low}>{low}</div>
        </div>
      </div>
      <div className={styles.desc}>{desc}</div>
    </div>
  );
};

export default CoinDetail;
