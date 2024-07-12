'use client'

import { useEffect } from 'react';
import dynamic from 'next/dynamic';
import Header from "./components/Header/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Hero from "./components/Hero/Hero";
import CardSection from "./components/CardSection/CardSection";
import AddOwn from "./components/AddOwn/AddOwn";
import Testimonials from "./components/Testimonials/Testimonials";
import GetStart from "./components/GetStart/GetStart";
import Footer from "./components/Footer/Footer";
import Copyright from "./components/Copyright/Copyright";

// Dynamically import bootstrap JS
const BootstrapJS = dynamic(
  () => import('bootstrap/dist/js/bootstrap.bundle.min'),
  { ssr: false }
);

export default function Home() {
  useEffect(() => {
    BootstrapJS();
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <CardSection />
      <AddOwn />
      <Testimonials />
      <GetStart />
      <Footer />
      <Copyright />
    </>
  );
}
