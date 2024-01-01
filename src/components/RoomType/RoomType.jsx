import React from 'react';
import './configurator.css';
import RadioElement from './RadioElement';

const elementsNames = ['apartment', 'house', 'office', 'business'];
const elementsImages = 
[
    'https://cdn2.iconfinder.com/data/icons/bitsies/128/City-256.png', 
    'https://cdn2.iconfinder.com/data/icons/bitsies/128/Home-512.png',
    'https://cdn4.iconfinder.com/data/icons/48-bubbles/48/03.Office-256.png',
    'https://cdn2.iconfinder.com/data/icons/bitsies/128/Bank-256.png'
];

const RoomType = () => {
    return (
        <div className='optionsContainer'>
            {elementsNames.map( (name, index) => <RadioElement value={name} imagePath={elementsImages[index] ?? ''} key={index}/> )}
        </div>
    );
}

export default RoomType;
