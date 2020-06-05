// @ts-nocheck
import React, { useEffect, useState } from 'react';
import { getData } from './data'
import './App.css';

function App() {
  const [ data, setData ] = useState({})

  useEffect(() => {
    getData().then(res => {
      setData(res)
    })
  }, [])

  return (
    <div className="App">
      <div className="box">
        <h3>Rates:</h3>
        {
          data && data.rates && Object.entries(data.rates).map(([name, value]) => {
            return <div className="row" key={name}>
              <div className="left">{name}</div>
              <div className="right">{value}</div>
            </div>
          })
        }
      </div>
    </div>
  );
}

export default App;
