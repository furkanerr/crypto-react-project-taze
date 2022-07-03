import React, { useEffect } from "react";
import { useContext, useState, createContext } from "react";
import Api from "../services/api";
const CoinContext = createContext();

const CoinProvider = ({ children }) => {
  const [selectedCoins, setSelectedCoins] = useState([]);
  const [openSideBar, setOpenSideBar] = useState(false);
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [page, setPage] = useState(1);
  const fetchData = async () => {
    const response = await Api.getAllCoins(page);
    setCoins(response.data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, [page]);

  const addCoin = async (coinId) => {
    let coin = await getCoins(coinId);
    let coinHistory = await getCoinHistory(coinId);
    if(selectedCoins.find(coin => coin.coin.id === coinId)){
        return;
    }
    else{
        setSelectedCoins([...selectedCoins, { coin, coinHistory }]);
    }
  };

  const removeCoin = (coinId) => {
    setSelectedCoins(selectedCoins.filter((c) => c.coin.id !==coinId));
  };

  const getCoins = async (coinId) => {
    const response = await Api.getCoin(coinId);
    return response.data;
  };

  const getCoinHistory = async (coinId, days = 1) => {
    const response = await Api.getCoinHistory(coinId, days);
    return response.data.prices;
  };

  const values = {
    selectedCoins,
    removeCoin,
    addCoin,
    openSideBar,
    setOpenSideBar,
    coins,
    isLoading,
    setPage,
    page
  };
  return <CoinContext.Provider value={values}>{children}</CoinContext.Provider>;
};

const useCoin = () => useContext(CoinContext);
export { useCoin, CoinProvider };
