import Login from "./components/login/Login";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/Login" component={Login} />
      </Switch>
    </Router>
  );
};

export default App;
