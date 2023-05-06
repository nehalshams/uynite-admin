import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth } from "@/layouts";
import Landing from "./pages/landing/Landing";
import { SignIn } from "./pages/auth";

function App() {
  return (
    <Routes>
      {/* <Route path="/home" element={<Landing/>}/> */}
      <Route path="/auth" element={<SignIn />} />
      <Route path="/dashboard/*" element={<Dashboard />} />
      <Route path="*" element={<Navigate to="/auth" replace />} />
    </Routes>
  );
}

export default App;
