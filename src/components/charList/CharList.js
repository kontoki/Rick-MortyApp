import "./charList.scss";
import rickmorty1 from "../../resourses/img/rickmorty1.png";
import useService from "../../services/Service";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CharList = () => {
  const [chars, setChars] = useState([]);
  const [offset, setOffset] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
  const [loading, setLoading] = useState(true);
  const [errorShow, setErrorShow] = useState(false);

  const { getAllCharacters } = useService();

  useEffect(() => {
    updateChars(offset);
  }, []);

  const updateChars = (offset, status, gender, species, name) => {
    setOffset((offset) =>
      offset.map((item) => {
        return item + 8;
      })
    );
    onLoading();

    if (
      gender !== undefined ||
      status !== undefined ||
      species !== undefined ||
      name !== undefined
    ) {
      getAllCharacters(offset, status, gender, species, name)
        .then(onStatusLoaded)
        .catch(onError);
    } else {
      getAllCharacters(offset, status, gender, species, name)
        .then(onCharsLoaded)
        .catch(onError);
    }
  };

  const onStatusLoaded = (chars) => {
    setChars(chars);
  };

  const onCharsLoaded = (newChars) => {
    setChars([...chars, ...newChars]);
  };

  const onLoading = () => {
    setLoading((loading) => false);
  };

  const onError = () => {
    setErrorShow(true);
  };

  const renderList = () => {
    return chars.map((item, id) => {
      return (
        <Link to={`/character/${item.id}`} key={item.id}>
          <li className="char__sample char__sample_active" tabIndex={0}>
            <img src={item.image} alt={item.name} />
            <div className="char__name">{item.name}</div>
            <div className="char__description">{item.species}</div>
          </li>
        </Link>
      );
    });
  };

  const spinner = loading ? <Spinner /> : null;
  const content = !loading && !errorShow ? renderList() : null;
  const errorImg = errorShow ? <ErrorMessage /> : null;

  return (
    <div className="char-list">
      <div className="app__image">
        <img src={rickmorty1} alt="rickmorty1" />
      </div>
      <div className="search__wrapper">
        <input
          type="text"
          className="search__input"
          placeholder="Filter by name..."
          onChange={(e) => {
            updateChars(
              offset,
              undefined,
              undefined,
              undefined,
              e.target.value.trim().toLowerCase() === ""
                ? undefined
                : e.target.value.trim().toLowerCase()
            );
          }}
        />
        <select
          name="Species"
          id="Species"
          className="search__select"
          onChange={(e) => {
            updateChars(
              offset,
              undefined,
              undefined,
              e.target.value,
              undefined
            );
          }}
        >
          <option value="" hidden>
            Species
          </option>
          <option value="alien">Aliens</option>
          <option value="human">Human</option>
          <option value="animal">Animal</option>
          <option value="cronenberg">Cronenberg</option>
          <option value="disease">Disease</option>

          <option value="humanoid">Humanoid</option>
          <option value="unknown">Unknown</option>
          <option value="Poopybutthole">Poopybutthole</option>
        </select>
        <select
          name="Gender"
          id="Gender"
          className="search__select"
          onChange={(e) =>
            updateChars(offset, undefined, e.target.value, undefined, undefined)
          }
        >
          <option value="" hidden>
            Gender
          </option>
          <option value="female">Female Characters</option>
          <option value="male">Male Characters</option>
          <option value="genderless">Unknown</option>
          <option value="unknown">Genderless</option>
        </select>
        <select
          name="Status"
          id="Status"
          className="search__select"
          onChange={(e) => {
            updateChars(
              offset,
              e.target.value,
              undefined,
              undefined,
              undefined
            );
          }}
        >
          <option value="" hidden>
            Status
          </option>
          <option value="alive">Alive</option>
          <option value="dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
      <ul className="char__grid">{content}</ul>
      {spinner}
      {errorImg}
      <button onClick={() => updateChars(offset)}>LOAD MORE</button>
    </div>
  );
};
export default CharList;
