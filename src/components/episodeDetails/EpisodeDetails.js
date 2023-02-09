import "../../style/details.scss";
import arrow from "../../resourses/icons/arrow.svg";
import rickphoto from "../../resourses/img/rickphoto.png";

const EpisodeDetails = () => {
  return (
    <div className="details">
      <a href="#" className="button__return">
        <img src={arrow} alt="arrow" />
        <div>GO BACK</div>
      </a>
      <div className="details__header">
        <h2>Pilot</h2>
        <div className="details__subheader">
          <p>
            Episode <span>SE01E01</span>
          </p>
          <p>
            Date <span>December 2, 2013</span>
          </p>
        </div>
      </div>
      <div className="details__title">
        <span>Cast</span>
        <ul className="details__grid">
          <li className="details__sample">
            <img src={rickphoto} alt="rickphoto" />
            <div className="details__name">Rick Sanchez</div>
            <div className="details__description">Human</div>
          </li>
          <li className="details__sample">
            <img src={rickphoto} alt="rickphoto" />
            <div className="details__name">Rick Sanchez</div>
            <div className="details__description">Human</div>
          </li>

          <li className="details__sample">
            <img src={rickphoto} alt="rickphoto" />
            <div className="details__name">Rick Sanchez</div>
            <div className="details__description">Human</div>
          </li>
          <li className="details__sample">
            <img src={rickphoto} alt="rickphoto" />
            <div className="details__name">Rick Sanchez</div>
            <div className="details__description">Human</div>
          </li>
          <li className="details__sample">
            <img src={rickphoto} alt="rickphoto" />
            <div className="details__name">Rick Sanchez</div>
            <div className="details__description">Human</div>
          </li>
          <li className="details__sample">
            <img src={rickphoto} alt="rickphoto" />
            <div className="details__name">Rick Sanchez</div>
            <div className="details__description">Human</div>
          </li>
          <li className="details__sample">
            <img src={rickphoto} alt="rickphoto" />
            <div className="details__name">Rick Sanchez</div>
            <div className="details__description">Human</div>
          </li>
          <li className="details__sample">
            <img src={rickphoto} alt="rickphoto" />
            <div className="details__name">Rick Sanchez</div>
            <div className="details__description">Human</div>
          </li>
          <li className="details__sample">
            <img src={rickphoto} alt="rickphoto" />
            <div className="details__name">Rick Sanchez</div>
            <div className="details__description">Human</div>
          </li>
          <li className="details__sample">
            <img src={rickphoto} alt="rickphoto" />
            <div className="details__name">Rick Sanchez</div>
            <div className="details__description">Human</div>
          </li>
          <li className="details__sample">
            <img src={rickphoto} alt="rickphoto" />
            <div className="details__name">Rick Sanchez</div>
            <div className="details__description">Human</div>
          </li>
          <li className="details__sample">
            <img src={rickphoto} alt="rickphoto" />
            <div className="details__name">Rick Sanchez</div>
            <div className="details__description">Human</div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default EpisodeDetails;
