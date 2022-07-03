import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./CoinDetail.module.css";
import CoinDetailCard from "../../components/CoinDetail/CoinDetailCard";
import Api from "../../services/api";
import Header from "../../components/Header/Header";
import MyChart from "../../components/Chart/MyChart";
import { times } from "../../utils/times";
import { MoonLoader } from "react-spinners";
const CoinDetail = () => {
  const { id } = useParams();
  const [coin, setCoin] = useState([]);
  const [coinHistory, setCoinHistory] = useState([]);
  const [days, setDays] = useState(365);
  const [isLoading, setIsLoading] = useState(true);
  const fetchData = async () => {
    const response = await Api.getCoin(id);
    setCoin(response.data);
  };
  const fetchHistoricalData = async () => {
    const response = await Api.getCoinHistory(id, days);
    setCoinHistory(response.data.prices);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchHistoricalData();
  }, [days]);

  useEffect(() => {
    fetchData();
  }, [id]);

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.Infos}>
        {isLoading ? (
          <MoonLoader color="#7b9f05" />
        ) : (
          <>
            <div className={styles.detailCard}>
              <CoinDetailCard coin={coin} />
            </div>
            <div className={styles.chart}>
              <MyChart data={coinHistory} day={days} />
              <div className={styles.timesContainer}>
                {times.map((day) => (
                  <div
                    onClick={() => setDays(day.value)}
                    style={
                      day.value == days
                        ? {
                            backgroundColor: "rgb(143 189 122)",
                            color: "white",
                          }
                        : null
                    }
                    key={day.id}
                  >
                    {day.name}
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CoinDetail;
