import "./Header.css";
import Image from "next/image";
import { MdExplore } from "react-icons/md";
import { FaAngleDown, FaStar, FaBookmark, FaBell, FaShoppingCart, FaSearch} from "react-icons/fa";
import { CiSearch } from "react-icons/ci";

export default function Header() {
  return (
    <>
   
<nav className="navbar">
<div className="container">
   
   <div className="nav-parent">

<div className="logo">
   <img className="logo-img" src="../logo.png"/>
</div>



<div className="search-parent">
   <div className="search-input">
      <input
      className="s-input"
      type="text" 
      placeholder="Search here...." />
   </div>
   <div className="search-btn">
      <button
      className="s-btn"
      >
         <CiSearch/>
      </button>
   </div>
</div>


<div className="icon-parent">

<div className="dp-gb dp-btn">
   <div className="ic ic-left"><MdExplore/></div>
   <div className="dp-txt">Explore</div>
   <div className="ic-right"><FaAngleDown/></div>
</div>

<div className="dp-gb dp-btn-2">
   <div className="ic-left"><FaStar/></div>
   <div className="dp-txt">Hobbies</div>
   <div className="ic-right"><FaAngleDown/></div>
</div>

<div className="ic-r"><FaBookmark/></div>

<div className="ic-r"><FaBell/></div>

<div className="ic-r"><FaShoppingCart/></div>

<div>
<button type="button" className="nav-btn btn btn-outline-secondary" disabled>Sign in</button>
</div>

</div>



   </div>
</div>
</nav>



    </>
  );
}
