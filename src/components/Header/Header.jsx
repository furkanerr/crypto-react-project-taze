import React from 'react'
import { Link } from 'react-router-dom'
import { useCoin } from '../../context/coinContext'
import styles from './Header.module.css'
const Header = () => {
  const {openSideBar,setOpenSideBar} =useCoin()
  return (
    <div className={styles.header}>
      <Link to='/'>
    <h1>Crypto Currency Tracker</h1>
    </Link>
    <div className={styles.openClosedSideBar} onClick={()=>
      {
        setOpenSideBar(!openSideBar)
       
      }}>View List</div>
  </div>
  )
}

export default Header