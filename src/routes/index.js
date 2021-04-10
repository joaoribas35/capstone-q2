import { Switch } from "react-router-dom";
import { Route } from "./route";
import LoginPage from "../Pages/LoginPage";
import RegisterPage from "../Pages/RegisterPage";
import RebalancePage from "../Pages/RebalancePage";
import TaxesPage from "../Pages/TaxesPage/Index";
import Dashboard from "../Pages/Dashboard/";
import TransactionsPage from "../Pages/TransactionsPage";

import Home from "../Pages/Home";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/register" component={RegisterPage} />
      <Route exact path="/rebalance" component={RebalancePage} />
      <Route exact path="/taxes" component={TaxesPage} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/transactions" component={TransactionsPage} />
    </Switch>
  );
};

export default Routes;
