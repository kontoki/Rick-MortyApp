import rickmorty2 from "../../resourses/img/rickmorty2.png";

const LocationsList = () => {
  return (
    <div className="location-list">
      <div className="app__image">
        <img src={rickmorty2} alt="rickmorty1" />
      </div>
      <div className="search__wrapper search__wrapper_location">
        <input
          type="text"
          className=" search__input search__input_location  "
          placeholder="Filter by name..."
        />
        <select name="Type" id="Type" className="search__select">
          <option value="">Type</option>
        </select>
        <select name="Dimension" id="Dimension" className="search__select">
          <option value="">Dimension</option>
        </select>
      </div>
      <ul className="list-grid">
        <a href="#">
          <li className="list-grid__item">
            Earth (C-137)
            <span>Planet</span>
          </li>
        </a>
        <a href="#">
          <li className="list-grid__item">
            Earth (C-137)
            <span>Planet</span>
          </li>
        </a>
        <a href="#">
          <li className="list-grid__item">
            Earth (C-137)
            <span>Planet</span>
          </li>
        </a>
        <a href="#">
          <li className="list-grid__item">
            Earth (C-137)
            <span>Planet</span>
          </li>
        </a>
        <a href="#">
          <li className="list-grid__item">
            Earth (C-137)
            <span>Planet</span>
          </li>
        </a>
        <a href="#">
          <li className="list-grid__item">
            Earth (C-137)
            <span>Planet</span>
          </li>
        </a>
        <a href="#">
          <li className="list-grid__item">
            Earth (C-137)
            <span>Planet</span>
          </li>
        </a>
        <a href="#">
          <li className="list-grid__item">
            Earth (C-137)
            <span>Planet</span>
          </li>
        </a>
        <a href="#">
          <li className="list-grid__item">
            Earth (C-137)
            <span>Planet</span>
          </li>
        </a>
        <a href="#">
          <li className="list-grid__item">
            Earth (C-137)
            <span>Planet</span>
          </li>
        </a>
        <a href="#">
          <li className="list-grid__item">
            Earth (C-137)
            <span>Planet</span>
          </li>
        </a>
        <a href="#">
          <li className="list-grid__item">
            Earth (C-137)
            <span>Planet</span>
          </li>
        </a>
      </ul>
      <button>LOAD MORE</button>
    </div>
  );
};

export default LocationsList;
