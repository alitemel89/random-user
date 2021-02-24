import React from 'react';
import './card.scss';

export const Card = ({ person }) => {
    const { name, picture, location, email } = person;
    return (
      <div className="card-container">
        <img
          alt="person"
          src={picture.large}
          className="card-container__image"
        />
        <h2 className="card-container__name">
          {name.first} {name.last}
        </h2>
        <p className="card-container__location">
          <i class="fas fa-map-marker-alt"></i>
          &nbsp;{location.state}, {location.country}{" "}
        </p>
        <p className="card-container__email">Contact: {email}</p>
      </div>
    );
}