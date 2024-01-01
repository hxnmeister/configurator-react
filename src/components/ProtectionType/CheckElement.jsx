import React, { useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setProtectionType } from '../../slices/protectionTypeSlice';

const CheckElement = ({ value, imagePath }) => 
{
    const currentValue = useSelector(state => state.protectionType.value);
    const dispatch = useDispatch();

    const changeHandler = (e) =>
    {
        const { value, checked } = e.target;

        dispatch(setProtectionType({ newValue: value, checked: checked }));
    }

    return (
        <div className='option'>
            <div>
                <input type="checkbox" name="protection" value={value} onChange={ changeHandler } checked={ currentValue.includes(value) }/>
                <label>{value[0].toUpperCase() + value.slice(1)}</label>
            </div>
            <img src={imagePath} alt={value} />
        </div>
    );
}

export default CheckElement;
