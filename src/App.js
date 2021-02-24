import './App.css';
import React, { useState, useEffect } from 'react';
import { CardList } from './components/card-list/card-list';
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://randomuser.me/api/?results=10")
      .then(response => {
        setData(response.data.results);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p className="loading">Loading...</p>
  }

  console.log(data);
  return (
    <div className="App">
      <CardList people={data} />
    </div>
  );
}

export default App;
