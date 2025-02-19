import { FaHeartbeat, FaShieldAlt, FaUsers } from "react-icons/fa";
import { GoGoal } from "react-icons/go";
import { PiGraphDuotone } from "react-icons/pi";
const iconComponents = {
  FaHeartbeat: FaHeartbeat,
  FaShieldAlt: FaShieldAlt,
  FaUsers: FaUsers,
};

const AboutUs = () => {
  const aboutData = {
    companyInfo: {
      title: "About MediNest",
      subtitle: "Your Trusted Online Pharmacy",
      description:
        "MediNest is a trusted online pharmacy providing high-quality medicines at affordable prices. With a customer-first approach, we ensure safe and timely delivery of medical essentials to your doorstep.",
    },
    missionVision: [
      {
        id: 1,
        title: `Our Mission`,
        icon: <GoGoal />,
        description:
          "To make healthcare accessible, affordable, and reliable for everyone. We aim to provide top-quality medicines with utmost convenience.",
      },
      {
        id: 2,
        title: " Our Vision",
        icon: <PiGraphDuotone />,
        description:
          "To become the most trusted online healthcare provider, ensuring quality, affordability, and seamless service for every customer.",
      },
    ],
    whyChooseUs: [
      {
        id: 1,
        icon: "FaHeartbeat",
        title: "Quality Medicines",
        description:
          "We offer only certified and tested medicines for your health.",
      },
      {
        id: 2,
        icon: "FaShieldAlt",
        title: "Secure & Safe",
        description:
          "All transactions and deliveries are highly secured for your safety.",
      },
      {
        id: 3,
        icon: "FaUsers",
        title: "24/7 Support",
        description:
          "Our support team is available round the clock to assist you.",
      },
    ],
    team: [
      {
        id: 1,
        name: "Dr. Ahmed Rahman",
        position: "Chief Pharmacist",
        image: "https://i.pravatar.cc/200?img=33",
      },
      {
        id: 2,
        name: "Sarah Islam",
        position: "Customer Support Lead",
        image: "https://i.pravatar.cc/200?img=5",
      },
      {
        id: 3,
        name: "Fahim Hassan",
        position: "Logistics Manager",
        image: "https://i.pravatar.cc/200?img=18",
      },
    ],
  };

  return (
    <div className=" text-gray-800 dark:bg-dark-bg dark:text-dark-text">
      {/* Header Section */}
      <div className="bg-primary/80 py-16 text-center dark:darkStyle">
        <h1 className="text-4xl font-bold">{aboutData.companyInfo.title}</h1>
        <p className="mt-2 text-lg opacity-90">
          {aboutData.companyInfo.subtitle}
        </p>
      </div>

      {/* Company Introduction */}
      <div className="container mx-auto px-6 py-12 text-center">
        <p className="text-gray-600 max-w-2xl mx-auto">
          {aboutData.companyInfo.description}
        </p>
      </div>

      {/* Mission & Vision */}
      <div className="container mx-auto grid md:grid-cols-2 gap-10 px-6 py-12">
        {aboutData.missionVision.map((item) => (
          <div
            key={item.id}
            className="p-6 border border-gray-300/50 shadow-md rounded-xl"
          >
            <h3 className="text-2xl font-semibold mb-2 flex items-center gap-3">
              <span className="text-primary text-3xl">{item.icon}</span>
              {item.title}
            </h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Why Choose Us */}
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold text-center">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          {aboutData.whyChooseUs.map((item) => {
            const IconComponent = iconComponents[item.icon];
            return (
              <div
                key={item.id}
                className="text-center p-6 border border-gray-300/50 shadow-md rounded-xl"
              >
                <IconComponent className="text-4xl text-primary mx-auto" />
                <h3 className="text-xl font-semibold mt-4">{item.title}</h3>
                <p className="text-gray-600 mt-2">{item.description}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* Team Section */}
      <div className="container mx-auto px-6 py-12">
        <h2 className="text-3xl font-semibold text-center">Meet Our Team</h2>
        <div className="grid md:grid-cols-3 gap-8 mt-8">
          {aboutData.team.map((member) => (
            <div
              key={member.id}
              className="text-center p-6 border border-gray-300/50 shadow-md rounded-xl"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full mx-auto"
              />
              <h3 className="text-xl font-semibold mt-4">{member.name}</h3>
              <p className="text-gray-600">{member.position}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
