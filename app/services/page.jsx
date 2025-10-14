import Link from 'next/link';
import { serviceSlugs, serviceComponents, serviceMetadata } from '../servicesData';

export default function Services() {
  return (
    <>
      <section className="py-12 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col gap-6">
          {serviceSlugs.map((slug) => {
            const Component = serviceComponents[slug];
            return (
              <div key={slug} className="p-6">
                <Component />
                
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}

export const metadata = {
  title: 'Services | Naxi',
  description: 'Explore Naxi’s comprehensive range of services.',
  openGraph: {
    title: 'Services | Naxi',
    description: 'Explore Naxi’s comprehensive range of services.',
    url: '/services',
  },
};