import { useContext } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Dashboard } from "../dashboard/Dashboard";
import Login from "../pages/authentication/Login";
import Registrazione from "../pages/authentication/Register";
import { Home } from "../pages/Home";
import { UserContext } from "../providers/GAuthProvider";

const PageRoutes = () => {
  const { actualUser } = useContext(UserContext)
  return (
    <Router>
      <Routes>
        <Route path="/" element={actualUser ? <Dashboard /> : <Home />}/>
        <Route path="/register" element={<Registrazione />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  )
}

export default PageRoutes;