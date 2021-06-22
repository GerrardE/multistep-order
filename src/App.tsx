import { Fragment } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./application/config/store/store";
import "bootstrap/dist/css/bootstrap.min.css";
import { OrderPage } from "./ui/pages";

const App = (): JSX.Element => (
  <Fragment>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <OrderPage />
      </PersistGate>
    </Provider>
  </Fragment>
);

export default App;
