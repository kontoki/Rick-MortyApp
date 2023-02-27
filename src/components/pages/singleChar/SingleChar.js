import "./singleChar.scss";
import arrow from "../../../resourses/icons/arrow.svg";
import { NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useService from "../../../services/Service";
import Spinner from "../../spinner/Spinner";
import ErrorMessage from "../../errorMessage/ErrorMessage";
const SingleChar = () => {
  const { charId } = useParams();
  const [char, setChar] = useState([]);

  const { getCharacter, loading, error } = useService();

  useEffect(() => {
    updateChar();
  }, [charId]);

  const updateChar = () => {
    if (charId) {
      getCharacter(charId).then(onCharLoaded);
    }
    return null;
  };

  const onCharLoaded = (char) => {
    setChar(char);
  };

  const spinner = loading ? <Spinner /> : null;
  const content = !loading && !error ? <View char={char} /> : null;
  const errorImg = error ? <ErrorMessage /> : null;

  return (
    <div className="single-char">
      {content}
      {spinner}
      {errorImg}
    </div>
  );
};

const View = ({ char }) => {
  const { name, gender, image, location, origin, species, status, type } = char;

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
