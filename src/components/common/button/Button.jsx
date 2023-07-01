import React from 'react';
import './button.scss';

const Button = ({ text }) => {
    return (
        <button className='btn_primary'>
            {text}
        </button>
    )
}

export default Button
