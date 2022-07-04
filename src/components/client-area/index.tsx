import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./header/NavBar";
import SignUp from "./auth/SignUp";
import SignIn from "./auth/SignIn";
import ClientHome from "./ClientHome";

interface ClientAreaProps {}

const ClientArea: React.FC<ClientAreaProps> = () => {
  return (
    <div>
      <Router>
        <header className="">
          <NavBar />
        </header>

        <div className="routes-container">
          <Routes>
            <Route path="/" element={<ClientHome />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<SignIn />} />
          </Routes>
        </div>
        <div className="footer-container"></div>
      </Router>
    </div>
  );
};

export default ClientArea;
