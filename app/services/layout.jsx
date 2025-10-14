import ServicesHero from '../../components/services/ServicesHero';

export default function ServicesLayout({ children }) {
  return (
    <main className="min-h-screen bg-gray-100">
      <ServicesHero />
      {children}
    </main>
  );
}