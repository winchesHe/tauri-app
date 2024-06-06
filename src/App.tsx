import {Route, Routes} from "react-router-dom";

import "./App.css";
import {IndexPage} from "./pages/IndexPage";

function App() {
  return (
    <Routes>
      <Route element={<IndexPage />} path="/" />
    </Routes>
  );
}

export default App;
