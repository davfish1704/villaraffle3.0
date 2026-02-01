import { useEffect, useRef, useState } from 'react';
import { Award, Gift, Calendar, Users, Heart, ExternalLink } from 'lucide-react';

const metrics = [
  { icon: Award, value: '[METRIC_TBD]', label: 'Campaigns Launched' },
  { icon: Gift, value: '[METRIC_TBD]', label: 'Total Prize Value Awarded' },
  { icon: Calendar, value: 'Since 2021', label: 'Supporting Indonesia' },
  { icon: Users, value: '4', label: 'Guaranteed Winners This Draw' },
];

export function TrustSection() {
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
            Who We Are
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Luck Dip Luxury Items Limited runs transparent luxury giveaways
            that change lives while supporting communities in need.
          </p>
        </div>

        {/* Metrics Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {metrics.map((metric, index) => (
            <div
              key={metric.label}
              className={`glass rounded-2xl p-6 text-center card-hover transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              <div className="w-12 h-12 rounded-full bg-[#d4af37]/20 flex items-center justify-center mx-auto mb-4">
                <metric.icon className="w-6 h-6 text-[#d4af37]" />
              </div>
              <p className="text-2xl md:text-3xl font-bold gold-text mb-1">{metric.value}</p>
              <p className="text-gray-400 text-sm">{metric.label}</p>
            </div>
          ))}
        </div>

        {/* Charity/Impact Section */}
        <div
          className={`glass rounded-2xl p-8 md:p-12 mb-12 transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-full bg-[#d4af37]/20 flex items-center justify-center">
              <Heart className="w-6 h-6 text-[#d4af37]" />
            </div>
            <h3 className="text-2xl font-bold text-white">Making an Impact in Indonesia</h3>
          </div>
          <p className="text-gray-300 mb-6 leading-relaxed">
            Since 2021, we've been supporting children and schools in Indonesia.
            A portion of every ticket sold helps provide educational resources,
            school supplies, and community support where it's needed most.
          </p>
          <div className="flex flex-wrap gap-4">
            <span className="inline-flex items-center gap-2 text-[#d4af37] bg-[#d4af37]/10 px-4 py-2 rounded-full text-sm">
              <span>[PARTNER_NGO_TBD]</span>
              <span className="text-gray-400">— Partner details coming soon</span>
            </span>
            <a
              href="#"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
            >
              <ExternalLink className="w-4 h-4" />
              <span>[PROOF_LINK_TBD — View our impact documentation]</span>
            </a>
          </div>
        </div>

        {/* Transparency Statement */}
        <div
          className={`glass rounded-2xl p-8 md:p-12 mb-12 border border-[#d4af37]/30 transition-all duration-700 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-[#d4af37]/20 flex items-center justify-center flex-shrink-0">
              <Award className="w-6 h-6 text-[#d4af37]" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white mb-3">Our Commitment to Transparency</h3>
              <p className="text-gray-300 leading-relaxed">
                We believe in complete transparency. Every draw is conducted via
                verified random number generation overseen by independent parties.
                Winner selection is livestreamed for full public verification.
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div
          className={`text-center transition-all duration-700 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-white mb-4">Support a cause. Enter to win.</p>
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
