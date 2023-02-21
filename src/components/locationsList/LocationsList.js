import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import rickmorty2 from "../../resourses/img/rickmorty2.png";
import useService from "../../services/Service";
import ErrorMessage from "../errorMessage/ErrorMessage";
import Spinner from "../spinner/Spinner";

const LocationsList = () => {
  const [locations, setLocations] = useState([]);
  const [offset, setOffset] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  const [loading, setLoading] = useState(true);
  const [errorShow, setErrorShow] = useState(false);
  const [locationsEnded, setLocationsEnded] = useState(false);

  const { getAllLocations } = useService();

  useEffect(() => {
    updateLocations();
  }, []);

  const updateLocations = (offset, name, type, dimension) => {
    setOffset((offset) =>
      offset.map((item) => {
        return item + 12;
      })
    );

    onLoading();

    if (name !== undefined || type !== undefined || dimension !== undefined) {
      getAllLocations(offset, name, type, dimension)
        .then(onFiltersLoaded)
        .catch(onError);
    } else {
      getAllLocations(offset).then(onLocationLoaded).catch(onError);
    }
  };

  const onLocationLoaded = (newLocations) => {
    let ended = false;
    if (newLocations.length < 12) {
      ended = true;
    }
    setLocations([...locations, ...newLocations]);
    setLocationsEnded((locationsEnded) => ended);
  };

  const onFiltersLoaded = (newLocations) => {
    setLocations(newLocations);
  };

  const onLoading = () => {
    setLoading((loading) => false);
  };

  const onError = () => {
    setErrorShow(true);
  };

  const locationList = () => {
    return locations.map((item) => {
      return (
        <Link to={`/locations/${item.id}`} key={item.id}>
          <li className="list-grid__item">
            {item.name}
            <span>{item.type}</span>
          </li>
        </Link>
      );
    });
  };

  const spinner = loading ? <Spinner /> : null;
  const content = !loading && !errorShow ? locationList() : null;
  const errorImg = errorShow ? <ErrorMessage /> : null;

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
          onChange={(e) => {
            updateLocations(
              offset,
              e.target.value.trim().toLowerCase() === ""
                ? undefined
                : e.target.value.trim().toLowerCase(),
              undefined,
              undefined
            );
          }}
        />
        <select
          name="Type"
          id="Type"
          className="search__select"
          onChange={(e) => {
            updateLocations(offset, undefined, e.target.value, undefined);
          }}
        >
          <option value="Type" hidden>
            Type
          </option>
          <option value="planet">Planet</option>
          <option value="cluster">Cluster</option>
          <option value="tv">TV</option>
          <option value="resort">Resort</option>
          <option value="game">Game</option>
          <option value="daycare">Daycare</option>
          <option value="miniverse">Miniverse</option>
          <option value="teenyverse">Teenyverse</option>
          <option value="spacecraft">Spacecraft</option>
          <option value="machine">Machine</option>
          <option value="unknown">Unknown</option>
          <option value="dream">Dream</option>
          <option value="spa">Spa</option>
          <option value="quadrant">Quadrant</option>
          <option value="quasar">Quasar</option>
          <option value="mount">Mount</option>
          <option value="liquid">Liquid</option>
          <option value="convention">Convention</option>
          <option value="diegesis">Diegesis</option>
          <option value="asteroid">Asteroid</option>
          <option value="reality">Reality</option>
          <option value="spacecraft">Spacecraft</option>
          <option value="base">Base</option>
        </select>
        <select
          name="Dimension"
          id="Dimension"
          className="search__select"
          onChange={(e) => {
            updateLocations(offset, undefined, undefined, e.target.value);
          }}
        >
          <option value="Dimension" hidden>
            Dimension
          </option>
          <option value="unknown">unknown</option>
          <option value="Dimension%20C-137">Dimension C-137</option>
          <option value="Post-Apocalyptic%20Dimension">
            Post-Apocalyptic Dimension
          </option>
          <option value="Replacement%20Dimension">Replacement Dimension</option>
          <option value="Cronenberg%20Dimension">Cronenberg Dimension</option>
          <option value="Dimension%20K-83">Dimension K-83</option>
          <option value="Dimension%20J19ζ7">Dimension J19ζ7</option>
          <option value="Eric%20Stoltz%20Mask%20Dimension">
            Eric Stoltz Mask Dimension
          </option>
          <option value="Evil%20Rick%27s%20Target%20Dimension">
            Evil Rick's Target Dimension
          </option>
          <option value="Giant%20Telepathic%20Spiders%20Dimension">
            Giant Telepathic Spiders Dimension
          </option>
          <option value="Fantasy%20Dimension">Fantasy Dimension</option>
          <option value="Dimension%20K-22">Dimension K-22</option>
          <option value="Dimension%20D-99">Dimension D-99</option>
          <option value="Dimension%20D716">Dimension D716</option>
          <option value="Dimension%20D716-B">Dimension D716-B</option>
          <option value="Dimension%20D716-C">Dimension D716-C</option>
          <option value="Dimension%20J-22">Dimension J-22</option>
          <option value="Dimension%20C-35">Dimension C-35</option>
          <option value="Dimension%20C-137">Dimension C-137</option>
          <option value="Pizza%20Dimension">Pizza Dimension</option>
          <option value="Chair%20Dimension">Chair Dimension</option>
          <option value="Fascist%20Dimension">Fascist Dimension</option>
          <option value="Phone%20Dimension">Fascist Shrimp Dimension</option>
          <option value="Fascist%20Shrimp%20Dimension">
            Fascist Shrimp Dimension
          </option>
          <option value="Fascist%20Teddy%20Bear%20Dimension">
            Fascist Teddy Bear Dimension
          </option>
        </select>
      </div>

      <ul className="list-grid">{content}</ul>
      {spinner}
      {errorImg}
      <button
        onClick={() => {
          updateLocations(offset);
        }}
        style={{ display: locationsEnded || errorShow ? "none" : "block" }}
      >
        LOAD MORE
      </button>
    </div>
  );
};

export default LocationsList;
