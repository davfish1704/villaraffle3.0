import { useEffect, useRef, useState } from 'react';
import { Check, Home, DollarSign, Gift } from 'lucide-react';

const highlights = [
  'Modern luxury interior with premium finishes',
  'Private swimming pool and tropical garden',
  '5 spacious bedrooms with en-suite bathrooms',
  'Open-plan living and dining areas',
  'Fully equipped designer kitchen',
  'Outdoor living and entertainment spaces',
  'Secure gated property with parking',
  'Fully furnished—move-in ready',
];

export function ValueStack() {
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
    <section
      id="value-stack"
      ref={sectionRef}
      className="section-padding bg-[#0a0a0a]"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            What You Could Win
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            La Casa De Villa—a fully furnished luxury property in Bali's most desirable neighborhood.
          </p>
        </div>

        {/* Value Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {/* Property Value */}
          <div
            className={`glass rounded-2xl p-8 text-center card-hover transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="w-14 h-14 rounded-full bg-[#d4af37]/20 flex items-center justify-center mx-auto mb-4">
              <Home className="w-7 h-7 text-[#d4af37]" />
            </div>
            <p className="text-gray-400 text-sm mb-2">Estimated Value</p>
            <p className="text-4xl md:text-5xl font-bold gold-text">$1,000,000</p>
            <p className="text-gray-400 text-sm mt-1">USD</p>
          </div>

          {/* Rental Income */}
          <div
            className={`glass rounded-2xl p-8 text-center card-hover transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="w-14 h-14 rounded-full bg-[#d4af37]/20 flex items-center justify-center mx-auto mb-4">
              <DollarSign className="w-7 h-7 text-[#d4af37]" />
            </div>
            <p className="text-gray-400 text-sm mb-2">Estimated Monthly Rental</p>
            <p className="text-4xl md:text-5xl font-bold gold-text">$8,000+</p>
            <p className="text-gray-400 text-sm mt-1">USD / month</p>
          </div>

          {/* Bonus Prizes */}
          <div
            className={`glass rounded-2xl p-8 text-center card-hover transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="w-14 h-14 rounded-full bg-[#d4af37]/20 flex items-center justify-center mx-auto mb-4">
              <Gift className="w-7 h-7 text-[#d4af37]" />
            </div>
            <p className="text-gray-400 text-sm mb-2">Bonus Cash Prizes</p>
            <p className="text-4xl md:text-5xl font-bold gold-text">$30,000</p>
            <p className="text-gray-400 text-sm mt-1">3 winners × $10,000</p>
          </div>
        </div>

        {/* Villa Highlights */}
        <div
          className={`glass rounded-2xl p-8 md:p-12 mb-12 transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h3 className="text-xl font-semibold text-white mb-6 text-center">
            Villa Highlights
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {highlights.map((highlight, index) => (
              <div key={index} className="flex items-start gap-3">
                <Check className="w-5 h-5 text-[#d4af37] flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Supporting Copy */}
        <div
          className={`text-center mb-10 transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-gray-400 max-w-2xl mx-auto">
            No property transfer taxes, no mortgage, no hidden fees.
            The villa is fully furnished and ready for you to move in, rent out, or sell.
          </p>
        </div>

        {/* CTA */}
        <div
          className={`text-center transition-all duration-700 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-white mb-4">Enter now for $30 per ticket</p>
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
