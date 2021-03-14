import { useEffect } from "react";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useSelector, useDispatch } from "react-redux";
import { loadUser } from "./redux/actions/user";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
const App = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  useEffect(() => {
    console.log("attempting to load");
    dispatch(loadUser());
  }, [dispatch, auth]);
  return (
    <Router>
      <Switch>
        {auth.isLoading && <CircularProgress style={{ margin: 200 }} />}
        <Route path="/" component={Home} exact />
        <Route path="/Login" component={Login} />
      </Switch>
    </Router>
  );
};

export default App;
