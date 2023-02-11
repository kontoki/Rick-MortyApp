import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import rickmorty2 from "../../resourses/img/rickmorty2.png";
import useService from "../../services/Service";

const LocationsList = () => {
  const [locations, setLocations] = useState([]);
  const [offset, setOffset] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);

  const { getAllLocations } = useService();

  useEffect(() => {
    updateLocations();
  }, []);

  const updateLocations = (offset) => {
    setOffset((offset) =>
      offset.map((item) => {
        return item + 12;
      })
    );
    getAllLocations(offset).then(onLocationLoaded);
  };

  const onLocationLoaded = (newLocations) => {
    setLocations([...locations, ...newLocations]);
  };

  const locationList = () => {
    return locations.map((item) => {
      return (
        <Link key={item.id}>
          <li className="list-grid__item">
            {item.name}
            <span>{item.type}</span>
          </li>
        </Link>
      );
    });
  };
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

      <ul className="list-grid">{locationList()}</ul>

      <button
        onClick={() => {
          updateLocations(offset);
        }}
      >
        LOAD MORE
      </button>
    </div>
  );
};

export default LocationsList;
