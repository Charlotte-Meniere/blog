import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <article className="Navbar">
      <div>
        <NavLink to="/" activeClassName="selected">
          <p> Home</p>
        </NavLink>
        <NavLink to="/project" activeClassName="selected">
          <p> Work</p>
        </NavLink>
        <NavLink to="/contact" activeClassName="selected">
          <p>Contact</p>
        </NavLink>
      </div>
    </article>
  );
};
export default Navbar;
