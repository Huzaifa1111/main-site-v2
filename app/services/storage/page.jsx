import Storage from '../../../components/services/Storage';
import { serviceMetadata } from '../../servicesData';

export default function StoragePage() {
  return (
    <section className="py-12 px-6 max-w-6xl mx-auto">
      <Storage />
    </section>
  );
}

export const metadata = {
  title: 'Storage | Naxi',
  description: 'Secure and affordable storage solutions for your business needs.',
  openGraph: {
    title: 'Storage | Naxi',
    description: 'Secure and affordable storage solutions for your business needs.',
    url: '/services/storage',
  },
};