import classes from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className={classes.navContainer}>
      <h1 className={classes.logo}>OT</h1>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink
              to="omen/home"
              className={({ isActive }) => (isActive ? classes.active : " ")}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="omen/projects"
              className={({ isActive }) => (isActive ? classes.active : " ")}
            >
              Projects
            </NavLink>
          </li>
          <li>
            <NavLink
              to="omen/contact"
              className={({ isActive }) => (isActive ? classes.active : " ")}
            >
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
