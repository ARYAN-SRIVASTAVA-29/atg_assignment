import PasswordInput from '../PasswordInput/PasswordInput';
import './JoinIn.css'
import { IoLockClosed } from "react-icons/io5";

export default function JoinIn() {
    return (
     <div className="sign-in">
      <div className="cont-btn">
         <div className="logo">
            <img src='../google.png' />
         </div>
         <div className="cont-btn-txt up">
            Continue with Google
         </div>
      </div>

      <div className="cont-btn">
      <div className="logo">
            <img src='../fb.png' />
         </div>
         <div className="cont-btn-txt up">
            Continue with Facebook
         </div>
      </div>

      <div className="cn-line">
         <div className="l-1"></div>
         <div className="l-txt">Or connect with</div>
         <div className="l-1"></div>
      </div>

      <div className="input">
         <div className="i-email">
            <input 
            type='email'
            placeholder='Email'
            />
         </div>

         <div className="i-password">
           <PasswordInput placeholder="Password"/>
         </div>
      </div>


      <div className="remem remem-jn">
         <div className="rem-a rem-a-jn">
            <div className="line-a"></div>
            <div className="line-a"></div>
            <div className="line-a"></div>
         </div>
         <div className="rem-b">
            <span className='fg'>Password Strength</span>
         </div>
      </div>

      <div className="jn-txt">
      By continuing, you agree to our <span>Terms of Service</span> and <span>Privacy Policy.</span>
      </div>


      <div className="cont-btn jn-btn">
      
         <div className="cont-btn-txt">
            Agree and Continue
         </div>
</div>

     </div>
    );
  }