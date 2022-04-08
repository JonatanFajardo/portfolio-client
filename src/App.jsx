
import Principal from "./pages/principal/Principal";
import Item from "./pages/desarrollo-web/item/Item";

import DesarrolloWeb from "./pages/desarrollo-web/index/DesarrolloWeb";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/app.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/DesarrolloWeb" element={
            <DesarrolloWeb />
          }>
          </Route>
            <Route path="/" element={
              <Principal/>
          }></Route>

            <Route path="/DesarrolloWeb/Item/:id" element={
              <Item/>
          }></Route>

        </Routes>
      </BrowserRouter>
    </>
  );
};
export default App;
