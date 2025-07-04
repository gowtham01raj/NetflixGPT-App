import ReactDOM from "react-dom/client";
import { StrictMode } from "react";
import "./App.css";
import Body from "./components/Body";
import { Provider } from "react-redux";
import store from "./Utils/store";

const App = () => {
  return (
    <Provider store={store}>
      <Body />
    </Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
