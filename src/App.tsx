import React from "react";
import { Route, Routes } from "react-router-dom";
import Auth from "./layouts/Auth/Auth";
import LecturersPortal from "./layouts/LecturersPortal/LecturersPortal";
import StudentsPortal from "./layouts/StudentsPortal/StudentsPortal";
import Dashboard from "./pages/Dashboard/Dashboard";
import Reports from "./pages/Reports/Reports";

interface Props {}

const App = (props: Props) => {
  return (
    <div className="h-screen">
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/student" element={<StudentsPortal />}>
          <Route index element={<Dashboard />} />
          <Route path="reports" element={<Reports />} />
        </Route>
        <Route path="/lecturer" element={<LecturersPortal />}>
          <Route index element={<Dashboard />} />
          <Route path="reports" element={<Reports />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
