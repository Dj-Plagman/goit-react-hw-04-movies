import React, { lazy, Suspense } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Navigation from "./component/Navigation/Navigation";
import routes from "./component/Services/routes";

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Suspense fallback={<div>Loading...</div>}>
          <Route
            path={routes.home}
            exact
            component={lazy(() => import("./component/HomePage/HomePage"))}
          />
          <Route
            path={routes.movies}
            exact
            component={lazy(() => import("./component/MoviePage/MoviePage"))}
          />
          <Route
            path={routes.movieDetails}
            component={lazy(() =>
              import("./component/MoveiDetailsPage/MovieDetailsPage")
            )}
          />
        </Suspense>
      </Switch>
    </BrowserRouter>
  );
};

export default App;