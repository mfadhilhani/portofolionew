import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Certifications from '@/components/Certifications';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
  return (
    <main className="relative bg-[#0a1628] min-h-screen overflow-x-hidden">
      {/* Scanline effect */}
      <div className="scanline" />

      {/* Grid background */}
      <div className="fixed inset-0 bg-grid opacity-100 pointer-events-none" />

      {/* Radial gradient overlay */}
      <div className="fixed inset-0 bg-gradient-radial from-blue-950/20 via-transparent to-transparent pointer-events-none" />

      <Navbar locale={locale} />
      <Hero />
      <About />
      <Skills />
      <Certifications />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
