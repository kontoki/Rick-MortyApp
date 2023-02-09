import "../../style/details.scss";
import arrow from "../../resourses/icons/arrow.svg";
import rickphoto from "../../resourses/img/rickphoto.png";

const LoctionDetails = () => {
  return (
    <div className="details">
      <a href="#" className="button__return">
        <img src={arrow} alt="arrow" />
        <div>GO BACK</div>
      </a>
      <div className="details__header">
        <h2>Earth (Replacement Dimension)</h2>
        <div className="details__subheader">
          <p>
            Type <span>Planet</span>
          </p>
          <p>
            Dimension <span>Replacement Dimension</span>
          </p>
        </div>
      </div>
      <div className="details__title">
        <span>Residents</span>
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

export default LoctionDetails;
