
/** Dependencies */
import React from 'react'
import { Route, Routes } from 'react-router-dom'

/** Components  */

import HomePage from '../pages/HomePage/HomePage'
import CoinDetail from '../pages/CoinDetailPage/CoinDetail'

function Routers() {
    return (

     <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route exact path='/coinDetail/:id' element={<CoinDetail/>} />
     </Routes>
    )
  }
  
  export default Routers