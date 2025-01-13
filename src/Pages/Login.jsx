import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Lottie from "lottie-react";
import loginLottieAnimation from "../assets/login-lottie-animation.json";
import { FcGoogle } from "react-icons/fc";

const Login = () => {
  const { login,loginWithGoogle } = useContext(AuthContext);
  const loginHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    login(email, password);
  };
  return (
    <div className=" bg-base-200 ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left  w-full max-w-lg ">
          <Lottie animationData={loginLottieAnimation}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
          <h1 className="text-4xl font-bold text-center">Login Now</h1>
          <form onSubmit={loginHandler} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                name="email"
                type="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                name="password"
                type="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              {/* <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label> */}
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <div className="divider">OR</div>
          <button onClick={loginWithGoogle} className="flex items-center justify-center gap-2 text-xl btn m-6"><FcGoogle /><span>Continue With Google</span></button>
        </div>
      </div>
    </div>
  );
};

export default Login;
