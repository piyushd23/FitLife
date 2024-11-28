import React from 'react';
import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { Classes } from '../components/Classes';
import { BlogDisplay } from '../components/BlogDisplay';
import { HealthInfo } from '../components/HealthInfo';
import { FAQ } from '../components/FAQ';
import { Footer } from '../components/Footer';

export function Landing() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Classes />
      <BlogDisplay />
      <HealthInfo />
      <FAQ />
      <Footer />
    </div>
  );
}