"use client";

import { useState } from "react";
import Loader from "@/components/Loader";
import SmoothScroll from "@/components/SmoothScroll";
import RosePetals from "@/components/RosePetals";
import ReservationWidget from "@/components/ReservationWidget";
import Hero from "@/components/Hero";
import About from "@/components/About";
import SignatureExperiences from "@/components/SignatureExperiences";
import ChefRecommendations from "@/components/ChefRecommendations";
import Menu from "@/components/Menu";
import CelebrationConfigurator from "@/components/CelebrationConfigurator";
import TimelineStory from "@/components/TimelineStory";
import Gallery from "@/components/Gallery";
import InstagramWall from "@/components/InstagramWall";
import Testimonials from "@/components/Testimonials";
import ReservationSystem from "@/components/ReservationSystem";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {/* Editorial Preloader Screen */}
      <Loader onComplete={() => setLoading(false)} />
      
      {/* Main Luxury Page Container */}
      <div 
        className={
          loading 
            ? "opacity-0 h-screen overflow-hidden pointer-events-none" 
            : "opacity-100 transition-opacity duration-1000"
        }
      >
        <SmoothScroll>
          {/* Global Ambient Interactive Canvas Petals */}
          <RosePetals />

          {/* Persistent Floating Reservation Overlay */}
          <ReservationWidget />

          {/* Section flow */}
          <Hero />
          <About />
          <SignatureExperiences />
          <ChefRecommendations />
          <Menu />
          <CelebrationConfigurator />
          <TimelineStory />
          <Gallery />
          <InstagramWall />
          <Testimonials />
          <ReservationSystem />
          <Location />
          <Footer />
        </SmoothScroll>
      </div>
    </>
  );
}
