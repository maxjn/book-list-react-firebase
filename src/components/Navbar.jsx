import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <NavLink to="/">Books</NavLink>
      <NavLink to="new">New</NavLink>
    </nav>
  );
}

export default Navbar;
