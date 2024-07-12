import PasswordInput from '../PasswordInput/PasswordInput';
import './SignIn.css'
import { IoLockClosed } from "react-icons/io5";

export default function SignIn() {
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


      <div className="remem">
         <div className="rem-a">
         <input type="checkbox" className="checkbox" />
         <span className='me'>Remember Me</span>
         </div>
         <div className="rem-b">
            <div className="lk-i"><IoLockClosed/></div>
            <span className='fg'>Forgot Password ?</span>
         </div>
      </div>


      <div className="cont-btn">
      
         <div className="cont-btn-txt">
            Continue
         </div>
</div>

     </div>
    );
  }