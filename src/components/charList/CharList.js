import "./charList.scss";
import rickmorty1 from "../../resourses/img/rickmorty1.png";
import useService from "../../services/Service";
import Spinner from "../spinner/Spinner";
import ErrorMessage from "../errorMessage/ErrorMessage";
import { useEffect, useState } from "react";

const CharList = () => {
  const [chars, setChars] = useState([]);
  const [offset, setOffset] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
  const [loading, setLoading] = useState(true);
  const [errorShow, setErrorShow] = useState(false);

  const { getAllCharacters } = useService();

  useEffect(() => {
    updateChars(offset);
  }, []);

  const updateChars = (offset, status, gender) => {
    setOffset((offset) =>
      offset.map((item) => {
        return item + 8;
      })
    );
    onLoading();
    if (status !== undefined) {
      getAllCharacters(offset, status).then(onStatusLoaded).catch(onError);
    } else if (gender !== undefined) {
      getAllCharacters(offset, status).then(onStatusLoaded).catch(onError);
    } else {
      getAllCharacters(offset, status).then(onCharsLoaded).catch(onError);
    }
  };

  const onStatusLoaded = (chars) => {
    setChars(chars);
  };

  const onCharsLoaded = (newChars) => {
    setChars([...chars, ...newChars]);
  };

  const onLoading = () => {
    setLoading(false);
  };

  const onError = () => {
    setErrorShow(true);
  };

  const renderList = () => {
    return chars.map((item) => {
      return (
        <li
          className="char__sample char__sample_active"
          key={item.id}
          tabIndex={0}
        >
          <img src={item.image} alt="image" />
          <div className="char__name">{item.name}</div>
          <div className="char__description">{item.species}</div>
        </li>
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
        />
        <select name="Species" id="Species" className="search__select">
          <option value="" hidden>
            Species
          </option>
          <option value="">Alien Parasite Characters </option>
          <option value="">Aliens</option>
          <option value="">Clones</option>
          <option value="">Cyborgs</option>
          <option value="">Mythologs</option>
          <option value="">Human</option>
          <option value="">Robots</option>
          <option value="">Vampires</option>
        </select>
        <select name="Gender" id="Gender" className="search__select">
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
            updateChars(offset, e.target.value);
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
