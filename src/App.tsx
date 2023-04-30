import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Header from "./components/Header";
import Home from "./Home";
import NavigationOutlet from "./NavigationOutlet";

function App() {
  return (
    <RecoilRoot>
      <BrowserRouter>
        <Routes>
          <Route element={<NavigationOutlet />}>
            <Route path="/trade" element={<Home />} />
            <Route path="/earn" element={<div></div>} />
            <Route path="/support" element={<div></div>} />
            <Route path="/about" element={<div></div>} />
            <Route path="/*" element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </RecoilRoot>
  );
}

export default App;
