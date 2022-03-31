import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./css/reset.css";
import "./css/style.css";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import TodayPage from "./components/TodayPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/cadastro" element={<SignupPage />} />
        <Route path="/hoje" element={<TodayPage />} />
      </Routes>
    </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.querySelector(".root"));
