import Hero from '@/components/sections/hero';
import Features from '@/components/sections/features';
import Pricing from '@/components/sections/pricing';
import Testimonials from '@/components/sections/testimonials';
import CTA from '@/components/sections/cta';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Pricing />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  );
}