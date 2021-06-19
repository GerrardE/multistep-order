import React, { Fragment } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@base/styles/styles.css";

export default (): JSX.Element => (
  <Fragment>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Switch>
            {routes.map(route => (
              <Route
                exact
                key={route.path}
                path={route.path}
                component={route.component}
              />
            ))}
          </Switch>
        </Router>
      </PersistGate>
    </Provider>
  </Fragment>
);
