import { useEffect, useRef, useState } from 'react';
import { Quote } from 'lucide-react';

const winners = [
  {
    initials: 'JD',
    name: '[WINNER_NAME_TBD]',
    prize: 'Villa in Thailand',
    quote: 'Still can\'t believe it. Changed everything.',
  },
  {
    initials: 'SM',
    name: '[WINNER_NAME_TBD]',
    prize: 'Luxury Apartment in Dubai',
    quote: 'Best decision I ever made was entering.',
  },
  {
    initials: 'RK',
    name: '[WINNER_NAME_TBD]',
    prize: 'Beachfront Condo',
    quote: 'Worth every ticket. No regrets.',
  },
];

const publications = [
  'Forbes', 'Bloomberg', 'CNBC', 'Business Insider', 'The Guardian'
];

export function PastWinners() {
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
    <section ref={sectionRef} className="section-padding bg-[#0f0f0f]">
      <div className="container-custom">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Real Winners. Real Prizes.
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Previous campaigns from Luck Dip Luxury Items Limited.
          </p>
        </div>

        {/* Winner Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {winners.map((winner, index) => (
            <div
              key={winner.initials}
              className={`glass rounded-2xl p-8 card-hover transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <Quote className="w-8 h-8 text-[#d4af37]/30 mb-4" />
              <p className="text-gray-300 italic mb-6">"{winner.quote}"</p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-[#d4af37]/20 flex items-center justify-center">
                  <span className="text-[#d4af37] font-bold">{winner.initials}</span>
                </div>
                <div>
                  <p className="text-white font-medium">{winner.name}</p>
                  <p className="text-gray-400 text-sm">{winner.prize}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* As Seen In */}
        <div
          className={`text-center transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-gray-400 text-sm mb-6">As Seen In</p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {publications.map((pub) => (
              <span
                key={pub}
                className="text-gray-500 font-semibold text-lg opacity-50 hover:opacity-100 transition-opacity"
              >
                {pub}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
