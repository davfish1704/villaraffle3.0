import { useEffect, useRef, useState } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'Who is eligible to enter?',
    answer:
      'This raffle is open to residents of Germany, the European Union, and the United Kingdom who are 18 years or older. Void where prohibited by local law. Please check your local regulations before entering.',
  },
  {
    question: 'How much does it cost to enter?',
    answer:
      'Each entry ticket costs $30 USD. You can purchase multiple tickets to increase your odds of winning. There is no discount for bulk purchases—we keep pricing simple and transparent.',
  },
  {
    question: 'How are winners selected?',
    answer:
      'Winners are selected via verified random number generation, overseen by an independent third party. The entire process is livestreamed for full transparency. The draw date is scheduled for [DRAW_DATE_TBD].',
  },
  {
    question: "What happens if tickets don't sell out?",
    answer:
      'The draw will proceed regardless of total ticket sales. Four winners will be guaranteed: one villa winner and three cash prize winners. If fewer tickets are sold, your odds improve.',
  },
  {
    question: 'What are the prizes exactly?',
    answer:
      'Grand Prize: 1 winner receives La Casa De Villa in Canggu, Bali (estimated value: $1,000,000 USD). Bonus Prizes: Three winners each receive $10,000 USD cash. All prizes are awarded at the end of the campaign together.',
  },
  {
    question: 'What about taxes and transfer fees?',
    answer:
      'Winners are responsible for any applicable taxes, transfer fees, and legal costs in their jurisdiction. This includes but is not limited to income tax, property transfer tax, and legal fees. We recommend consulting a tax professional for your specific situation.',
  },
  {
    question: 'How do I receive my tickets?',
    answer:
      'Tickets are emailed to you immediately after payment confirmation. Please check your inbox and spam folder. Each ticket has a unique ID that will be used in the draw.',
  },
  {
    question: 'Can I get a refund?',
    answer:
      'All ticket sales are final. No refunds are issued once payment is confirmed. Please review all terms and conditions before purchasing.',
  },
  {
    question: 'Do I need to travel to Bali to claim the prize?',
    answer:
      'For the villa prize, you will need to complete legal transfer procedures which may require travel to Bali or power of attorney arrangements. We provide guidance throughout the process. Cash prizes are transferred electronically.',
  },
  {
    question: 'How is the property ownership transferred?',
    answer:
      'We facilitate the legal transfer of ownership according to Indonesian law. Foreign ownership structures and requirements will be explained to the winner. Legal assistance is provided to ensure a smooth transfer process.',
  },
  {
    question: 'What charity do you support?',
    answer:
      'Since 2021, we have been supporting children and schools in Indonesia. A portion of every ticket sale contributes to educational resources and community support. [PARTNER_NGO_TBD — Specific partner details and proof of donations will be published here.]',
  },
  {
    question: 'Is there a free entry method?',
    answer:
      'Yes. No purchase is necessary to enter. For complete free entry instructions and official rules, please see our [TERMS_URL_TBD].',
  },
  {
    question: 'How can I contact you?',
    answer:
      'For questions, support, or media inquiries, please contact us at [CONTACT_EMAIL_TBD]. We aim to respond within 24-48 hours.',
  },
];

export function FAQ() {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="faq"
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
            Frequently Asked Questions
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Everything you need to know about the giveaway.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div
          className={`max-w-3xl mx-auto transition-all duration-700 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass rounded-xl border-0 px-6"
              >
                <AccordionTrigger className="text-left text-white hover:text-[#d4af37] transition-colors py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400 pb-5">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
