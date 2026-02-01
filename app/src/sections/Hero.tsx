import { useEffect, useState, useRef } from 'react';
import { Shield, CheckCircle, FileText, Star, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    text: "Always trustworthy and reliable. Clear website and easy process.",
    author: "Felix K.",
  },
  {
    text: "Professional, transparent and very well executed. Highly recommend!",
    author: "Karim P.",
  },
  {
    text: "You can tell immediately that this is a serious operation. Great experience!",
    author: "Laura M.",
  },
  {
    text: "Seamless experience from start to finish. Couldn't be happier with the service.",
    author: "Marcus T.",
  },
  {
    text: "Everything was crystal clear and straightforward. Love the transparency!",
    author: "Sophie R.",
  },
];

export function Hero() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/villa-hero.jpg"
          alt="La Casa De Villa in Bali"
          className="w-full h-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="text-center">
          {/* Badge */}
          <div
            className={`inline-block mb-6 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span className="bg-[#d4af37] text-black text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full">
              Limited Opportunity
            </span>
          </div>

          {/* Pre-headline */}
          <p
            className={`text-sm md:text-base tracking-[0.3em] text-gray-300 mb-4 transition-all duration-700 delay-100 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            GUARANTEED: 4 WINNERS TOTAL
          </p>

          {/* Headline */}
          <h1
            className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <span className="text-white">Win a </span>
            <span className="gold-text">$1,000,000</span>
            <br />
            <span className="gold-text">Villa in Bali</span>
          </h1>

          {/* Subheadline */}
          <p
            className={`text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8 transition-all duration-700 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            5 bedrooms. Private pool. In the heart of Canggu.
            <br className="hidden sm:block" />
            Your escape to paradise—or a seven-figure asset.
            <br className="hidden sm:block" />
            Plus 3 bonus winners get $10,000 cash each.
          </p>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 transition-all duration-700 delay-400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <a
              href="https://buy.stripe.com/cNi7sL9xtfGR5X532Y2Fa05"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg animate-pulse-glow"
            >
              Enter Now
            </a>
            <a
              href="#how-it-works"
              className="btn-secondary"
            >
              See How It Works
            </a>
          </div>

          {/* Trust Badges */}
          <div
            className={`flex flex-wrap items-center justify-center gap-4 md:gap-8 mb-12 transition-all duration-700 delay-500 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="trust-badge">
              <Shield size={16} className="text-[#d4af37]" />
              <span>Secure Payment</span>
            </div>
            <div className="trust-badge">
              <CheckCircle size={16} className="text-[#d4af37]" />
              <span>Verified Draw</span>
            </div>
            <div className="trust-badge">
              <FileText size={16} className="text-[#d4af37]" />
              <span>Transparent Rules</span>
            </div>
            <div className="trust-badge">
              <span className="text-[#d4af37] font-bold">18+</span>
              <span>Adults Only</span>
            </div>
          </div>

          {/* Trustpilot Rating */}
          <div
            className={`flex items-center justify-center gap-2 mb-8 transition-all duration-700 delay-600 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={16} className="fill-[#10b981] text-[#10b981]" />
              ))}
            </div>
            <span className="text-sm text-gray-300">
              <span className="font-semibold text-white">Trustpilot Rated 5.0</span> by our community
            </span>
          </div>

          {/* Testimonial Carousel */}
          <div
            className={`max-w-xl mx-auto transition-all duration-700 delay-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="glass rounded-2xl p-6 relative">
              <button
                onClick={prevTestimonial}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-white transition-colors"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextTestimonial}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-white transition-colors"
              >
                <ChevronRight size={20} />
              </button>
              <div className="px-8">
                <p className="text-gray-300 italic mb-3">
                  "{testimonials[currentTestimonial].text}"
                </p>
                <p className="text-sm text-[#d4af37]">
                  — {testimonials[currentTestimonial].author}
                </p>
              </div>
              {/* Dots */}
              <div className="flex justify-center gap-2 mt-4">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentTestimonial(i)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      i === currentTestimonial ? 'bg-[#d4af37]' : 'bg-gray-600'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Info Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0a0a0a] to-transparent py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <span className="text-[#d4af37]">🏆</span>
              <span>4 Guaranteed Winners</span>
            </div>
            <a
              href="#how-it-works"
              className="flex items-center gap-2 text-[#d4af37] hover:underline"
            >
              <span>ℹ️</span>
              <span>See How It Works</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
