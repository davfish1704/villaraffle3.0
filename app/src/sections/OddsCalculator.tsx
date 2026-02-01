import { useEffect, useRef, useState } from 'react';
import { Calculator, Info } from 'lucide-react';

export function OddsCalculator() {
  const [isVisible, setIsVisible] = useState(false);
  const [userTickets, setUserTickets] = useState(1);
  const sectionRef = useRef<HTMLElement>(null);

  // Placeholder total sold - would be fetched from backend
  const totalSold = 25000;

  const odds = userTickets > 0 ? Math.ceil(totalSold / userTickets) : 0;

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
        <div className="max-w-2xl mx-auto">
          {/* Section Header */}
          <div
            className={`text-center mb-12 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="inline-flex items-center gap-2 mb-4">
              <Calculator className="w-6 h-6 text-[#d4af37]" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Know Your Odds
            </h2>
            <p className="text-gray-400 text-lg">
              Full transparency. No hidden math.
            </p>
          </div>

          {/* Calculator */}
          <div
            className={`glass rounded-2xl p-8 md:p-12 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="grid sm:grid-cols-3 gap-6 items-center mb-8">
              {/* Your Tickets */}
              <div className="text-center">
                <label className="block text-gray-400 text-sm mb-2">Your Tickets</label>
                <input
                  type="number"
                  min="1"
                  value={userTickets}
                  onChange={(e) => setUserTickets(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-full bg-white/5 border border-white/20 rounded-lg px-4 py-3 text-white text-center text-xl font-bold focus:outline-none focus:border-[#d4af37] transition-colors"
                />
              </div>

              {/* Divider */}
              <div className="text-center text-gray-500 text-2xl font-bold">/</div>

              {/* Total Sold */}
              <div className="text-center">
                <label className="block text-gray-400 text-sm mb-2">Total Sold</label>
                <div className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white text-center text-xl font-bold">
                  {totalSold.toLocaleString()}
                </div>
              </div>
            </div>

            {/* Result */}
            <div className="border-t border-white/10 pt-8 text-center">
              <p className="text-gray-400 mb-2">Your Odds</p>
              <p className="text-4xl md:text-5xl font-bold gold-text">
                1 in {odds.toLocaleString()}
              </p>
            </div>
          </div>

          {/* Disclaimer */}
          <div
            className={`flex items-center justify-center gap-2 mt-6 text-gray-500 text-sm transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <Info className="w-4 h-4 flex-shrink-0" />
            <span>
              Odds depend on total entries sold. This is an estimate based on current sales.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
