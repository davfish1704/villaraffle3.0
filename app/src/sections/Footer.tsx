import { CreditCard, Shield, Mail } from 'lucide-react';

const legalLinks = [
  { label: 'Terms & Conditions', href: '[TERMS_URL_TBD]' },
  { label: 'Privacy Policy', href: '[PRIVACY_URL_TBD]' },
  { label: 'Responsible Play', href: '#' },
  { label: 'Contact', href: 'mailto:[CONTACT_EMAIL_TBD]' },
];

const paymentMethods = [
  'Visa', 'Mastercard', 'Amex', 'Apple Pay', 'Google Pay'
];

export function Footer() {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10 pt-16 pb-8">
      <div className="container-custom">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-full bg-[#d4af37] flex items-center justify-center">
                <span className="text-black font-bold">LD</span>
              </div>
              <span className="font-semibold text-white text-lg">
                Luck Dip Luxury Items Limited
              </span>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Win big. Live bold. Do good. We run transparent luxury giveaways
              that change lives while supporting communities in need.
            </p>
            <div className="flex items-center gap-2 text-gray-400 text-sm">
              <Mail className="w-4 h-4" />
              <span>[CONTACT_EMAIL_TBD]</span>
            </div>
          </div>

          {/* Legal Links */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-3">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Payment Methods */}
          <div>
            <h4 className="text-white font-semibold mb-4">Payment Methods</h4>
            <div className="flex flex-wrap gap-2">
              {paymentMethods.map((method) => (
                <div
                  key={method}
                  className="flex items-center gap-1 bg-white/5 px-3 py-1.5 rounded-lg"
                >
                  <CreditCard className="w-3 h-3 text-gray-400" />
                  <span className="text-gray-400 text-xs">{method}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Age Restriction */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="flex items-center justify-center gap-2 text-gray-500 text-sm text-center">
            <Shield className="w-4 h-4" />
            <span>
              18+ Only. Must be 18 years or older to enter. Void where prohibited. Please play responsibly.
            </span>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-gray-600 text-sm">
            © [YEAR_TBD] Luck Dip Luxury Items Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
