import React from 'react';
import { useSelector } from 'react-redux';

const Result = () => 
{
    const { counter, roomType, protectionType } = useSelector(state => state);

    if(roomType.value !== '' && protectionType.value.length !== 0)
    {
        return(
            <>
                <h1>Room type: {roomType.value}</h1>
                <h1>Protection type: {protectionType.value.map(value => value).join(', ')}</h1>
                <h1>Rooms amount: {counter.value}</h1>
            </>
        );
    }
    else
    {
        return(
            <h1>Not all fields completed!</h1>
        );
    }
}

export default Result;
