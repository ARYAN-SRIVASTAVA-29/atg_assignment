import React, { useState } from 'react';
import { IoMdEye, IoMdEyeOff } from 'react-icons/io';
import './PasswordInput.css';

const PasswordInput = ({ placeholder }) => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="password-input-container">
      <input
        type={passwordVisible ? 'text' : 'password'}
        placeholder={placeholder}
        className="password-input"
      />
      <button
        type="button"
        className="toggle-password-visibility"
        onClick={togglePasswordVisibility}
      >
        {passwordVisible ? <IoMdEyeOff /> : <IoMdEye />}
      </button>
    </div>
  );
};

export default PasswordInput;
