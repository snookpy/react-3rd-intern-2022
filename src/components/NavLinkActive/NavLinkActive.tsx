import { NavLink, NavLinkProps } from "react-router-dom";

function NavLinkActive(props: NavLinkProps) {
  return (
    <NavLink
      {...props}
      className={(data) => (data.isActive ? " active" : "")}
    />
  );
}

export default NavLinkActive;
