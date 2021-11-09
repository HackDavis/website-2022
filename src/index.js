import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import store from "./redux/store";
import { Provider } from "react-redux";
import { RecoilRoot, atom, selector, useRecoilState, useRecoilValue } from 'recoil';

ReactDOM.render(
  <Provider store={store}>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </Provider>,
  document.getElementById("root")
);
