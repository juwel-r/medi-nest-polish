import React, { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import { Helmet } from "react-helmet-async";
import SectionHeader from "../components/SectionHeader";
const BlogAndArticles = () => {
  const blogs = [
    {
      id: 1,
      title: "The Importance of Health in Our Daily Life",
      author: "John Doe",
      date: "2025-01-25",
      summary:
        "In this article, we discuss how maintaining health is crucial in our daily life. Learn some tips on how to ...",
      image:
        "https://i.ibb.co.com/0YG8J9W/illustration-people-with-healthy-lifestyle-53876-43707.jpg",
    },
    {
      id: 2,
      title: "Top 10 Medicinal Plants You Should Know About",
      author: "Jane Smith",
      date: "2025-01-20",
      summary:
        "Explore the world of medicinal plants. This article covers the top 10 plants that have amazing health benefits...",
      image:
        "https://i.ibb.co.com/9p0XzSg/organic-flat-design-houseplant-collection-23-2148906273.jpg",
    },
    {
      id: 3,
      title: "How to Stay Safe During Flu Season in 2025",
      author: "Emily Davis",
      date: "2025-01-15",
      summary:
        "The flu season can be dangerous. Learn how to protect yourself and your family from the flu with these simple tips...",
      image:
        "https://i.ibb.co.com/rMqt6Xw/person-having-cold-staying-home-52683-35861.jpg",
    },
    {
      id: 4,
      title: "The Benefits of Regular Exercise for Your Health",
      author: "Michael Brown",
      date: "2025-01-10",
      summary:
        "Regular exercise is essential for maintaining good health. Discover the numerous benefits of staying active...",
      image: "",
    },
    {
      id: 5,
      title: "Healthy Eating: Tips for a Balanced Diet in 2025",
      author: "Sarah Johnson",
      date: "2025-01-05",
      summary:
        "Eating a balanced diet is key to a healthy lifestyle. Learn some practical tips for maintaining a nutritious diet...",
      image: "",
    },
    {
      id: 6,
      title: "Mental Health: How to Manage Stress Effectively",
      author: "David Wilson",
      date: "2025-01-01",
      summary:
        "Managing stress is crucial for mental health. This article provides strategies to help you cope with stress effectively...",
      image: "",
    },
  ];

  return (
    <section className="py-20 pt-0 md px-6  min-h-screen ">
      <Helmet>
        <title>Latest Blogs & Articles | Medi Nest</title>
      </Helmet>
      <div className="text-center mb-12">
        <SectionHeader title={"Latest Blogs & Articles"} subTitle={ "Stay informed with the latest updates, breakthroughs, and industry news from MediNest. Your trusted source for everything healthcare!"}></SectionHeader>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-11/12 mx-auto">
        <Fade triggerOnce cascade damping={0.1}>
          {blogs.map((blog, i) => (
            <div
              key={blog.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden group"
            >
              <img
                src={
                  blog.image ||
                  "https://skala.or.id/wp-content/uploads/2024/01/dummy-post-square-1-1.jpg"
                }
                alt={blog.title}
                className="w-full h-56 object-cover group-hover:scale-110 transition-all duration-500"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-primary">
                  {blog.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2">
                  {blog.summary.slice(0, 90)}...
                </p>
                <div className="mt-4">
                  <span className="text-gray-500 text-sm">
                    By {blog.author} |{" "}
                    {new Date(blog.date).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </Fade>
      </div>
    </section>
  );
};

export default BlogAndArticles;
