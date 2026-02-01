import { useEffect, useRef, useState } from 'react';
import { Trophy, Gift, Users } from 'lucide-react';

export function BonusPrizes() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-[#0a0a0a]">
      <div className="container-custom">
        <div className="glass rounded-3xl p-8 md:p-16 overflow-hidden relative">
          {/* Decorative gradient */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#d4af37]/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

          <div className="relative z-10">
            {/* Section Header */}
            <div
              className={`text-center mb-12 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="inline-flex items-center gap-2 bg-[#d4af37]/20 text-[#d4af37] px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Gift className="w-4 h-4" />
                <span>BONUS PRIZES</span>
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                3 Winners Get <span className="gold-text">$10,000</span> Cash Each
              </h2>
              <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                Your entry doesn't just give you a shot at the villa.
                Three additional winners will each receive $10,000 USD in cash.
              </p>
            </div>

            {/* Prize Breakdown */}
            <div
              className={`grid md:grid-cols-2 gap-6 mb-12 max-w-3xl mx-auto transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              {/* Grand Prize */}
              <div className="bg-gradient-to-br from-[#d4af37]/20 to-[#d4af37]/5 rounded-2xl p-6 border border-[#d4af37]/30">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-[#d4af37] flex items-center justify-center">
                    <Trophy className="w-5 h-5 text-black" />
                  </div>
                  <span className="text-[#d4af37] font-bold">GRAND PRIZE</span>
                </div>
                <p className="text-white text-lg mb-2">1 winner</p>
                <p className="text-2xl font-bold gold-text">La Casa De Villa</p>
                <p className="text-gray-400 text-sm">est. $1,000,000 value</p>
              </div>

              {/* Bonus Prize */}
              <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-2xl p-6 border border-white/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-white font-bold">BONUS PRIZES</span>
                </div>
                <p className="text-white text-lg mb-2">3 winners</p>
                <p className="text-2xl font-bold text-white">$10,000 each</p>
                <p className="text-gray-400 text-sm">$30,000 total cash</p>
              </div>
            </div>

            {/* Copy Block */}
            <div
              className={`text-center mb-10 transition-all duration-700 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <p className="text-gray-300 max-w-xl mx-auto">
                That's <span className="text-white font-semibold">4 guaranteed winners</span> total.
                Every ticket enters you for both the villa AND the cash bonus prizes.
                More chances to win, same entry.
              </p>
            </div>

            {/* CTA */}
            <div
              className={`text-center transition-all duration-700 delay-400 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <p className="text-white mb-4">4 winners. 1 entry. Enter now.</p>
              <a
                href="https://buy.stripe.com/cNi7sL9xtfGR5X532Y2Fa05"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-block"
              >
                Enter Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
