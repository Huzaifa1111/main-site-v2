import Sourcing from "../../components/services/Sourcing";
import OurProcess from "../../components/products/OurProcess";
import ProductsHero from "../../components/products/ProductsHero";
import WhyChooseUs from "../../components/WhyChooseUs";
import Shiping from "../../components/products/Shipping";


export default function Page() {
  return (
    <div>
      <ProductsHero />
      <WhyChooseUs />
      <OurProcess />
      <Sourcing />
      <Shiping />
      
    </div>
  );
}