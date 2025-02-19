import { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaInfoCircle,
  FaPaperPlane,
} from "react-icons/fa";
import { showToast } from "../../Utils/alerts.js";
import photo from "../../assets/contact-photo.png";
import SectionHeader from "../../components/SectionHeader";

const ContactForm = () => {
  const [checked, setChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    showToast("Thank You For Submit!")
    e.target.reset()
  };
  return (
    <div
      id="contact"
      className="flex flex-col md:flex-row items-center justify-center bg-[#F8FAFF] sectionContainer mb-4 md:mb-6 dark:bg-dark-bg"
    >
      {/* Left Image Section */}
      <div className="hidden sm:block w-1/2 relative">
        <div className="absolute w-64 h-64 rounded-full blur-[150px] bg-primary right-20 bottom-10 "></div>
        <img src={photo} alt="Molecule" className="w-full max-w-md mx-auto" />
      </div>

      {/* Right Form Section */}
      <form onSubmit={handleSubmit} className="w-full md:w-1/2 max-w-lg p-8 ">
        <SectionHeader
          title={"Contact Us"}
          subTitle={"Have questions? Get in touch!"}
        ></SectionHeader>

        {/* Input Fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className="relative">
            <FaUser className="absolute left-3 top-4 text-gray-400" />
            <input
              type="text"
              required
              placeholder="Name"
              className="w-full pl-10 py-3 border border-gray-300 dark:border-dark-border dark:bg-dark-inputBg dark:text-dark-inputText rounded-lg focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="relative">
            <FaEnvelope className="absolute left-3 top-4 text-gray-400" />
            <input
              type="email"
              required
              placeholder="Email Address"
              className="w-full pl-10 py-3 border border-gray-300 dark:border-dark-border dark:bg-dark-inputBg dark:text-dark-inputText rounded-lg focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="relative">
            <FaPhone className="absolute left-3 top-4 text-gray-400" />
            <input
              type="text"
              required
              placeholder="Phone"
              className="w-full pl-10 py-3 border border-gray-300 dark:border-dark-border dark:bg-dark-inputBg dark:text-dark-inputText rounded-lg focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="relative">
            <FaInfoCircle className="absolute left-3 top-4 text-gray-400" />
            <input
              type="text"
              required
              placeholder="Subject"
              className="w-full pl-10 py-3 border border-gray-300 dark:border-dark-border dark:bg-dark-inputBg dark:text-dark-inputText rounded-lg focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>

        {/* Textarea */}
        <div className="relative mt-4">
          <textarea
            required
            placeholder="How can we help you? Feel free to get in touch!"
            className="w-full pl-4 pt-3 h-24 border border-gray-300 dark:border-dark-border dark:bg-dark-inputBg dark:text-dark-inputText rounded-lg focus:ring-2 focus:ring-blue-400"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button className="mt-6 w-full flex items-center justify-center bg-primary text-white py-3 rounded-lg hover:bg-primary/80 active:scale-95 transition-all">
          <FaPaperPlane className="mr-2" /> GET IN TOUCH
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
