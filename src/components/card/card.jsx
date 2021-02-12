import React from 'react';
import './card.css';

export const Card = (props) => {
    return (
        <div className="card-container">
            <img alt="monster" src={props.monster.picture.large } />
            <h1>{ props.monster.name.first } { props.monster.name.last }</h1>
            <p> { props.monster.email }</p>
        </div>
    )
}