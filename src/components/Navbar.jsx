import { Link, NavLink } from "react-router";
import userIcon from "../assets/user.png";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center">
      <div></div>
      <div className="nav space-x-5 text-accent">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/career"}>Career</NavLink>
      </div>
      <div className="login-btn flex items-center gap-2">
        <img src={userIcon} alt="" />
        <Link to={"/auth/login"} className="btn btn-primary px-10">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
