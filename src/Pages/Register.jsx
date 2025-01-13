import React, { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Lottie from "lottie-react";
import registerLottieAnimation from "../assets/register-lottie-animation.json";

const Register = () => {
  const { register, updateUserProfile } = useContext(AuthContext);
  const registerHandler = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photoURL.value;
    const userData = { displayName: name, photoURL: photoURL };
    register(email, password).then((result) => {
      updateUserProfile(userData);
    });
  };
  return (
    <div className=" bg-base-200 ">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left  w-full max-w-lg ">
          <Lottie animationData={registerLottieAnimation}></Lottie>
        </div>
        <div className="card bg-base-100 w-full max-w-lg shrink-0 shadow-2xl">
          <h1 className="text-4xl font-bold text-center">Register Now</h1>
          <form onSubmit={registerHandler} className="card-body">
            {/* name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            {/* Email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            {/* Password */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="input input-bordered"
                required
              />
            </div>
            {/* Photo url */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <input
                type="url"
                name="photoURL"
                placeholder="Photo URL"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
