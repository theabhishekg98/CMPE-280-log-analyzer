import { useAuth } from "../contexts/AuthContext";
import { Redirect, Route } from "react-router-dom";

const PrivateRoute = ({ claim = null, redirectPath = "/login", children }) => {
  /**
   *  @type {User | null}
   */
  const currentUser = useAuth().currentUser;

  /**
   *  @type {ParsedToken | null}
   */
  const claims = useAuth().claims;

  const isLoggedIn = currentUser != null;

  const hasClaims = claim == null || (claims && claims[claim]);

  const errorMessage = !isLoggedIn
    ? "You need to be logged in"
    : !hasClaims
    ? "You dont have rights to access this site"
    : null;

  const shouldRedirect = isLoggedIn && hasClaims;

  return (
    <Route
      render={({ location }) =>
        shouldRedirect ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: redirectPath,
              state: { from: location, errorMessage: errorMessage },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
