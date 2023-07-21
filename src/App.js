import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.js";
import { Coin } from "./pages/Coin.jsx";
import { CoinProvider } from "./Api/api.jsx";

const App = () => {
  return (
    <CoinProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coin" element={<Coin />}>
          <Route path=":coinId" element={<Coin />}></Route>
        </Route>

      </Routes>
    </CoinProvider>
  )
}
export default App;