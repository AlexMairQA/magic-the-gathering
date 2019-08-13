import React from 'react';
import './Card.css';

function Card(props) {
    return (

        <div className="card">
            <div className="card-title">
            <h1>{props.name}</h1>
            
            <h2>{props.manaCost}</h2>
            </div>
                <div className="card-img">
                    <img src={props.imageSrc} alt="Magic"/>
                    </div>
            <h2 className="card-text">{props.titleLine}</h2>
            {/* <p>{props.expansionSymbol}</p>*/}
            <div className="card-text">
            <h4>ability: {props.textBox.ability}</h4>
            <h4>{props.textBox.flavour}</h4>
            <h4>power: {props.textBox.power}</h4>
            <h4>{props.textBox.collectorNumber}</h4>
            </div>
       
        </div>
    )
} export default Card;