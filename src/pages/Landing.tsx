import React from 'react';
import { Hero } from '../components/Hero';
import { Features } from '../components/Features';
import { Classes } from '../components/Classes';
import { BlogDisplay } from '../components/BlogDisplay';
import { HealthInfo } from '../components/HealthInfo';
import { FAQ } from '../components/FAQ';
import { ContactForm } from '../components/ContactForm';

export function Landing() {
  return (
    <div>
      <Hero />
      <Features />
      <Classes />
      <BlogDisplay />
      <HealthInfo />
      <FAQ />
      <ContactForm />
    </div>
  );
}