import React from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import notFoundAnimation from "../assets/animation/notFoundAnimation.json";
import { Helmet } from "react-helmet-async";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-cyan-50">
      <Helmet>
        <title>404 Not Found | Medi Nest</title>
      </Helmet>
      <div className="max-w-md w-full">
        <Lottie animationData={notFoundAnimation} loop={true} />
      </div>
      <h1 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
        Oops! Page Not Found
      </h1>
      <p className="text-lg md:text-xl text-gray-600 text-center mb-6">
        It seems the page you’re looking for doesn’t exist. Try navigating back
        to the home page or explore other sections.
      </p>
      <Link to="/" className="green-button">
        Go Back Home
      </Link>
    </div>
  );
};

export default ErrorPage;
