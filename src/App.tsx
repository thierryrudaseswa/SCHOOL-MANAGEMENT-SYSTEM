import { Routes, Route } from "react-router-dom";
import LandPage from "./pages/LandPage/LandPage";
import LoginClient from "./pages/LoginClient/LoginClient";
import LoginAdmin from "./pages/LoginAdmin/LoginAdmin";
import DashBoard from "./pages/DashBoard/DashBoard";
import Calendar from "./pages/Calendar/Calendar";
import Chat from "./pages/Chat/Chat.tsx";
import Document from "./pages/Document/Document";
import Events from "./pages/Events/Events";
import Finance3 from "./pages/Finance3/Finance3";
import FinancePa2 from "./pages/Finance2/FinancePa2";
import FinancePa from "./pages/Finance/FinancePa";
import SchoolReg from "./pages/SchoolReg/SchoolReg";
import SignStudent from "./pages/SignClient/SignStudent";



function App() {
  return (
    <div>
 
      <Routes>
        <Route path="/" element={<LandPage />} />

        <Route path="/register" element={<SchoolReg />} />
        <Route path="/registerS" element={<SignStudent />} />

        <Route path="/login" element={<LoginAdmin />} />
        <Route path="/loginUser" element={<LoginClient />} />

        <Route path="/dashboard" element={<DashBoard />} />
        <Route path="/calendar" element={<Calendar />} />

        <Route path="/chat" element={<Chat />} />
        <Route path="/document" element={<Document />} />

        <Route path="/events" element={<Events />} />
        <Route path="/finance3" element={<Finance3 />} />

        <Route path="/financePa2" element={<FinancePa2 />} />
        <Route path="/financePa" element={<FinancePa />} />
      </Routes>
    </div>
  );
}

export default App;
