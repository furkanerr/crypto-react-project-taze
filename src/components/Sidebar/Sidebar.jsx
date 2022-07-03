import React from 'react'
import MyChart from '../Chart/MyChart'
import styles from './Sidebar.module.css'
import { useCoin } from '../../context/coinContext'
import ViewList from '../ViewListComponent/ViewList'
import { Link } from 'react-router-dom'
const Sidebar = () => {

    const { selectedCoins,removeCoin} = useCoin()
      

  return (
    <div className={styles.container}>
        <div className={styles.coinCard}>
          {
            selectedCoins.map(coin => (
                <>
                 <span onClick={()=>
                  {  
                    removeCoin(coin.coin.id)}} >Sil</span>
                <Link to={`/coinDetail/${coin.coin.id}`}>
               
                <ViewList coin={coin.coin} />
                <div style={{width:'95%'}}>
                <MyChart data={coin.coinHistory} day={1} />
                </div>
                </Link>
                </>
            ))
          }
        </div>
        
    </div>
  )
}
// arama yapılırken tekrar renderi etmeyi engellemek için
export default React.memo(Sidebar)