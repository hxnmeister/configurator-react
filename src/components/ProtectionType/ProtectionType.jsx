import React from 'react';
import CheckElement from './CheckElement';

const ProtectionType = () => 
{
    const elementsNames = ['theft protection', 'fire security', 'protection against leaks', 'street security'];
    const elementsImages = 
    [
        'https://cdn0.iconfinder.com/data/icons/cyber-security-solid-threat-protection/512/Hacker_anonymous-256.png',
        'https://cdn4.iconfinder.com/data/icons/doodle-5/155/fire-256.png',
        'https://cdn4.iconfinder.com/data/icons/house-plumbing/85/house_water_leak_leaking_flood-256.png',
        'https://cdn0.iconfinder.com/data/icons/city-elements-11/500/City-28-256.png'
    ];

    return (
        <div className='optionsContainer'>
            {elementsNames.map( (element, index) => <CheckElement value={element} imagePath={elementsImages[index] ?? ''} key={index}/> )}
        </div>
    );
}

export default ProtectionType;
