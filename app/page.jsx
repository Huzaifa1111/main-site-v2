import HeroSection from '../components/HeroSection'
import RegionSelection from '../components/RegionSelection'
import HotItems from '../components/HotItems'
import ManagedBy from '../components/ManagedBy'
import Categories from '../components/Categories'
import SellOnlineBanner from '../components/SellOnlineBanner'
import ExploreItems from '../components/ExploreItems'
import WhyChooseUs from '../components/WhyChooseUs'
import Testimonials from '../components/Testimonials'
import CourierPartners from '../components/CourierPartners'

export default function Home() {
  return (
    <main className="min-h-screen ">
      
      <HeroSection />
      <RegionSelection />
      <HotItems />
      <ManagedBy />
      <Categories />
      <SellOnlineBanner />
      <ExploreItems />
      <WhyChooseUs />
      <Testimonials />
      <CourierPartners />
    
    </main>
  )
}