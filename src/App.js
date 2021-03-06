import Login from "./components.js/login/Login";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/Login" component={Login} />
      </Switch>
    </Router>
  );
};

export default App;
