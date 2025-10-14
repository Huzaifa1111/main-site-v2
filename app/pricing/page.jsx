import PricingSection from "../../components/pricing/PricingSection"
import MainSection, { HowToStartSection } from "../../components/pricing/MainSection"



export const metadata = {
  title: 'About Us | Naxi',
  description: 'Learn about Naxi, helping over 50,000 sellers build their businesses with high-quality products at low prices.',
}

export default function Pricing() {
  return (
    <main className="min-h-screen ">
   
     <MainSection />
     <HowToStartSection />
     <PricingSection />
   
    </main>
  )
}