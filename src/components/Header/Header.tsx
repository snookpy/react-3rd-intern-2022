import NavLinkActive from "../NavLinkActive/NavLinkActive";
import "./header.css";

function Header() {
  return (
    <nav>
      <ul className="nav">
        <li className="item">
          <NavLinkActive to="/">Home</NavLinkActive>
        </li>
        <li className="item">
          <NavLinkActive to="/posts">Posts</NavLinkActive>
        </li>
        <li className="item">
          <NavLinkActive to="/about">About</NavLinkActive>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
