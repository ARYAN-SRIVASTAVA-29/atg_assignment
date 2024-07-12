'use client'

import "./Card.css"


export default function Card({icon, icontxt, text, btnText, card_class}) {
    return (
     <>
     <div className={`card ${card_class}`}>

        <div className="card-content">
        <div className={`c-1 `}>
            <div className="c-1-a">
                {icon}
            </div>
            <div className="c-1-b">
                {icontxt}
            </div>
        </div>
        <div className="c-2">
       {text}
        </div>
        <div className="c-3">
            <div className="card-btn">
                {btnText}
            </div>
        </div>
        </div>
     </div>
     </>
    );
  }