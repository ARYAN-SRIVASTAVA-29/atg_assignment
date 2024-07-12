import React, { useState } from 'react';
import './Form.css'
import SignIn from '../SignIn/SignIn';
import JoinIn from '../JoinIn/JoinIn';


export default function Form() {

    const [activeTab, setActiveTab] = useState('signIn');

    return (
        <div className="form">
        <div className="tabs">
          <span
            className={`tab ${activeTab === 'signIn' ? 'active' : ''}`}
            onClick={() => setActiveTab('signIn')}
          >
            Sign In
          </span>
          <span
            className={`second tab ${activeTab === 'joinIn' ? 'active' : ''}`}
            onClick={() => setActiveTab('joinIn')}
          >
            Join In
          </span>
        </div>
  
        {/* Render the SignIn or JoinIn component based on the active tab */}
        {activeTab === 'signIn' ? <SignIn/> : <JoinIn />}
      </div>
    );
  }