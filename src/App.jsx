import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth } from "@/layouts";
import Landing from "./pages/landing/Landing";

function App() {
  return (
    <Routes>
      {/* <Route path="/home" element={<Landing/>}/> */}
      <Route path="/auth/*" element={<Auth />} />
      <Route path="/dashboard/*" element={<Dashboard />} />
      <Route path="*" element={<Navigate to="/home" replace />} />
    </Routes>
  );
}

export default App;
