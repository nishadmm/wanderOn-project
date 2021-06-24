import Navbar from "./componets/layouts/Navbar";
import ShowcaseSection from "./componets/sections/ShowcaseSection";
import ExploreSection from "./componets/sections/ExploreSection";
import TrendingTripsSection from "./componets/sections/TrendingTripsSection";
import WeekendSection from "./componets/sections/WeekendSection";
import "./App.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <ShowcaseSection />
      <ExploreSection />
      <TrendingTripsSection />
      <WeekendSection />
    </div>
  );
};

export default App;
