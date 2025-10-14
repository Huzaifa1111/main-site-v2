
import WhyChooseUs from '../../components/WhyChooseUs'

import HeroSection from '../../components/about/HeroSection'
import WhatDoWeDo from '../../components/about/WhatDoWeDo'
import OurMission from '../../components/about/OurMission'
import OurValues from '../../components/about/OurValues'
import OurVision from '../../components/about/OurVision'


export const metadata = {
  title: 'About Us | Naxi',
  description: 'Learn about Naxi, helping over 50,000 sellers build their businesses with high-quality products at low prices.',
}

export default function About() {
  return (
    <main className="min-h-screen bg-gray-100">
   
      <HeroSection />
      <WhatDoWeDo />
      <OurMission />
      <OurVision />
      <OurValues />
            <WhyChooseUs />
      
   
    </main>
  )
}