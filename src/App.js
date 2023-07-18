import React from 'react'
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.js";
import { Coin } from "./pages/Coin.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="/coin" element={<Coin />}>
        <Route path=":coinId" element={<Coin />}></Route>
      </Route> */}
      <Route path="/coin" element={<Coin />} />
    </Routes>
  )
}
export default App;