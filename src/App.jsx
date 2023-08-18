import * as React from "react";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import DashboardPage from "./pages/DashboardPage";
import Error from "./pages/Error";
import FetchProvider from "./utils/context/fetchContext";
import Home from "./pages/Home";

export default function App() {
  return (
    <React.StrictMode>
      <FetchProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="dashboard/12"
              element={<DashboardPage userId="12" />}
            />
            <Route
              path="dashboard/18"
              element={<DashboardPage userId="18" />}
            />
            <Route path="/*" element={<Error />} />
          </Routes>
        </Router>
      </FetchProvider>
    </React.StrictMode>
  );
}
