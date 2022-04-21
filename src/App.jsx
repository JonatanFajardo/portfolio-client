import Principal from "./pages/principal/Principal";
import Item from "./pages/desarrollo-web/item/Item";
import SobreMi from "./pages/sobreMi/SobreMi";

import $ from "jquery";

import DesarrolloWeb from "./pages/desarrollo-web/index/DesarrolloWeb";
import DisenoCreativo from "./pages/diseno-creativo/index/DisenoCreativo";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/app.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Principal />}></Route>
          <Route path="/DesarrolloWeb" element={<DesarrolloWeb />}></Route>
          <Route path="/DisenoCreativo" element={<DisenoCreativo />}></Route>
          <Route path="/SobreMi" element={<SobreMi />}></Route>

          <Route path="/DesarrolloWeb/Item/:id" element={<Item />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
