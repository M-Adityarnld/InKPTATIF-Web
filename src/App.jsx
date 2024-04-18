import { Routes, Route, Navigate } from 'react-router-dom';
import NavbarComponen from './Components/NavbarComponen';
import FooterComponen from './Components/FooterComponen';
import LoginPage from './Pages/LoginPage';
import HomePage from './Pages/HomePage';
import InputKP from './Pages/InputKP';
import InputTA from './Pages/InputTA';
import DetailKP from './Pages/DetailKP';
import DetailTA from './Pages/DetailTA';
import ForgotPW from './Pages/ForgotPW';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/LoginPage" />} />
      <Route path="/ForgotPW" element={<ForgotPW />} />
      <Route path="/LoginPage" element={<LoginPage />} />
      <Route path="/*" element={<ProtectedRoutes />} />
    </Routes>
  );
}

function ProtectedRoutes() {
  return (
    <div>
      <NavbarComponen />
      <Routes>
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/InputTA" element={<InputTA />} />
        <Route path="/InputKP" element={<InputKP />} />
        <Route path="/DetailKP" element={<DetailKP />} />
        <Route path="/DetailTA" element={<DetailTA />} />
      </Routes>

      <FooterComponen/>
    </div>
  );
}

export default App;
