import { useEffect, useRef, useState } from 'react';
import { Ticket, CreditCard, Mail, FileText } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: Ticket,
    title: 'Choose Your Tickets',
    description: 'Select the number of entries you want. $30 per ticket. More tickets = better odds.',
  },
  {
    number: '02',
    icon: CreditCard,
    title: 'Secure Payment',
    description: 'Pay safely via Stripe with bank-level encryption. Your information stays protected.',
  },
  {
    number: '03',
    icon: Mail,
    title: 'Get Your Tickets',
    description: 'Tickets are emailed instantly after payment. Each has a unique ID for the draw.',
  },
];

export function HowItWorks() {
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
      id="how-it-works"
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
            How It Works
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Three simple steps to enter. One life-changing outcome.
          </p>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`relative transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              {/* Connector line (hidden on mobile) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-px bg-gradient-to-r from-[#d4af37]/50 to-transparent" />
              )}

              <div className="glass rounded-2xl p-8 text-center relative">
                {/* Step Number */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="text-5xl font-bold text-[#d4af37]/20">{step.number}</span>
                </div>

                <div className="w-16 h-16 rounded-full bg-[#d4af37]/20 flex items-center justify-center mx-auto mb-6 mt-4">
                  <step.icon className="w-8 h-8 text-[#d4af37]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Free Entry Note */}
        <div
          className={`flex items-center justify-center gap-2 text-gray-400 text-sm transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <FileText className="w-4 h-4" />
          <span>
            No Purchase Necessary: For free entry method and complete rules, see our{' '}
            <a href="#" className="text-[#d4af37] hover:underline">
              [TERMS_URL_TBD]
            </a>
            . Void where prohibited.
          </span>
        </div>
      </div>
    </section>
  );
}
