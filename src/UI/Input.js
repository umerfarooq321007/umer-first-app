import React from 'react';

import './Input.css';

const Input = (props) => {

  return <input
    className='input'
    id={'phone'}
    value={props.value}
    onChange={props.onChange}
    onBlur={props.onBlur}
  />;
};

export default Input;