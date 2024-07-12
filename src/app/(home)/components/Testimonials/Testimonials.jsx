'use client'

import './Testimonial.css'
import { FaQuoteLeft } from "react-icons/fa6";
import { FaMicrophone } from "react-icons/fa";

export default function Testimonials() {
    return (
     <>
     <div className="testimonial">
        <div className="container">
           <div className="testi-cnt">
            <div className="testi-1">
                <div className="testi-1-a">
                    <FaQuoteLeft/>
                </div>
                <div className="testi-1-b">
                    Testimonial
                </div>
            </div>

            <div className="testi-2">
            In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.
            </div>

            <div className="testi-3">
                <div className="testi-3-a">
{/* ------------ */}

<div className="audio-content">
        <div className="audio-icon">
          <button className="play-button">&#9654;</button>
        </div>
        <div className="audio-track">
          <div className="track">
            <div className="progress"></div>
          </div>
          <div className="time">0:00</div>
        </div>
      </div>

      <div className="profile">

      <div className="icon">
          <FaMicrophone/>
        </div>
        <div className="profile-img">
        <img src='../testi.png'/>
        </div>
        
      </div>
{/* --------------------- */}
                </div>

                <div className="testi-3-b">
                  <div className="p-img-a">
                    <img src='../testi.png'/>
                  </div>
                  <div className="p-name">
                    <div className="p-name-a">
                      Shubha Nagaranjan
                    </div>
                    <div className="p-name-b">
                      Classical Dancer
                    </div>
                  </div>
                </div>
            </div>
           </div>
        </div>
     </div>
    
     </>
    );
  }