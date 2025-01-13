import React, { useContext, useState } from "react";
import { FaLock, FaUser } from "react-icons/fa";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";
import LoadingSpin from "../components/LoadingSpin";
import Lottie from "lottie-react";
import registerAnimation from "../assets/animation/registration-animation.json";

const Register = () => {
  const { createUser, setUserInfo, updateUser, setLoading } = useContext(AuthContext);
  const [showPass, setShowPass] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photoURL, setPhotoURL] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const [startSpin, setStartSpin] = useState(false);

  const validateSignup = () => {
    const errors = [];
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!name) errors.push("Name is required");
    if (!email) errors.push("Email is required");
    if (!photoURL) errors.push("Photo URL is required");
    if (!password) {
      errors.push("Password is required");
    } else if (!passwordRegex.test(password)) {
      errors.push(
        "Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long"
      );
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateSignup();
    if (errors.length) {
      setErrorMessage(errors.join(", "));
    } else {
      setErrorMessage("");
      setStartSpin(true);
      createUser(email, password)
        .then((result) => {
          setStartSpin(false);
          setLoading(false);
          setUserInfo(result.user);
          const userInfo = {
            displayName: name,
            photoURL: photoURL,
          };
          updateUser(userInfo);
          Swal.fire({
            title: "Good job!",
            text: "Registration Successful!",
            icon: "success",
          }).then(() => navigate("/"));
        })
        .catch((error) => {
          setStartSpin(false);
          Swal.fire({
            title: "Failed To Register!",
            text: error.code,
            icon: "error",
            confirmButtonText: "Try Again",
          });
        });
    }
  };

  return (
    <section className="py-12">
      {startSpin ? (
        <LoadingSpin />
      ) : (
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-primary">Welcome To Edu Mate!</h1>
            <p className="text-lg mt-2">Enter Your Details To Register!</p>
          </div>
        
          <div className="flex flex-col-reverse lg:flex-row items-center gap-8">
            <div className="w-full lg:w-1/2">
              <Lottie animationData={registerAnimation} className="max-w-md mx-auto" />
            </div>

            <div className="w-full sm:w-8/12 lg:w-1/3 shadow-lg rounded-lg p-8 ">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-2">Name</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-2">Email</label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="relative">
                  <label className="block text-sm font-medium text-gray-500 mb-2">Password</label>
                  <input
                    type={showPass ? "text" : "password"}
                    placeholder="Enter your password"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <span
                    onClick={() => setShowPass(!showPass)}
                    className="absolute top-10 right-4 cursor-pointer"
                  >
                    {showPass ? <VscEye /> : <VscEyeClosed />}
                  </span>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-2">Photo URL</label>
                  <input
                    type="url"
                    placeholder="Enter your photo URL"
                    className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={photoURL}
                    onChange={(e) => setPhotoURL(e.target.value)}
                    required
                  />
                </div>

                <div>
                  {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
                  <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
                  >
                    Register
                  </button>
                </div>
              </form>

              <div className="mt-6 text-center">
                <div className="flex items-center gap-2 justify-center">
                  <div className="w-20 border-t border-gray-300"></div>
                  <p className="text-sm text-gray-500">OR</p>
                  <div className="w-20 border-t border-gray-300"></div>
                </div>

                <button
                  // onClick={googleLogin}
                  className="mt-4 w-full border border-gray-300 text-gray-500 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-100 transition duration-300"
                >
                  <FcGoogle className="text-2xl" /> Continue with Google
                </button>
              </div>

              <p className="mt-4 text-center text-sm text-gray-600">
                Already have an account?{" "}
                <Link to="/login" className="text-blue-500 hover:underline">
                  Login here.
                </Link>
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Register;
