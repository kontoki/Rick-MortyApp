import "../../../style/details.scss";
import arrow from "../../../resourses/icons/arrow.svg";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useService from "../../../services/Service";
import Spinner from "../../spinner/Spinner";
import ErrorMessage from "../../errorMessage/ErrorMessage";

const LoctionDetails = () => {
  const [location, setLocation] = useState([]);
  const [residents, setResidents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [errorShow, setErrorShow] = useState(false);

  const { locationId } = useParams();

  const { getSingleLocation, getAllCharacters } = useService();

  useEffect(() => {
    updateLocation(locationId);
  }, [locationId]);

  useEffect(() => {
    updateResidents();
  }, [location]);

  const updateResidents = () => {
    if (location.residents) {
      onLoading();

      getAllCharacters(
        location.residents.join("").match(/\d+/g) === null
          ? ""
          : location.residents.join("").match(/\d+/g)
      )
        .then(onResidentsLoaded)
        .catch(onError);
    }
  };

  const updateLocation = (locationId) => {
    onLoading();
    getSingleLocation(locationId).then(onLocationLoaded).catch(onError);
  };

  const onResidentsLoaded = (residents) => {
    setResidents(residents);
  };

  const onLocationLoaded = (location) => {
    setLocation(location);
  };

  const onLoading = () => {
    setLoading(false);
  };

  const onError = () => {
    setErrorShow(true);
  };

  const renderResidents = () => {
    if (residents.length > 0) {
      return residents.map((item) => {
        return (
          <li className="details__sample" key={item.id}>
            <img src={item.image} alt={item.name} />
            <div className="details__name">{item.name}</div>
            <div className="details__description">{item.species}</div>
          </li>
        );
      });
    } else {
      return (
        <li className="details__sample" key={residents.id}>
          <img src={residents.image} alt={residents.name} />
          <div className="details__name">{residents.name}</div>
          <div className="details__description">{residents.species}</div>
        </li>
      );
    }
  };

  const spinner = loading ? <Spinner /> : null;
  const content = !loading && !errorShow ? renderResidents() : null;
  const errorImg = errorShow ? <ErrorMessage /> : null;

  return (
    <div className="details">
      <Link to="/locations" className="button__return">
        <img src={arrow} alt="arrow" />
        <div>GO BACK</div>
      </Link>
      <div className="details__header">
        <h2>{location.name}</h2>
        <div className="details__subheader">
          <p>
            Type <span>{location.type}</span>
          </p>
          <p>
            Dimension <span>{location.dimension}</span>
          </p>
        </div>
      </div>
      <div className="details__title">
        <span>Residents</span>
        <ul className="details__grid">{content}</ul>
        {spinner}
        {errorImg}
      </div>
    </div>
  );
};

export default LoctionDetails;
