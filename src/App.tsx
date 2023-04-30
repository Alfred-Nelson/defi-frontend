import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import NavigationOutlet from "./NavigationOutlet";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<NavigationOutlet />}>
          <Route path="/trade" element={<div></div>} />
          <Route path="/earn" element={<div></div>} />
          <Route path="/support" element={<div></div>} />
          <Route path="/about" element={<div></div>} />
          <Route path="/*" element={<div></div>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
