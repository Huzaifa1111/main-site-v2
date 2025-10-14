import ProductQualityCheck from '../../../components/services/ProductQualityCheck.jsx';
import { serviceMetadata } from '../../servicesData';

export default function ProductQualityCheckPage() {
  return (
    <section className="py-12 px-6 max-w-6xl mx-auto">
      <ProductQualityCheck reverse={true} />
    </section>
  );
}

export const metadata = {
  title: 'Product Quality Check | Naxi',
  description: 'Ensure top-notch product quality with Naxi’s comprehensive inspection services.',
  openGraph: {
    title: 'Product Quality Check | Naxi',
    description: 'Ensure top-notch product quality with Naxi’s comprehensive inspection services.',
    url: '/services/productqualitycheck',
  },
};