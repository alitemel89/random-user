import React, { useState } from "react";
import "./card-list.css";
import { Card } from "../card/card.jsx";

export const CardList = (props) => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <>
      <input
        type="search"
        placeholder="search person"
        className="search"
        onChange={(event) => setSearchTerm(event.target.value)}
      />
      <div className="card-list">
        {props.people
          .filter((value) => {
            if (searchTerm == "") {
              return value;
            } else if (value.name.first.toLowerCase().includes(searchTerm.toLowerCase())) {
              return value;
            }
          })
          .map((person, index) => (
            <Card key={index} person={person} />
          ))}
      </div>
    </>
  );
};
