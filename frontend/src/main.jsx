import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "../src/assets/theme/bootstrap.min.css";

import { Provider } from "react-redux";
import { store } from "./store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
