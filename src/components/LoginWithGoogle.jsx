import React from "react";
import useAuth from "../Hooks/useAuth";
import { FcGoogle } from "react-icons/fc";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { showAlert, showToast } from "../Utils/alerts";
import { useNavigate } from "react-router-dom";

const LoginWithGoogle = () => {
  const { loginWithGoogle } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then((result) => {
        const userData = result.user;
        const user = {
          name: userData?.displayName,
          email: userData?.email,
          photoURL: userData?.photoURL,
          role: "user",
        };
        axiosPublic
          .post("/users", user)
          .then((res) => {
            if (res.data.insertedId) {
              showToast("Login Successful");
              navigate("/");
            }
          })
          .catch((err) => {
            if (err.status === 400) {
              showToast("Login Successful");
              navigate("/");
              console.log(err.response.data);
            } else {
              console.log(err);
            }
          });
      })
      .catch((error) => {
        showAlert({
          title: "Something went wrong!",
          text: error,
          icon: "error",
          confirmButtonText: "Try Again",
        });
      });
  };
  return (
    <div>
      <button
        onClick={handleGoogleLogin}
        className="mt-4 w-full border border-gray-300 text-gray-500 py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-100 transition duration-300"
      >
        <FcGoogle className="text-2xl" /> Continue with Google
      </button>
    </div>
  );
};

export default LoginWithGoogle;
