import { useEffect, useRef, useState } from 'react';
import { MapPin, Waves, Coffee, Plane, School, Heart } from 'lucide-react';

const locationHighlights = [
  { icon: Waves, text: 'Minutes from Batu Bolong and Echo Beach' },
  { icon: Coffee, text: 'Walking distance to cafes, restaurants, and yoga studios' },
  { icon: School, text: 'Close to international schools and healthcare facilities' },
  { icon: Plane, text: '45 minutes from Ngurah Rai International Airport' },
  { icon: Heart, text: 'Surrounded by Bali\'s iconic rice terraces' },
];

export function LocationStory() {
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
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div
            className={`relative transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="/canggu-location.jpg"
                alt="Canggu, Bali"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              <div className="absolute bottom-6 left-6 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#d4af37]" />
                <span className="text-white font-medium">Canggu, Bali</span>
              </div>
            </div>
          </div>

          {/* Content */}
          <div>
            <div
              className={`transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                In the Heart of <span className="gold-text">Canggu</span>
              </h2>
            </div>

            <div
              className={`space-y-4 mb-8 transition-all duration-700 delay-100 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
            >
              <p className="text-gray-300 leading-relaxed">
                La Casa De Villa sits in Canggu, Bali's most vibrant coastal neighborhood.
                Once a quiet surf village, Canggu has evolved into a global destination
                for digital nomads, entrepreneurs, and travelers seeking a balanced lifestyle.
              </p>
              <p className="text-gray-300 leading-relaxed">
                The area is known for its world-class surf breaks, artisan cafes,
                wellness studios, and a thriving international community.
                Whether you're catching waves at Echo Beach, working from a beachfront cafe,
                or exploring the rice field trails, Canggu offers a lifestyle that's hard to match.
              </p>
            </div>

            {/* Location Highlights */}
            <div
              className={`space-y-3 mb-10 transition-all duration-700 delay-200 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
            >
              {locationHighlights.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <item.icon className="w-5 h-5 text-[#d4af37] flex-shrink-0" />
                  <span className="text-gray-300 text-sm">{item.text}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div
              className={`transition-all duration-700 delay-300 ${
                isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
            >
              <p className="text-white mb-4">This location. This villa. Could be yours.</p>
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
