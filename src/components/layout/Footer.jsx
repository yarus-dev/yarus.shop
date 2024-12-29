import { ChevronRight, Globe } from 'lucide-react';

const FooterSection = ({ title, links }) => (
  <div className="flex flex-col space-y-2">
    <h3 className="font-semibold text-gray-700 mb-2">{title}</h3>
    {links.map((link) => (
      <a
        key={link}
        href="#"
        className="text-gray-500 hover:text-gray-800 text-sm transition-colors duration-200"
      >
        {link}
      </a>
    ))}
  </div>
);

const Footer = () => {
  const sections = [
    {
      title: 'Shop and Learn',
      links: ['Store', 'Mac', 'iPad', 'iPhone', 'Watch', 'Vision', 'AirPods'],
    },
    {
      title: 'Services',
      links: [
        'Apple Music',
        'Apple TV+',
        'Apple Fitness+',
        'Apple News+',
        'Apple Arcade',
      ],
    },
    {
      title: 'Apple Store',
      links: ['Find a Store', 'Genius Bar', 'Today at Apple', 'Apple Camp'],
    },
    {
      title: 'About Apple',
      links: ['Newsroom', 'Careers', 'Investors', 'Ethics & Compliance'],
    },
  ];

  return (
    <footer className="bg-gray-50 w-full">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Top Section */}
        <div className="border-b border-gray-200 pb-8 mb-8">
          <p className="text-sm text-gray-500">
            1. Trade-in values will vary based on the condition, year, and
            configuration of your eligible trade-in device.
          </p>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {sections.map((section) => (
            <FooterSection key={section.title} {...section} />
          ))}
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-500 text-sm">
              <Globe size={16} />
              <span>United States</span>
              <ChevronRight size={16} />
            </div>
            <div className="text-sm text-gray-500">
              Copyright © {new Date().getFullYear()} Apple Inc. All rights
              reserved.
            </div>
            <div className="flex space-x-6 text-sm text-gray-500">
              <a
                href="#"
                className="hover:text-gray-800 transition-colors duration-200"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-gray-800 transition-colors duration-200"
              >
                Terms of Use
              </a>
              <a
                href="#"
                className="hover:text-gray-800 transition-colors duration-200"
              >
                Legal
              </a>
              <a
                href="#"
                className="hover:text-gray-800 transition-colors duration-200"
              >
                Site Map
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
