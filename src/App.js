import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Layout from "./layout/Layout";
import Signin from "./auth/Signin";
import { useAuth } from "./auth/AuthContext";
// import BackgroundImage from "./images/background.png";



function App() {
  const { isLoggedIn } = useAuth();
  return (
    <div>
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={() => <Redirect to="/app/dashboard" />}
          />
          <Route
            exact
            path="/app"
            render={() => <Redirect to="/app/dashboard" />}
          />
          <PrivateRoute path="/app" component={Layout} />
          <PublicRoute
            restricted={true}
            component={Signin}
            path="/signin"
            exact
          />
        </Switch>
      </Router>
    </div>
  );

  function PrivateRoute({ component: Component, ...rest }) {
    return (
      <Route
        {...rest}
        render={(props) =>
          <Component {...props} />
        }
      />
    );
  }

  function PublicRoute({ component: Component, restricted, ...rest }) {
    return (
      <Route
        {...rest}
        render={(props) =>
          isLoggedIn && restricted ? (
            <Redirect to="/dashboard" />
          ) : (
            <Component {...props} />
          )
        }
      />
    );
  }
}

export default App;
