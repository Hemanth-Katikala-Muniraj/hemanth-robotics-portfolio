import { useEffect, useState } from "react";

import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";

const Index = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Safety fallback: even if something fails, don't block UI forever
    const t = setTimeout(() => setLoading(false), 4500);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="relative min-h-screen bg-background">
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {/* Main site content */}
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Navigation />
      <Footer />
    </div>
  );
};

export default Index;
