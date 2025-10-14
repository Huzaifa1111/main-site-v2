import Header from '../components/Header';
import Footer from '../components/Footer';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className="flex flex-col min-h-screen" suppressHydrationWarning>
        <Header />
        <main className="flex-grow bg-gray-100">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

export const metadata = {
  title: 'Naxi',
  description: 'Naxi - Empowering businesses with quality services.',
  openGraph: {
    title: 'Naxi',
    description: 'Naxi - Empowering businesses with quality services.',
    url: '/',
  },
};