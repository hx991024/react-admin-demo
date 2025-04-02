import { BrowserRouter, Routes, Route } from "react-router";
import Login from "@/pages/Login/login";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
