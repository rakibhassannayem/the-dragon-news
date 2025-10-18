import React from "react";
import { Link } from "react-router";

const Register = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <h2 className="font-bold text-2xl pt-8 text-center">
          Register your account
        </h2>
        <div className="card-body">
          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input
              type="text"
              className="input"
              placeholder="Enter your name"
            />

            <label className="label">Photo URL</label>
            <input
              type="text"
              className="input"
              placeholder="Enter your photo url"
            />

            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              placeholder="Enter your email"
            />
            
            <label className="label">Password</label>
            <input
              type="password"
              className="input"
              placeholder="Enter your password"
            />

            <button className="btn btn-neutral mt-4">Register</button>
            <p className="font-semibold text-center pt-3">
              Already Have An Account ?{" "}
              <Link to={"/auth/login"} className="text-secondary">
                Login
              </Link>
            </p>
          </fieldset>
        </div>
      </div>
    </div>
  );
};

export default Register;
