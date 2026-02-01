import { useEffect, useRef, useState } from 'react';
import { Rocket, ShoppingCart, Calendar, Trophy } from 'lucide-react';

const timelineItems = [
  {
    icon: Rocket,
    title: 'Launch',
    date: '[LAUNCH_DATE_TBD]',
    description: 'Raffle opens. Tickets on sale.',
  },
  {
    icon: ShoppingCart,
    title: 'Sales Period',
    date: 'Now – [END_DATE_TBD]',
    description: 'Ends when all tickets sell out or on the closing date—whichever comes first.',
  },
  {
    icon: Calendar,
    title: 'Draw Date',
    date: '[DRAW_DATE_TBD]',
    description: 'Winner selected via verified random draw. Livestreamed for transparency.',
  },
  {
    icon: Trophy,
    title: 'Winner Announcement',
    date: 'Same day as draw',
    description: 'Public announcement. Winners contacted directly.',
  },
];

export function Timeline() {
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
            Timeline
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Here's when it all happens.
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          {timelineItems.map((item, index) => (
            <div
              key={item.title}
              className={`relative flex gap-6 md:gap-8 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${(index + 1) * 100}ms` }}
            >
              {/* Timeline line */}
              {index < timelineItems.length - 1 && (
                <div className="absolute left-6 md:left-8 top-16 w-px h-[calc(100%-2rem)] bg-gradient-to-b from-[#d4af37]/50 to-transparent" />
              )}

              {/* Icon */}
              <div className="relative z-10 flex-shrink-0">
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-[#d4af37]/20 border border-[#d4af37]/30 flex items-center justify-center">
                  <item.icon className="w-6 h-6 md:w-8 md:h-8 text-[#d4af37]" />
                </div>
              </div>

              {/* Content */}
              <div className="pb-12">
                <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                <p className="text-[#d4af37] font-medium mb-2">{item.date}</p>
                <p className="text-gray-400">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className={`text-center mt-8 transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-white mb-4">Don't miss your chance. Enter now.</p>
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
