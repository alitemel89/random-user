import './App.css';
import React, { useState, useEffect } from 'react';
import { CardList } from './components/card-list/card-list';
import axios from "axios";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(response => {
        console.log(response)
        setData(response.data);
      });
  }, []);

  return (
    <div>
        <CardList name="Ali">
        {data.map(item => (
          <h1 key={item.id}>{item.name}</h1>
        ))}
        </CardList>
    </div>
  );
}

export default App;
