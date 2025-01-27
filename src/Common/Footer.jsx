import { Fade } from "react-awesome-reveal";
import bgImage from "/wave-haikei.png";
const Footer = () => {
  return (
    <footer className="text-gray-800 bg-gradient-to-b from-primary/50 to-primary/80 px-[5%] mx-auto text- py-10 bg-no-repeat bg-cover bg-center">
      <div className="container mx-auto px-12">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Column 1: About */}
          <div>
            <Fade direction="up" delay={200}>
              <h3 className=" font-semibold text-3xl mb-4">Medi Nest</h3>
            </Fade>
            <Fade delay={250}>
              <p className="text-sm">
                Medi Nest is your trusted platform for buying medicine online
                from multiple vendors. Your health, our priority.
              </p>
            </Fade>
          </div>

          {/* Column 2: Resources */}
          <Fade delay={250}>
    <div>
      <h3 className="font-semibold mb-4">Resources</h3>
      <ul className="space-y-2">
        <Fade delay={300}>
          <li>
            <a
              href="/products"
              className="hover:text-primary transition duration-300"
            >
              Shop Medicines
            </a>
          </li>
        </Fade>
        <Fade delay={350}>
          <li>
            <a
              href="/faq"
              className="hover:text-primary transition duration-300"
            >
              FAQs
            </a>
          </li>
        </Fade>
        <Fade delay={400}>
          <li>
            <a
              href="/terms"
              className="hover:text-primary transition duration-300"
            >
              Terms & Conditions
            </a>
          </li>
        </Fade>
      </ul>
    </div>
  </Fade>

  {/* Column 2: Connect */}
  <Fade  delay={300}>
    <div>
      <h3 className="font-semibold mb-4">Connect</h3>
      <ul className="space-y-2">
        <Fade  delay={350}>
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
        </Fade>
        <Fade  delay={400}>
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
        </Fade>
        <Fade  delay={450}>
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
        </Fade>
      </ul>
    </div>
  </Fade>

  {/* Column 3: Contact */}
  <Fade  delay={350}>
    <div>
      <h3 className="font-semibold mb-4">Contact</h3>
      <Fade  delay={400}>
        <p className="text-sm">Email: support@medinest.com</p>
      </Fade>
      <Fade  delay={450}>
        <p className="text-sm">Phone: +1 (234) 567-890</p>
      </Fade>
    </div>
  </Fade>
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
