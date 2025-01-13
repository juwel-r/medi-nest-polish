const SectionTitle = ({ title, subtitle }) => {
    return (
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-gray-800">
          {title}
        </h2>
        <p className="text-lg text-gray-600 mt-2">
          {subtitle}
        </p>
        <div className="mt-4 w-16 h-1 mx-auto bg-gradient-to-r from-blue-500 to-cyan-500 rounded"></div>
      </div>
    );
  };
  
  export default SectionTitle;
  