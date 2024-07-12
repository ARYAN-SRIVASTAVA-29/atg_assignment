'use client'

import Card from '../Card/Card';
import './CardSection.css'
import { IoIosPeople, IoMdBasket } from "react-icons/io";
import { MdPlace, MdEventAvailable } from "react-icons/md";
const iconCardA = <IoIosPeople/>
const iconCardB = <MdPlace/>
const iconCardC = <IoMdBasket/>
const iconCardD = <MdEventAvailable/>

export default function CardSection() {
    return (
     <>
     <div className="card-section">
        <div className="container">
            <div className="card-a">
            <Card 
            card_class ="people"
            icon={iconCardA} 
            icontxt="People"
            btnText="Connect"
            text=" Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator."/>
            <Card 
            card_class ="place"
            icon={iconCardB}
            icontxt="Place"
            text="Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot at venues that allow booking through hobbycue."
            btnText="Meet Up"/>
            </div>

            <div className="card-a">
            <Card
            card_class ="product"
            icon={iconCardC}
            icontxt="Product"
            text="Find equipment or supplies required for your hobby.  Buy, rent or borrow from shops, online stores or from community members."
            btnText="Get It"
            />
            <Card 
            card_class ="program"
             icon={iconCardD}
             icontxt="Program"
             text="Find events, meetups and workshops related to your hobby.  Register or buy tickets online."
             btnText="Attend"
            />
            </div>
        </div>
     </div>
     </>
    );
  }