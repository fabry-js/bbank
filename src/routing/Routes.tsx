import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../pages/authentication/Login";
import Registrazione from "../pages/authentication/Register";
import { Home } from "../pages/Home";

const PageRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/register" element={<Registrazione />}/>
        <Route path="/login" element={<Login />}/>
      </Routes>
    </Router>
  )
}

export default PageRoutes;