import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <div>
      <Route
        {...rest}
        render={(props) =>
          window.localStorage.getItem("token") ? (
            <Component {...props} />
          ) : (
            <Redirect to="/login" />
          )
        }
      />
    </div>
  );
};

export default PrivateRoute;
