import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [coins, setCoins] = useState([])
  useEffect (() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then(res =>{
      setCoins(res.data);
      console.log(res.data);
    })
  })
  return (
    <div className="App">
      <h1>Hello Crypto Tracker</h1>
    </div>
  );
}

export default App;
