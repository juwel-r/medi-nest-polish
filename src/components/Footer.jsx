import React from "react";

const Footer = () => {
  return (
<footer className="bg-gray-900 text-gray-300 py-10">
  <div className="container mx-auto px-12">
    {/* Grid Layout */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {/* Column 1: About */}
      <div>
        <h3 className="text-white font-semibold text-3xl mb-4">Medi Nest</h3>
        <p className="text-sm">
          Medi Nest is your trusted platform for buying medicine online from multiple vendors. Your health, our priority.
        </p>
      </div>

      {/* Column 2: Resources */}
      <div>
        <h3 className="text-white font-semibold mb-4">Resources</h3>
        <ul className="space-y-2">
          <li>
            <a
              href="/products"
              className="hover:text-primary transition duration-300"
            >
              Shop Medicines
            </a>
          </li>
          <li>
            <a
              href="/faq"
              className="hover:text-primary transition duration-300"
            >
              FAQs
            </a>
          </li>
          <li>
            <a
              href="/terms"
              className="hover:text-primary transition duration-300"
            >
              Terms & Conditions
            </a>
          </li>
        </ul>
      </div>

      {/* Column 3: Connect */}
      <div>
        <h3 className="text-white font-semibold mb-4">Connect</h3>
        <ul className="space-y-2">
          <li>
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition duration-300"
            >
              Facebook
            </a>
          </li>
          <li>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition duration-300"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary transition duration-300"
            >
              Instagram
            </a>
          </li>
        </ul>
      </div>

      {/* Column 4: Contact */}
      <div>
        <h3 className="text-white font-semibold mb-4">Contact</h3>
        <p className="text-sm">Email: support@medinest.com</p>
        <p className="text-sm">Phone: +1 (234) 567-890</p>
      </div>
    </div>

    {/* Bottom Section */}
    <div className="border-t border-gray-700 mt-8 pt-6 text-center">
      <p className="text-sm">
        © {new Date().getFullYear()} Medi Nest. All rights reserved.
      </p>
    </div>
  </div>
</footer>

  );
};

export default Footer;
