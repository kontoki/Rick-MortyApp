import "./AppHeader.scss";
import headerLogo from "../../resourses/img/headerLogo.png";

const AppHeader = () => {
  return (
    <header className="app__header">
      <a href="#">
        <img src={headerLogo} alt="headerLogo" />
      </a>
      <nav className="app__nav-menu">
        <li className="app__nav-links">
          <a href="#">Characters</a>
        </li>
        <li className="app__nav-links">
          <a href="#">Locations</a>
        </li>
        <li className="app__nav-links">
          <a href="#">Episodes</a>
        </li>
      </nav>
    </header>
  );
};
export default AppHeader;
