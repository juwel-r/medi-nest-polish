import React, { useContext, useState } from "react";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { Link, useNavigate } from "react-router-dom";
import Lottie from "lottie-react";
import registerAnimation from "../assets/animation/registration-animation.json";
import useAuth from "../Hooks/useAuth";
import { showAlert, showToast } from "../Utils/alerts";
import photoUpload from "../Utils/photoUpload";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import LoginWithGoogle from "../components/LoginWithGoogle";

const Register = () => {
  const { register, updateUserProfile, authLoading, setAuthLoading } = useAuth();
  const [showPass, setShowPass] = useState(false);
  const [name, setName] = useState("");
  const [photo, setPhoto] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [roll, setRoll] = useState("user");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

  // registration form validation
  const validateSignup = () => {
    const errors = [];
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!name) errors.push("Name is required");
    if (!email) errors.push("Email is required");
    if (!photo) errors.push("Photo is required");
    if (!password) {
      errors.push("Password is required");
    } else if (!passwordRegex.test(password)) {
      errors.push(
        "Password must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long"
      );
    }
    return errors;
  };

  // registration save user to db process
  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateSignup();
    if (errors.length) {
      setErrorMessage(errors.join(", "));
      setAuthLoading(false)
    } else {
      setAuthLoading(true)
      const photoURL = await photoUpload(photo);
      if (photoURL) {
        setErrorMessage("");
        register(email, password)
          .then((result) => {
            const userInfo = {
              displayName: name,
              photoURL: photoURL,
            };
            updateUserProfile(userInfo).then(() => {
              const user = {
                name,
                email,
                photoURL,
                roll,
              };
              axiosPublic
                .post("/users", user)
                .then((res) => {
                  if (res.data.insertedId) {
                    showToast("Registration Successful");
                    navigate("/");
                  }
                })
                .catch((err) => console.log(err.response.data));
            });
          })
          .catch((error) => {
            showAlert({
              title: "Something went wrong!",
              text: error,
              icon: "error",
              confirmButtonText: "Try Again",
            });
            setAuthLoading(false)
          });
      } else {
        showAlert({
          title: "Photo Upload Failed!",
          text: "",
          icon: "error",
          confirmButtonText: "Try Again",
        });
        setAuthLoading(false)
      }
    }
  };

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-primary">
            Welcome To Edu Mate!
          </h1>
          <p className="text-lg mt-2">Enter Your Details To Register!</p>
        </div>

        <div className="flex flex-col-reverse lg:flex-row items-center gap-8">
          <div className="w-full lg:w-1/2">
            <Lottie
              animationData={registerAnimation}
              className="max-w-md mx-auto"
            />
          </div>
          <div className="w-full sm:w-8/12 lg:w-1/3 shadow-lg rounded-lg p-8 ">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>

              {/* Photo */}
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-2">
                  Upload Photo
                </label>
                <input
                  type="file"
                  placeholder="Upload Photo"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:primary
                    "
                  // value={photo}
                  onChange={(e) => setPhoto(e.target.files[0])}
                />
              </div>
              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-500 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              {/* Password */}
              <div className="relative">
                <label className="block text-sm font-medium text-gray-500 mb-2">
                  Password
                </label>
                <input
                  type={showPass ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <span
                  onClick={() => setShowPass(!showPass)}
                  className="absolute top-10 right-4 cursor-pointer"
                >
                  {showPass ? <VscEye /> : <VscEyeClosed />}
                </span>
              </div>

              {/* Role */}
              <select
                onChange={(e) => setRoll(e.target.value)}
                value={roll}
                className="select select-bordered w-full "
              >
                <option value="user">Select Roll</option>
                <option value="user">User</option>
                <option value="seller">Seller</option>
              </select>

              <div>
                {errorMessage && (
                  <p className="text-red-500 text-sm">{errorMessage}</p>
                )}
                <button
                  type="submit"
                  className="flex items-center justify-center gap-2 w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-blue-500 transition duration-300"
                >
                  <span>Register</span>
                  <span>
                    {authLoading && (
                      <span className="loading loading-spinner h-4 w-4"></span>
                    )}
                  </span>
                </button>
              </div>
            </form>

            <div className="mt-6 text-center">
              <div className="flex items-center gap-2 justify-center">
                <div className="w-20 border-t border-gray-300"></div>
                <p className="text-sm text-gray-500">OR</p>
                <div className="w-20 border-t border-gray-300"></div>
              </div>
              <LoginWithGoogle></LoginWithGoogle>
            </div>

            <p className="mt-4 text-center text-sm text-gray-600">
              Already have an account?{" "}
              <Link to="/login" className="text-primary hover:underline">
                Login here.
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
