import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

import Quiz from "./pages/Quiz";
import MockInterview from "./pages/MockInterview";
import ResumeBuilder from "./pages/ResumeBuilder";
import ProgressTracking from "./pages/ProgressTracking";
import Instructions from "./pages/Instructions";
import Contact from "./pages/Contact";
import Feedback from "./pages/Feedback";
import DailyChallenge from "./pages/DailyChallenge";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
         <Route path="/quiz" element={<Quiz />} />
         <Route path="/mock-interview" element={<MockInterview />} />
         <Route path="/resume-builder" element={<ResumeBuilder />} />
         <Route path="/daily-challenge" element={<DailyChallenge />} />
         <Route path="/progress" element={<ProgressTracking />} />
         <Route path="/instructions" element={<Instructions />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/feedback" element={<Feedback />} />
      </Routes>
    </BrowserRouter>
  );
}










export default App;