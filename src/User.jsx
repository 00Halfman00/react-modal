import React, { useState, useContext, useRef } from 'react';
import { userContext } from './index.jsx';

const User = () => {
  const { user, setUser } = useContext(userContext);
  const userInputRef = useRef();
  const enterUser = () => {
    if (userInputRef.current.value[1]) {
      setUser(userInputRef.current.value);
      userInputRef.current.value = '';
    }
  };

  return (
    <div>
      <div className='user-name-div'>
        <p>user: </p>
        <h1>{user}</h1>
      </div>
      <input type="text" ref={userInputRef}></input>
      <button className='btn' onClick={enterUser}>enter</button>
    </div>
  );
};

export default User;
