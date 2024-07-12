'use client'

import Header from "./components/Header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Hero from "./components/Hero/Hero";
import CardSection from "./components/CardSection/CardSection";
import AddOwn from "./components/AddOwn/AddOwn";
import Testimonials from "./components/Testimonials/Testimonials";
import GetStart from "./components/GetStart/GetStart";
import Footer from "./components/Footer/Footer";
import Copyright from "./components/Copyright/Copyright";

export default function Home() {
  return (
   <>
   <Header/>
   <Hero/>
   <CardSection/>
   <AddOwn/>
   <Testimonials/>
   <GetStart/>
   <Footer/>
   <Copyright/>
   </>
  );
}
