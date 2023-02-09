import rickmorty3 from "../../resourses/img/rickmorty3.png";
import "./episodesList.scss";

const EpisodesList = () => {
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
        />
      </div>
      <ul className="list-grid">
        <a href="#">
          <li className="list-grid__item">
            Pilot
            <span>December 2, 2013</span>
            <span className="episode-list__span">SE01E01</span>
          </li>
        </a>
        <a href="#">
          <li className="list-grid__item">
            Pilot
            <span>December 2, 2013</span>
            <span className="episode-list__span">SE01E01</span>
          </li>
        </a>
        <a href="#">
          <li className="list-grid__item">
            Pilot
            <span>December 2, 2013</span>
            <span className="episode-list__span">SE01E01</span>
          </li>
        </a>
        <a href="#">
          <li className="list-grid__item">
            Pilot
            <span>December 2, 2013</span>
            <span className="episode-list__span">SE01E01</span>
          </li>
        </a>
        <a href="#">
          <li className="list-grid__item">
            Pilot
            <span>December 2, 2013</span>
            <span className="episode-list__span">SE01E01</span>
          </li>
        </a>
        <a href="#">
          <li className="list-grid__item">
            Pilot
            <span>December 2, 2013</span>
            <span className="episode-list__span">SE01E01</span>
          </li>
        </a>
        <a href="#">
          <li className="list-grid__item">
            Pilot
            <span>December 2, 2013</span>
            <span className="episode-list__span">SE01E01</span>
          </li>
        </a>
        <a href="#">
          <li className="list-grid__item">
            Pilot
            <span>December 2, 2013</span>
            <span className="episode-list__span">SE01E01</span>
          </li>
        </a>
        <a href="#">
          <li className="list-grid__item">
            Pilot
            <span>December 2, 2013</span>
            <span className="episode-list__span">SE01E01</span>
          </li>
        </a>
        <a href="#">
          <li className="list-grid__item">
            Pilot
            <span>December 2, 2013</span>
            <span className="episode-list__span">SE01E01</span>
          </li>
        </a>
        <a href="#">
          <li className="list-grid__item">
            Pilot
            <span>December 2, 2013</span>
            <span className="episode-list__span">SE01E01</span>
          </li>
        </a>
        <a href="#">
          <li className="list-grid__item">
            Pilot
            <span>December 2, 2013</span>
            <span className="episode-list__span">SE01E01</span>
          </li>
        </a>
      </ul>
      <button>LOAD MORE</button>
    </div>
  );
};

export default EpisodesList;
