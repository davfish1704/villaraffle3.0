import { useEffect, useState } from 'react';
import { Navbar } from './sections/Navbar';
import { Hero } from './sections/Hero';
import { ValueStack } from './sections/ValueStack';
import { Benefits } from './sections/Benefits';
import { BonusPrizes } from './sections/BonusPrizes';
import { Gallery } from './sections/Gallery';
import { LocationStory } from './sections/LocationStory';
import { TrustSection } from './sections/TrustSection';
import { HowItWorks } from './sections/HowItWorks';
import { Timeline } from './sections/Timeline';
import { OddsCalculator } from './sections/OddsCalculator';
import { PastWinners } from './sections/PastWinners';
import { FAQ } from './sections/FAQ';
import { FinalCTA } from './sections/FinalCTA';
import { Footer } from './sections/Footer';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden">
      <Navbar scrollY={scrollY} />
      <main>
        <Hero />
        <ValueStack />
        <Benefits />
        <BonusPrizes />
        <Gallery />
        <LocationStory />
        <TrustSection />
        <HowItWorks />
        <Timeline />
        <OddsCalculator />
        <PastWinners />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
