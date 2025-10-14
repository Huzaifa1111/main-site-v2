import Sourcing from '../../../components/services/Sourcing';

export default function SourcingPage() {
  return (
    <section className="  ">
      <Sourcing  reverse={true}/>
    </section>
  );
}

export const metadata = {
  title: 'Storage | Naxi',
  description: 'Secure and affordable storage solutions for your business needs.',
  openGraph: {
    title: 'Storage | Naxi',
    description: 'Secure and affordable storage solutions for your business needs.',
    url: '/services/sourcing',
  },
};