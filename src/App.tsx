import { Fragment } from "react";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import store from "./application/config/store/store";
import "bootstrap/dist/css/bootstrap.min.css";
import { OrderPage } from "./ui/pages";

const App = (): JSX.Element => (
  <Fragment>
    <Toaster position="top-right" reverseOrder />
    <Provider store={store}>
        <OrderPage />
    </Provider>
  </Fragment>
);

export default App;
