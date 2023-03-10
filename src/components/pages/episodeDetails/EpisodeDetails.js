import "../../../style/details.scss";
import arrow from "../../../resourses/icons/arrow.svg";
import { NavLink, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import useService from "../../../services/Service";
import Spinner from "../../spinner/Spinner";
import ErrorMessage from "../../errorMessage/ErrorMessage";

const EpisodeDetails = () => {
  const [episode, setEpisode] = useState([]);
  const [characters, setCharacters] = useState(null);

  const { episodeId } = useParams();

  const { getSingleEpisode, getAllCharacters, loading, error } = useService();

  useEffect(() => {
    updateEpisode(episodeId);
  }, [episodeId]);

  useEffect(() => {
    castResult();
  }, [episode]);

  const onCharactersLoaded = (characters) => {
    setCharacters(characters);
  };

  const updateEpisode = (episodeId) => {
    getSingleEpisode(episodeId).then(onEpisodeLoaded);
  };

  const onEpisodeLoaded = (episode) => {
    setEpisode(episode);
  };

  const castResult = () => {
    if (episode.characters)
      getAllCharacters(episode.characters.join("").match(/\d+/g)).then(
        onCharactersLoaded
      );
  };

  const castList = () => {
    if (characters) {
      return characters.map((item) => {
        return (
          <li className="details__sample" key={item.id}>
            <img src={item.image} alt={item.name} />
            <div className="details__name">{item.name}</div>
            <div className="details__description">{item.species}</div>
          </li>
        );
      });
    }
  };

  const spinner = loading ? <Spinner /> : null;
  const content = !loading && !error ? castList() : null;
  const errorImg = error ? <ErrorMessage /> : null;

  return (
    <div className="details">
      <NavLink to="/episodes" className="button__return">
        <img src={arrow} alt="arrow" />
        <div>GO BACK</div>
      </NavLink>
      <div className="details__header">
        <h2>{episode.name}</h2>
        <div className="details__subheader">
          <p>
            Episode <span>{episode.episode}</span>
          </p>
          <p>
            Date <span>{episode.air_date}</span>
          </p>
        </div>
      </div>
      <div className="details__title">
        <span>Cast</span>
        <ul className="details__grid">{content}</ul>
        {spinner}
        {errorImg}
      </div>
    </div>
  );
};

export default EpisodeDetails;
