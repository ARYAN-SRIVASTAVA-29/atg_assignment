import Card from "../Card/Card";
import "./AddOwn.css"
import { IoIosAddCircle } from "react-icons/io";

const iconAdd = <IoIosAddCircle/>

export default function AddOwn() {
    return (
     <>
   <div className="add-own">
    <div className="container">
   <div className="add-own-content">
   <Card 
            card_class ="add_own"
            icon={iconAdd} 
            icontxt="Add your Own"
            btnText="Add New"
            text=" Are you a teacher or expert?  Do you sell or rent out equipment, venue or event tickets?  Or, you know someone who should be on hobbycue?  Go ahead and Add your Own page"/>
   </div>
    </div>
   </div>
     </>
    );
  }
  