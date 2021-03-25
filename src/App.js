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
        <Route path="/discover" components={DiscoverMoviesPage} />
        <Route path="/about" components={AboutPage} />
        <Route path="/" components={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
