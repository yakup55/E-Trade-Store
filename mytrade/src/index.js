import React from "react";
import ReactDOM from "react-dom/client";
import App from "./compenents/root/App";
import "bootstrap/dist/css/bootstrap.css";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import configureStore from "./redux/configureStore";
import { AppContextProvider } from "./compenents/context/contextApplication";
import "./App.module.css"
const store = configureStore();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <AppContextProvider>
          <App />
        </AppContextProvider>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
