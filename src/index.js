import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from "./App";
import { RecoilRoot} from 'recoil';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
    <RecoilRoot>
      <App />
    </RecoilRoot>,
  document.getElementById("root")
);
