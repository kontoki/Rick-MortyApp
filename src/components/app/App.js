import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import AppHeader from "../appHeader/AppHeader";
import CharList from "../charList/CharList";
import EpisodesList from "../episodesList/EpisodesList";
import LocationsList from "../locationsList/LocationsList";
import { EpisodeDetails, LoctionDetails, SingleChar, Page404 } from "../pages";

const App = () => {
  return (
    <Router>
      <div className="app">
        <AppHeader />
        <Routes>
          <Route exact path="/" element={<CharList />} />
          <Route exact path="/locations" element={<LocationsList />} />
          <Route exact path="/episodes" element={<EpisodesList />} />
          <Route exact path="/character/:charId" element={<SingleChar />} />
          <Route
            exact
            path="/episodes/:episodeId"
            element={<EpisodeDetails />}
          />
          <Route path="*" element={<Page404 />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
