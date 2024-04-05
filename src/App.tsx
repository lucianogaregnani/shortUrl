import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import AuthProvider from "./context/AuthProvider";
import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./pages/Dashboard/Dashboard";
import "./index.css";
import Register from "./pages/Register";
import RedirectRoute from "./components/RedirectRoute";
import LinksProvider from "./context/LinksProvider";
import RedirectLink from "./pages/RedirectLink";
import Home from "./pages/Home";

function App() {
  return (
    <AuthProvider>
      <LinksProvider>
        <BrowserRouter>
          <Routes>
            <Route path=":shortLink" element={<RedirectLink />} />
            <Route path="/" element={<Home />} />
            <Route element={<RedirectRoute />}>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Route>
            <Route element={<ProtectedRoute />}>
              <Route path="/dashboard" element={<Dashboard />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </LinksProvider>
    </AuthProvider>
  );
}

export default App;
