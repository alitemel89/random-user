import React, { useState, useEffect } from "react";
import "./card-list.scss";
import { Card } from "../card/card.jsx";

export const CardList = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPeople, setFilteredPeople] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {

      setFilteredPeople(props.people.filter(value => {
        if (searchTerm == "") {
          return value;
        } else if (
          value.name.first.toLowerCase().includes(searchTerm.toLowerCase()) 
          ||
          value.name.last.toLowerCase().includes(searchTerm.toLowerCase())
        ) {
          return value;
        }
      }))
    }, 1000);

    return ()=> clearTimeout(timer)


  }, [searchTerm]);


  return (
    <>
      <input
        type="search"
        placeholder="search person"
        className="search"
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      <div className="card-list">
        {
        filteredPeople.map((person, index) => (
          <Card key={index} person={person} />
        ))
        }
      </div>
    </>
  );
};
