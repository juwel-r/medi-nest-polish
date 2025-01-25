import React, { useEffect, useState } from "react";
const BlogAndArticles = () => {
  const blogs = [
    {
      "id": 1,
      "title": "The Importance of Health in Our Daily Life",
      "author": "John Doe",
      "date": "2025-01-25",
      "summary": "In this article, we discuss how maintaining health is crucial in our daily life. Learn some tips on how to stay healthy...",
      "image": "https://via.placeholder.com/400x250.png?text=Blog+Image+1"
    },
    {
      "id": 2,
      "title": "Top 10 Medicinal Plants You Should Know About",
      "author": "Jane Smith",
      "date": "2025-01-20",
      "summary": "Explore the world of medicinal plants. This article covers the top 10 plants that have amazing health benefits...",
      "image": "https://via.placeholder.com/400x250.png?text=Blog+Image+2"
    },
    {
      "id": 3,
      "title": "How to Stay Safe During Flu Season",
      "author": "Emily Davis",
      "date": "2025-01-15",
      "summary": "The flu season can be dangerous. Learn how to protect yourself and your family from the flu with these simple tips...",
      "image": "https://via.placeholder.com/400x250.png?text=Blog+Image+3"
    }
  ]
  

  return (
    <section className="py-20 px-6 bg-[#F0F4F8]">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-gray-800">
          Latest Blogs & Articles
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <img
              src={blog.image}
              alt={blog.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800">
                {blog.title}
              </h3>
              <p className="text-gray-600 text-sm mt-2">{blog.summary}</p>
              <div className="mt-4">
                <span className="text-gray-500 text-sm">
                  By {blog.author} | {new Date(blog.date).toLocaleDateString()}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogAndArticles;
