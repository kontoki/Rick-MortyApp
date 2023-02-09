import "./singleChar.scss";
import _image_ from "../../resourses/img/_image_.svg";
import arrow from "../../resourses/icons/arrow.svg";

const SingleChar = () => {
  return (
    <div className="single-char">
      <a href="#" className="button__return">
        <img src={arrow} alt="arrow" />
        <div>GO BACK</div>
      </a>
      <img src={_image_} alt="rickphoto" className="single-char__photo" />
      <div className="single-char__title">Rick Sanchez</div>
      <div className="single-char__description">
        <ul className="single-char__informations">
          <span className="single-char__informations-title">Informations</span>
          <li className="single-char__informations-item">
            Gender <span>Male</span>
          </li>
          <li className="single-char__informations-item">
            Status
            <span>Alive</span>
          </li>
          <li className="single-char__informations-item">
            Specie <span>Human</span>
          </li>
          <li className="single-char__informations-item">
            Origin <span>Earth (C-137)</span>
          </li>
          <li className="single-char__informations-item">
            Type <span>Unknown</span>
          </li>
          <li className="single-char__informations-item">
            Location <span>Earth (Replacement Dimension)</span>
          </li>
        </ul>
        <ul className="single-char__episodes">
          <span className="single-char__episodes-title">Episodes</span>
          <li className="single-char__episodes-item">
            S01E01 <span>Pilot</span> <span>December 2, 2013</span>
          </li>
          <li className="single-char__episodes-item">
            S01E02 <span>Lawnmower Dog</span> <span>December 9, 2013</span>
          </li>
          <li className="single-char__episodes-item">
            S01E03 <span>Anatomy Park</span> <span>December 16, 2013</span>
          </li>
          <li className="single-char__episodes-item">
            S01E04 <span>M. Night Shaym-Aliens!</span>
            <span>January 13, 2014</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SingleChar;
