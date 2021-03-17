import { useEffect } from "react";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import { useSelector, useDispatch } from "react-redux";
import { loadUser } from "./redux/actions/user";
import { fetchMovies } from "./redux/actions/movies";
import { fetchSeries } from "./redux/actions/series";
import CircularProgress from "@material-ui/core/CircularProgress";

import {
  useHistory,
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import RecommendForm from "./components/recommendForm/RecommendForm";
const App = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchMovies());
    dispatch(fetchSeries());
  }, [dispatch]);
  useEffect(() => {
    console.log("attempting to load");
    dispatch(loadUser());
  }, [dispatch, state.auth]);

  return (
    <Router>
      {state.auth.isLoading ||
      state.movies.isLoading ||
      state.series.isLoading ? (
        <CircularProgress style={{ marginLeft: 700, marginTop: 300 }} />
      ) : (
        <Switch>
          <Route path="/" component={Home} exact />
          <Route path="/Login" component={Login} />
          <Route path="/AddRecommend" component={RecommendForm} />
        </Switch>
      )}
    </Router>
  );
};

export default App;
