import { useCallback, useEffect, useMemo } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import rickmorty3 from "../../resourses/img/rickmorty3.png";
import useService from "../../services/Service";
import "./episodesList.scss";

const EpisodesList = () => {
  const [episodes, setEpisodes] = useState([]);
  const [offset, setOffset] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);

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
    if (name) {
      getAllEpisodes(offset, name).then(onNameEpisode);
    } else {
      getAllEpisodes(offset).then(onEpisodeLoaded);
    }
  };

  const onEpisodeLoaded = (newEpisodes) => {
    setEpisodes([...episodes, ...newEpisodes]);
  };

  const onNameEpisode = (episodeName) => {
    setEpisodes(episodeName);
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
            updateEpisodes(offset, e.target.value);
          }}
        />
      </div>
      <ul className="list-grid">{episodesList()}</ul>
      <button
        style={{ display: episodes.length === 39 ? "none" : "block" }}
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
