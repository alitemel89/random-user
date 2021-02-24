import React, { useState, useEffect } from "react";
import "./card-list.scss";
import { Card } from "../card/card.jsx";

export const CardList = (props) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredPeople, setFilteredPeople] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setFilteredPeople(
        props.people.filter((value) => {
          if (searchTerm == "") {
            return value;
          } else if (
            value.name.first.toLowerCase().includes(searchTerm.toLowerCase()) ||
            value.name.last.toLowerCase().includes(searchTerm.toLowerCase())
          ) {
            return value;
          }
        })
      );
    }, 1000);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  return (
    <>
      <h1 className="app-heading">Random User App</h1>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="search"
          placeholder="search person"
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <i class="fa fa-search"></i>
      </form>

      <div className="card-list">
        {filteredPeople.map((person, index) => (
          <Card key={index} person={person} />
        ))}
      </div>
    </>
  );
};
