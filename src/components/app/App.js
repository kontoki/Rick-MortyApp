import AppHeader from "../appHeader/AppHeader";
import CharList from "../charList/CharList";
import EpisodeDetails from "../episodeDetails/EpisodeDetails";
import EpisodesList from "../episodesList/EpisodesList";
import LoctionDetails from "../locationDetails/LoctionDetails";
import LocationsList from "../locationsList/LocationsList";
import SingleChar from "../singleChar/SingleChar";

const App = () => {
  return (
    <div className="app">
      <AppHeader />
      <CharList />
      {/* <SingleChar /> */}
      {/* <LocationsList /> */}
      {/* <EpisodesList /> */}
      {/* <LoctionDetails /> */}
      {/* <EpisodeDetails /> */}
    </div>
  );
};

export default App;
