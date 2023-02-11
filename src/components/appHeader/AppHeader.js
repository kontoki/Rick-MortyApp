import { Link, NavLink } from "react-router-dom";
import "./AppHeader.scss";
import headerLogo from "../../resourses/img/headerLogo.png";

const AppHeader = () => {
  function refreshPage() {
    window.location.reload();
  }
  return (
    <header className="app__header">
      <Link to="/">
        <img src={headerLogo} alt="headerLogo" onClick={refreshPage} />
      </Link>
      <nav className="app__nav-menu">
        <li className="app__nav-links">
          <NavLink
            end
            style={({ isActive }) => ({
              color: isActive ? "#00CED1" : "inherit",
            })}
            to="/"
          >
            Characters
          </NavLink>
        </li>
        <li className="app__nav-links">
          <NavLink
            end
            style={({ isActive }) => ({
              color: isActive ? "#00CED1" : "inherit",
            })}
            to="/locations"
          >
            Locations
          </NavLink>
        </li>
        <li className="app__nav-links">
          <NavLink
            end
            style={({ isActive }) => ({
              color: isActive ? "#00CED1" : "inherit",
            })}
            to="/episodes"
          >
            Episodes
          </NavLink>
        </li>
      </nav>
    </header>
  );
};
export default AppHeader;
