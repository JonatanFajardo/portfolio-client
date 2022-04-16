
// import "fontawesome-icons/css/all.css";
import ReactDOM  from "react-dom";
import React from "react";
import App from "./App";
// import SimpleReactLightbox from 'simple-react-lightbox'
import 'medium-zoom'

ReactDOM.render(
  <React.StrictMode>
    {/* <SimpleReactLightbox> */}
      <App />
    {/* </SimpleReactLightbox> */}
  </React.StrictMode>,
  document.getElementById("root")
);
