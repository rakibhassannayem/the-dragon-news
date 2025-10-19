import { Link, NavLink } from "react-router";
import userIcon from "../assets/user.png";
import { use } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user } = use(AuthContext);
  return (
    <div className="flex justify-between items-center">
      <div>{user && user.email}</div>
      <div className="nav space-x-5 text-accent">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/career"}>Career</NavLink>
      </div>
      <div className="login-btn flex items-center gap-3">
        <img src={userIcon} alt="" />
        <Link to={"/auth/login"} className="btn btn-primary px-10">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
