import React from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const NewsAndInsights = () => {
  const posts = [
    {
      id: 1,
      title: "How to Keep Health Fit and Safe From Dieses in 2025",
      date: "2025-02-18",
      summary:
        "Stay updated with the latest health trends in 2025. Discover new medicines, treatments, and lifestyle choices that will shape the future of healthcare.",
    },
    {
      id: 2,
      title: "How to Choose the Right Medicine Online For You",
      date: "2025-02-15",
      summary:
        "With so many options available online, it can be overwhelming to choose the right medicine. Here’s a guide to help you make informed decisions when buying medicine online.",
    },
    {
      id: 3,
      title: "Medi Nest Partners with Top Pharmaceutical Brands",
      date: "2025-02-12",
      summary:
        "We are excited to announce new partnerships with top pharmaceutical brands to bring you better access to the medicines you trust at affordable prices.",
    },
  ];

  return (
    <div className="sectionContainer">
      <div className="flex justify-between items-center px-4 mx-auto my-6">
        <h1 className="text-2xl md:text-3xl lg:text-4xl text-primary font-semibold text-center text-nowrap">
          News and insights
        </h1>
        <Link to="/blog">
          <p className="text-right text-primary font-bold flex items-center gap-2">
            See More <FaArrowRightLong />
          </p>
        </Link>
      </div>
      <section className="flex flex-col md:flex-row  h-full  gap-6">
        {posts.map((post) => (
          <div className="relative py-12 px-4 space-y-4 rounded-lg max-w-md mx-auto shadow-sm hover:shadow-lg transition-all duration-300 min-h-full pb-16 border border-gray-300/50 dark:border-dark-border dark:bg-dark-card">
            <p className="dark:text-dark-text/70">
              <span className="font-bold ">Blog -</span> {post.date}
            </p>
            <h1 className="text-xl font-semibold dark:text-dark-title ">{post.title}</h1>
            <p className="dark:text-dark-text ">{post.summary.slice(0, 150)}...</p>
            <Link
              to="/blog"
              className="flex items-center gap-2 text-primary/80 absolute bottom-4 left-4"
            >
              Read More <FaArrowRightLong />
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
};

export default NewsAndInsights;
