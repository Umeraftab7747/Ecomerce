import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Prodcuts from "./components/Products/Prodcuts";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Prodcuts" component={Prodcuts} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
