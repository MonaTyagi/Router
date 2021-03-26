// import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.js";
import AboutPage from "./pages/AboutPage.js";
import DiscoverMoviesPage from "./pages/DiscoverMoviesPage.js";
import NavBar from "./components/NavBar";
function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Switch>
        <Route path="/discover" component={DiscoverMoviesPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
