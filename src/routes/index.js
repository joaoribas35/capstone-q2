import { Switch, Route } from "react-router-dom";
// import { Route } from "./route";
import LoginPage from "../Pages/LoginPage";
import RegisterPage from "../Pages/RegisterPage";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/">
        <LoginPage />
      </Route>
      <Route exact path="/register">
        <RegisterPage />
      </Route>
    </Switch>
  );
};

export default Routes;
