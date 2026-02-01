import { useEffect, useRef, useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const interiorImages = [
  { src: '/villa-interior-1.jpg', alt: 'Living Room' },
  { src: '/villa-interior-2.jpg', alt: 'Master Bedroom' },
  { src: '/villa-interior-3.jpg', alt: 'Kitchen' },
  { src: '/villa-interior-4.jpg', alt: 'Bathroom' },
];

const exteriorImages = [
  { src: '/villa-hero.jpg', alt: 'Pool Area' },
  { src: '/villa-exterior-1.jpg', alt: 'Aerial View' },
  { src: '/villa-exterior-2.jpg', alt: 'Outdoor Dining' },
  { src: '/villa-hero.jpg', alt: 'Garden View' },
];

const floorplanImages = [
  { src: '/villa-floorplan.jpg', alt: 'Floor Plan' },
];

const locationImages = [
  { src: '/canggu-location.jpg', alt: 'Canggu Street' },
  { src: '/villa-exterior-1.jpg', alt: 'Rice Fields' },
];

export function Gallery() {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const ImageGrid = ({ images }: { images: { src: string; alt: string }[] }) => (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {images.map((image, index) => (
        <div
          key={index}
          className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group"
          onClick={() => setSelectedImage(image.src)}
        >
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300" />
        </div>
      ))}
    </div>
  );

  return (
    <section
      id="gallery"
      ref={sectionRef}
      className="section-padding bg-[#0f0f0f]"
    >
      <div className="container-custom">
        {/* Section Header */}
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            See Your Future Villa
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Every angle. Every detail. This could be yours.
          </p>
        </div>

        {/* Tabs */}
        <div
          className={`transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <Tabs defaultValue="interior" className="w-full">
            <TabsList className="flex justify-center mb-8 bg-transparent gap-2">
              <TabsTrigger
                value="interior"
                className="px-6 py-3 rounded-full data-[state=active]:bg-[#d4af37] data-[state=active]:text-black text-gray-400 bg-white/5 hover:bg-white/10 transition-all"
              >
                Interior
              </TabsTrigger>
              <TabsTrigger
                value="exterior"
                className="px-6 py-3 rounded-full data-[state=active]:bg-[#d4af37] data-[state=active]:text-black text-gray-400 bg-white/5 hover:bg-white/10 transition-all"
              >
                Exterior
              </TabsTrigger>
              <TabsTrigger
                value="floorplan"
                className="px-6 py-3 rounded-full data-[state=active]:bg-[#d4af37] data-[state=active]:text-black text-gray-400 bg-white/5 hover:bg-white/10 transition-all"
              >
                Floorplan
              </TabsTrigger>
              <TabsTrigger
                value="location"
                className="px-6 py-3 rounded-full data-[state=active]:bg-[#d4af37] data-[state=active]:text-black text-gray-400 bg-white/5 hover:bg-white/10 transition-all"
              >
                Location
              </TabsTrigger>
            </TabsList>

            <TabsContent value="interior" className="mt-0">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-2">Modern Luxury Living</h3>
                <p className="text-gray-400">Designer furnishings, open spaces, and natural light throughout.</p>
              </div>
              <ImageGrid images={interiorImages} />
            </TabsContent>

            <TabsContent value="exterior" className="mt-0">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-2">Your Private Paradise</h3>
                <p className="text-gray-400">Pool, gardens, and outdoor living in the heart of Canggu.</p>
              </div>
              <ImageGrid images={exteriorImages} />
            </TabsContent>

            <TabsContent value="floorplan" className="mt-0">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-2">5 Bedrooms | 450 sqm Total</h3>
                <p className="text-gray-400">Spacious layout designed for tropical living and entertaining.</p>
              </div>
              <div className="max-w-3xl mx-auto">
                <ImageGrid images={floorplanImages} />
              </div>
            </TabsContent>

            <TabsContent value="location" className="mt-0">
              <div className="mb-6">
                <h3 className="text-xl font-semibold text-white mb-2">Canggu, Bali, Indonesia</h3>
                <p className="text-gray-400">The island's most sought-after neighborhood.</p>
              </div>
              <ImageGrid images={locationImages} />
            </TabsContent>
          </Tabs>
        </div>

        {/* CTA */}
        <div
          className={`text-center mt-12 transition-all duration-700 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className="text-white mb-4">See it in person. Start by entering.</p>
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

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Gallery preview"
            className="max-w-full max-h-full object-contain rounded-lg"
          />
          <button
            className="absolute top-4 right-4 text-white/70 hover:text-white text-4xl"
            onClick={() => setSelectedImage(null)}
          >
            ×
          </button>
        </div>
      )}
    </section>
  );
}
