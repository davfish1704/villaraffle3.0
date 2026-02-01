import { useEffect, useRef, useState } from 'react';
import { Sparkles } from 'lucide-react';

export function FinalCTA() {
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
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-[#0f0f0f] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#d4af37]/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Icon */}
          <div
            className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#d4af37]/20 mb-8 transition-all duration-700 ${
              isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
            }`}
          >
            <Sparkles className="w-8 h-8 text-[#d4af37]" />
          </div>

          {/* Headline */}
          <h2
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            4 Winners. 1 Villa. <span className="gold-text">Your Chance.</span>
          </h2>

          {/* Subheadline */}
          <p
            className={`text-xl text-gray-300 mb-10 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            This is the sign you've been waiting for. Enter now.
          </p>

          {/* CTA Button */}
          <div
            className={`mb-8 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <a
              href="https://buy.stripe.com/cNi7sL9xtfGR5X532Y2Fa05"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-xl px-12 py-5 animate-pulse-glow inline-block"
            >
              Enter Now
            </a>
          </div>

          {/* Supporting Copy */}
          <p
            className={`text-gray-400 transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            $30 per ticket • 4 guaranteed winners • Secure payment via Stripe
          </p>
        </div>
      </div>
    </section>
  );
}
