import { useEffect, useRef, useState } from 'react';
import { Home, TrendingUp, DollarSign } from 'lucide-react';

const benefits = [
  {
    icon: Home,
    title: 'Move In',
    subtitle: 'Start Your Bali Life',
    description:
      'Pack your bags and begin fresh. Wake up to tropical views, surf before breakfast, and live the dream every single day.',
  },
  {
    icon: TrendingUp,
    title: 'Rent Out',
    subtitle: 'Generate Passive Income',
    description:
      "Canggu is one of Asia's hottest rental markets. Earn consistent income from short-term or long-term tenants.",
  },
  {
    icon: DollarSign,
    title: 'Sell',
    subtitle: 'Cash Out Seven Figures',
    description:
      'Prefer liquidity? Sell the villa and bank the estimated $1,000,000 value. Invest it, spend it, secure your future.',
  },
];

export function Benefits() {
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
            Live In It. Rent It. Sell It.
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            One winner gets La Casa De Villa. What you do with it? That's entirely your call.
          </p>
        </div>

        {/* Benefit Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <div
              key={benefit.title}
              className={`glass rounded-2xl p-8 card-hover transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="w-16 h-16 rounded-full bg-[#d4af37]/20 flex items-center justify-center mb-6">
                <benefit.icon className="w-8 h-8 text-[#d4af37]" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{benefit.title}</h3>
              <p className="text-[#d4af37] font-medium mb-4">{benefit.subtitle}</p>
              <p className="text-gray-400">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`text-center transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-white mb-4">Your choice. Your future. Enter now.</p>
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
    </section>
  );
}
