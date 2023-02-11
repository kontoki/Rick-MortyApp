import "./singleChar.scss";
import arrow from "../../../resourses/icons/arrow.svg";
import { NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useService from "../../../services/Service";
import Spinner from "../../spinner/Spinner";
const SingleChar = () => {
  const { charId } = useParams();
  const [char, setChar] = useState([]);
  const [loading, setLoading] = useState(true);

  const { getCharacter } = useService();

  useEffect(() => {
    updateChar();
  }, [charId]);

  const updateChar = () => {
    if (charId) {
      onLoading();
      getCharacter(charId).then(onCharLoaded);
    }
    return null;
  };

  const onCharLoaded = (char) => {
    setChar(char);
  };

  const onLoading = () => {
    setLoading(false);
  };

  return (
    <div className="single-char">
      {loading ? <Spinner /> : <View char={char} />}
    </div>
  );
};

const View = ({ char }) => {
  const {
    name,
    id,
    gender,
    episodes,
    image,
    location,
    origin,
    species,
    status,
    type,
  } = char;

  return (
    <>
      <NavLink end to="/" className="button__return">
        <img src={arrow} alt="arrow" />
        <div>GO BACK</div>
      </NavLink>
      <img src={image} alt={name} className="single-char__photo" />
      <div className="single-char__title">{name}</div>
      <div className="single-char__description">
        <ul className="single-char__informations">
          <span className="single-char__informations-title">Informations</span>
          <li className="single-char__informations-item">
            Gender <span>{gender}</span>
          </li>
          <li className="single-char__informations-item">
            Status
            <span>{status}</span>
          </li>
          <li className="single-char__informations-item">
            Specie <span>{species}</span>
          </li>
          <li className="single-char__informations-item">
            Origin <span>{origin}</span>
          </li>
          <li className="single-char__informations-item">
            Type <span>{type}</span>
          </li>
          <li className="single-char__informations-item">
            Location <span>{location}</span>
          </li>
        </ul>
      </div>
    </>
  );
};

export default SingleChar;