import { Fade } from "react-awesome-reveal";
import bgImage from "/wave-haikei.png";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="text-gray-800 bg-gradient-to-b from-primary/50 to-primary/80 dark:bg-gradient-to-b from-primary/50 to-primary/60 px-[5%] mx-auto text- py-10 bg-no-repeat bg-cover bg-center">
      <div className="container mx-auto px-12">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Column 1: About */}
          <div>
            <Fade triggerOnce direction="up" delay={200}>
              <h3 className=" font-semibold text-3xl mb-4 dark:text-dark-title">
                Medi Nest
              </h3>
            </Fade>
            <Fade triggerOnce delay={250}>
              <p className="text-sm dark:text-dark-text">
                Medi Nest is your trusted platform for buying medicine online
                from multiple vendors. Your health, our priority.
              </p>
            </Fade>
          </div>

          {/* Column 2: Resources */}
          <Fade triggerOnce delay={250}>
            <div>
              <h3 className="font-semibold mb-4 dark:text-dark-title">Links</h3>
              <div className="space-y-2">
                <Fade triggerOnce delay={300}>
                  <Link
                    to="/products"
                    className="block hover:text-primary transition duration-300 dark:text-dark-text/70"
                  >
                    Medicines Shop
                  </Link>
                </Fade>
                <Fade triggerOnce delay={350}>
                  <Link
                    to="/blog"
                    className="block hover:text-primary transition duration-300 dark:text-dark-text/70"
                  >
                    Blogs
                  </Link>
                </Fade>
                <Fade triggerOnce delay={400}>
                  <Link
                    to="/about-us"
                    className="block hover:text-primary transition duration-300 dark:text-dark-text/70"
                  >
                    About Us
                  </Link>
                </Fade>
              </div>
            </div>
          </Fade>

          {/* Column 2: Connect */}
          <Fade triggerOnce delay={300}>
            <div>
              <h3 className="font-semibold mb-4 dark:text-dark-title">Connect</h3>
              <ul className="space-y-2">
                <Fade triggerOnce delay={350}>
                  <li>
                    <a
                      href="https://www.facebook.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition duration-300 dark:text-dark-text/70"
                    >
                      Facebook
                    </a>
                  </li>
                </Fade>
                <Fade triggerOnce delay={400}>
                  <li>
                    <a
                      href="https://www.twitter.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition duration-300 dark:text-dark-text/70"
                    >
                      Twitter
                    </a>
                  </li>
                </Fade>
                <Fade triggerOnce delay={450}>
                  <li>
                    <a
                      href="https://www.instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary transition duration-300 dark:text-dark-text/70"
                    >
                      Instagram
                    </a>
                  </li>
                </Fade>
              </ul>
            </div>
          </Fade>

          {/* Column 3: Contact */}
          <Fade triggerOnce delay={350}>
            <div>
              <h3 className="font-semibold mb-4 dark:text-dark-title">Contact</h3>
              <Fade triggerOnce delay={400}>
                <p className="text-sm dark:text-dark-text/70">Email: support@medinest.com</p>
              </Fade>
              <Fade triggerOnce delay={450}>
                <p className="text-sm dark:text-dark-text/70">Phone: +1 (234) 567-890</p>
              </Fade>
            </div>
          </Fade>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 dark:border-dark-text/50 mt-8 pt-6 text-center">
          <p className="text-sm dark:text-dark-text">
            © {new Date().getFullYear()} Medi Nest. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
