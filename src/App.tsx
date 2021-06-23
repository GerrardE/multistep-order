import { Fragment } from "react";
import { Provider } from "react-redux";
import store from "./application/config/store/store";
import "bootstrap/dist/css/bootstrap.min.css";
import { OrderPage } from "./ui/pages";

const App = (): JSX.Element => (
  <Fragment>
    <Provider store={store}>
        <OrderPage />
    </Provider>
  </Fragment>
);

export default App;
