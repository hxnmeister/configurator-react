import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../../slices/roomCounterSlice';
import './addInfo.css';

const AdditionalInformation = () => 
{
    const roomtype = useSelector(state => state.roomType.value);
    const count = useSelector(state => state.counter.value);
    const dispatch = useDispatch();

    return (
        <div>
            <div className='optionsContainer'>
                <div className='element'>
                    <div className='title'>
                        <span>Number of Rooms</span>
                        <img src="https://cdn2.iconfinder.com/data/icons/home-145/24/floorplan-design-room-estate-architect-home-plan-architecture-blueprint-project-real-256.png" alt="room" />
                    </div>
                    <div className='counter'>
                        <button onClick={ () => dispatch(decrement()) }>-</button>
                        <div style={{padding: "0 50px"}}>{count}</div>
                        <button onClick={ () => dispatch(increment()) }>+</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AdditionalInformation;
