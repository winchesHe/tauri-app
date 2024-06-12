import {Route, Routes, useNavigate} from "react-router-dom";

import {NextUIProvider} from "@nextui-org/react";
import "./App.css";
import {IndexPage} from "./pages/IndexPage";

function App() {
  const navigate = useNavigate();
  return (
    <NextUIProvider navigate={navigate}>
      <Routes>
        <Route element={<IndexPage />} path="/" />
      </Routes>
    </NextUIProvider>
  );
}

export default App;
