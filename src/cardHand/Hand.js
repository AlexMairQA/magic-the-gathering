import React from 'react';
import Card from './Card.js';


export default class Hand extends React.Component{
    render(){
        let textBox={"ability":"space wombles", "flavour": "coffee", "power": 3, "collectorNumber": 4};
        let myImage="https://en.wikipedia.org/wiki/Dragon#/media/File:Friedrich-Johann-Justin-Bertuch_Mythical-Creature-Dragon_1806.jpg";
        
        return(
<div>
<Card name="Monster" imageSrc="https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=109684&type=card" titleLine="Rock God" textBox={textBox} />
<Card name="Angel" imageSrc="https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=109684&type=card" titleLine="Arch Mage" textBox={textBox} />
<Card name="SpaceBat" imageSrc="https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=109684&type=card" titleLine="Dragon Mage" textBox={textBox} />
<Card name="Moon Unit Zappa" imageSrc="https://gatherer.wizards.com/Handlers/Image.ashx?multiverseid=109684&type=card" titleLine="Metal Devil" textBox={textBox} />

</div>
        )
        
    }
}