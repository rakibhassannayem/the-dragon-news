import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const AuthLayout = () => {
  return (
    <div className="bg-base-200 min-h-screen">
      <header className="w-11/12 mx-auto py-4 ">
        <Navbar></Navbar>
        <div className="main">
          <Outlet></Outlet>
        </div>
      </header>
    </div>
  );
};

export default AuthLayout;
