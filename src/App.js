import './App.css';
import React, { useState, useEffect } from 'react';
import { CardList } from './components/card-list/card-list';
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?results=10")
      .then(response => {
        console.log(response.data.results)
        setData(response.data.results);
      });
  }, []);
  console.log(data);
  return (
    <div className="App">
      <CardList people={data} />
    </div>
  );
}

export default App;
