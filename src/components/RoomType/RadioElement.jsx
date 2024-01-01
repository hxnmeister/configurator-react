import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setRoomType } from '../../slices/roomTypeSlice';

const RadioElement = ({ value, imagePath }) => 
{
    const currentValue = useSelector(state => state.roomType.value);
    const dispatch = useDispatch();

    const changeHandler = (e) => 
    {
        dispatch(setRoomType(e.target.value));
    }

    return (
        <div className='option'>
            <div>
                <input type="radio" name="roomType" value={value} onChange={ changeHandler } checked={ currentValue === value }/>
                <label>{value[0].toUpperCase() + value.slice(1)}</label>
            </div>
            <img src={imagePath} alt={value}/>
        </div>
    );
}

export default RadioElement;
