import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Header.module.css'
const Header = () => {
  return (
    <div className={styles.header}>
      <Link to='/'>
    <h1>Crypto Currency Tracker</h1>
    </Link>
  </div>
  )
}

export default Header