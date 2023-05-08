import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Sample from "./routes/Sample";
import Practice from "./routes/Practice";
import "./scss/base/reset.scss";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movie/:id">
          <Detail />
        </Route>
        <Route path="/practice">
          <Practice />
        </Route>
        <Route path="/">
          <Home />
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
