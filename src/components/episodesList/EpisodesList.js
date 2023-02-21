import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import rickmorty3 from "../../resourses/img/rickmorty3.png";
import useService from "../../services/Service";
import ErrorMessage from "../errorMessage/ErrorMessage";
import Spinner from "../spinner/Spinner";
import "./episodesList.scss";

const EpisodesList = () => {
  const [episodes, setEpisodes] = useState([]);
  const [offset, setOffset] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  const [loading, setLoading] = useState(true);
  const [errorShow, setErrorShow] = useState(false);
  const [episodeEnded, setepisodeEnded] = useState(false);

  const { getAllEpisodes } = useService();

  useEffect(() => {
    updateEpisodes();
  }, []);

  const updateEpisodes = (offset, name) => {
    setOffset((offset) =>
      offset.map((item) => {
        return item + 12;
      })
    );

    onLoading();

    if (name) {
      getAllEpisodes(offset, name).then(onNameEpisode).catch(onError);
    } else {
      getAllEpisodes(offset).then(onEpisodeLoaded).catch(onError);
    }
  };

  const onEpisodeLoaded = (newEpisodes) => {
    let ended = false;
    if (newEpisodes.length < 12) {
      ended = true;
    }
    setEpisodes([...episodes, ...newEpisodes]);
    setepisodeEnded((episodeEnded) => ended);
  };

  const onNameEpisode = (episodeName) => {
    setEpisodes(episodeName);
  };

  const onLoading = () => {
    setLoading((loading) => false);
  };

  const onError = () => {
    setErrorShow(true);
  };

  const episodesList = () => {
    return episodes.map((item) => {
      return (
        <Link to={`/episodes/${item.id}`} key={item.id}>
          <li className="list-grid__item">
            {item.name}
            <span>{item.air_date}</span>
            <span className="episode-list__span">{item.episode}</span>
          </li>
        </Link>
      );
    });
  };

  const spinner = loading ? <Spinner /> : null;
  const content = !loading && !errorShow ? episodesList() : null;
  const errorImg = errorShow ? <ErrorMessage /> : null;

  return (
    <div className="episode-list">
      <div className="app__image">
        <img src={rickmorty3} alt="rickmorty1" />
      </div>
      <div className="search__wrapper search__wrapper_episodes">
        <input
          type="text"
          className=" search__input search__input_episodes  "
          placeholder="Filter by name..."
          onChange={(e) => {
            updateEpisodes(
              offset,
              e.target.value.trim().toLowerCase() === ""
                ? undefined
                : e.target.value.trim().toLowerCase()
            );
          }}
        />
      </div>
      <ul className="list-grid">{content}</ul>
      {spinner}
      {errorImg}
      <button
        style={{ display: episodeEnded || errorShow ? "none" : "block" }}
        onClick={() => {
          updateEpisodes(offset);
        }}
      >
        LOAD MORE
      </button>
    </div>
  );
};

export default EpisodesList;
