'use client'

import Link from "next/link";
import "./Footer.css";
import { FaFacebookF, FaTwitter, FaInstagram, FaPinterest, FaGoogle, FaYoutube, FaTelegram, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer-cnt">
          <div className="f-one f-gb">
            <div className="title">Hobbycue</div>

            <div className="list">
              <li>About Us</li>
              <li>Our Services</li>
              <li>Work with Us</li>
              <li>FAQ</li>
              <li>Contact Us</li>
            </div>
          </div>
          <div className="f-two f-gb">
            <div className="title">How Do I</div>

            <div className="list">
              <li>Sign Up</li>
              <li>Add a Listing</li>
              <li>Claim Listing</li>
              <li>Post a Query</li>
              <li>Add a Blog Post</li>
              <li>Other Queries</li>
            </div>
          </div>
          <div className="f-three f-gb">
            <div className="title">Quick Links</div>

            <div className="list">
              <li>Listings</li>
              <li>Blog Posts</li>
              <li>Shop / Store</li>
              <li>Community</li>
            </div>
          </div>
          <div className="f-four">
          <div className="media">
            <div className="media-txt fo-txt">
                Social Media
            </div>
            <div className="media-icon">
                <div className="m-i"><FaFacebookF/></div>
                <div className="m-i"><FaTwitter/></div>
                <div className="m-i"><FaInstagram/></div>
                <div className="m-i"><FaPinterest/></div>
                <div className="m-i"><FaGoogle/></div>
                <div className="m-i"><FaYoutube/></div>
                <div className="m-i"><FaTelegram/></div>
                <div className="m-i"><FaEnvelope/></div>
            </div>
          </div>

          <div className="friends">
            <div className="f-txt fo-txt">
                Invite Friends
            </div>

            <div className="f-input">
   <div className="search-input">
      <input
      className="s-input"
      type="email" 
      placeholder="Email" />
   </div>
   <div className="search-btn">
      <button
      className="s-btn"
      >
         Invite
      </button>
   </div>
</div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
