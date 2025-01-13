import React, { useContext, useState } from "react";
import { FaLock } from "react-icons/fa";
import { VscEye, VscEyeClosed } from "react-icons/vsc";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { FcGoogle } from "react-icons/fc";
import LoadingSpin from "../components/LoadingSpin";
import Lottie from "lottie-react";
import loginAnimation from "../assets/animation/login-animation.json";

const Login = () => {
  const { loginUser, loginWithGoogle, setUserInfo } = useContext(AuthContext);
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const [startSpin, setStartSpin] = useState(false);

  const validateLogin = () => {
    const errors = [];
    if (!email) errors.push("Email is required");
    if (!password) errors.push("Password is required");
    if (password.length < 6) errors.push("Password is too short");
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validateLogin();
    if (errors.length > 0) {
      setErrorMessage(errors.join(". "));
    } else {
      setStartSpin(true);
      setErrorMessage("");
      loginUser(email, password)
        .then((result) => {
          setStartSpin(false);
          setUserInfo(result.user);
          e.target.reset();
          Swal.fire({
            title: "Login Successful!",
            icon: "success",
            showConfirmButton: false,
            timer: 800,
          });
          setTimeout(() => {
            if (location.state) navigate(location.state);
            else navigate("/");
          }, 1200);
        })
        .catch((error) => {
          setStartSpin(false);
          Swal.fire({
            title: "Failed To Login!",
            text: error.code,
            icon: "error",
            confirmButtonText: "Try Again",
          });
        });
    }
  };

  const googleLogin = () => {
    setStartSpin(true);
    loginWithGoogle()
      .then((result) => {
        setStartSpin(false);
        setUserInfo(result.user);
        Swal.fire({
          title: "Login Successful!",
          icon: "success",
          showConfirmButton: false,
          timer: 800,
        });
        setTimeout(() => {
          if (location.state) navigate(location.state);
          else navigate("/");
        }, 1200);
      })
      .catch((error) => {
        setStartSpin(false);
        Swal.fire({
          title: "Failed To Login!",
          text: error.code,
          icon: "error",
          confirmButtonText: "Try Again",
        });
      });
  };

  return (
    <section className=" py-12">
      {startSpin ? (
        <LoadingSpin />
      ) : (
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-800 text-primary">Welcome Back!</h1>
            <p className="text-lg  mt-2">
              Enter your credentials to log in.
            </p>
          </div>
        
          <div className="flex flex-col-reverse lg:flex-row items-center gap-8">
            <div className="w-full lg:w-1/2">
              <Lottie animationData={loginAnimation} className="max-w-md mx-auto" />
            </div>

            <div className="w-full sm:w-8/12 lg:w-1/3 shadow-lg rounded-lg p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-500 mb-2">
                    Email
                  </label>
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
                  <label className="block text-sm font-medium text-gray-500 mb-2">
                    Password
                  </label>
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
                    className="absolute top-10 right-4 text-gray-500 hover:text-gray-800 cursor-pointer"
                  >
                    {showPass ? <VscEye /> : <VscEyeClosed />}
                  </span>
                </div>

                <div>
                  <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-300"
                  >
                    Login
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
                  onClick={googleLogin}
                  className="mt-4 w-full border border-gray-300 text-gray-500 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-100 transition duration-300"
                >
                  <FcGoogle className="text-2xl" /> Continue with Google
                </button>
              </div>

              <p className="mt-4 text-center text-sm text-gray-600">
                Don&apos;t have an account?{' '}
                <Link to="/register" className="text-blue-500 hover:underline">
                  Register here.
                </Link>
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Login;
