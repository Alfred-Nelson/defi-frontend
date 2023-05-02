import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Header from "./components/Header";
import Home from "./Home";
import NavigationOutlet from "./NavigationOutlet";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <RecoilRoot>
      <ToastContainer
        position="bottom-left"
        theme="colored"
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        rtl={false}
      />
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
