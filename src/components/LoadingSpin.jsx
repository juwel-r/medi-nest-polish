import ClipLoader from "react-spinners/ClipLoader";

const LoadingSpin = () => {
  return (
    <div className="flex items-center flex-col justify-start py-[5%] h-auto">
      <ClipLoader
        color="#2563eb"
        cssOverride={{ borderWidth: "5px" }}
        loading
        size={80}
        speedMultiplier={1.5}
      />
      <p className="text-3xl font-semibold mt-5 text-primary animate-spin">
        Loading . . .
      </p>
    </div>
  );
};

export default LoadingSpin;
