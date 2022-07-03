import React from "react";
import styles from "./CoinDetail.module.css";
import parse from 'html-react-parser';
const CoinDetailCard = ({
coin
}) => {
  return (
    <div className={styles.coinDetailCardContainer}>
      <div className={styles.coinImage}>
        <img src={coin?.image?.small} alt={coin?.name} />
      </div>

      <div className={styles.coinName}>{coin?.name}</div>
      <div className={styles.coinPriceContainer}>
        <div className={styles.coinNameText}>Coin Price:</div>
        <div className={styles.price}>${coin?.market_data?.current_price?.usd}</div>
      </div>

      <div className={styles.marketCapContainer}>
        <div className={styles.marketCapText}>Market Cap:</div>
        <div className={styles.marketCap}>${parseInt(coin?.market_data?.market_cap?.usd).toLocaleString()}</div>
      </div>
      <div className={styles.highAndLow}>
        <div className={styles.highContainer}>
          <div className={styles.highText}>High:</div>
          <div className={styles.High}>${coin?.market_data?.high_24h?.usd}</div>
        </div>
        <div className={styles.lowContainer}>
          <div className={styles.lowText}>Low:</div>
          <div className={styles.Low}>${coin?.market_data?.low_24h?.usd}</div>
        </div>
      </div>
      <div className={styles.desc}>{parse(coin?.description?.en || '')}</div>
      {/* string içinde html kodlarını parse etmek için kullanılır. */}
      
    </div>
  );
};

export default CoinDetailCard;
