import React from 'react';
import './card.css';

export const Card = (props) => {
    return (
        <div className="card-container">
            <img alt="person" src={props.person.picture.large } />
            <h1>{ props.person.name.first } { props.person.name.last }</h1>
            <p> { props.person.email }</p>
        </div>
    )
}