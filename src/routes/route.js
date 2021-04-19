import { Redirect, Route as RouterDOM } from "react-router-dom";

export const Route = ({ isPrivate, component: Component, ...rest }) => {
  const token = true;

  return (
    <RouterDOM
      {...rest}
      render={() => {
        return !!token ? (
          <Component />
        ) : (
          <Redirect to={{ pathname: isPrivate ? "/" : "/dashboard" }} />
        );
      }}
    />
  );
};
