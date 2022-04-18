import NavLinkActive from "../../components/NavLinkActive/NavLinkActive";
import './side-bar-nav.css'

function SideBarNav() {
  return (
    <nav>
      <ul className="nav-vertical">
        <li>
          <NavLinkActive to="info">info</NavLinkActive>
        </li>
        <li>
          <NavLinkActive to="comments">comments</NavLinkActive>
        </li>
      </ul>
    </nav>
  );
}

export default SideBarNav;
