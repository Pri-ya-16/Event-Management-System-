
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Sidebar from "./components/Sidebar";

import Dashboard from "./pages/Dashboard";
import Guests from "./pages/Guests";
import Events from "./pages/Events";
import AddEvent from "./pages/AddEvent";
import Login from "./pages/Login";
import Department from "./pages/Department";

function Layout() {
  const location = useLocation();

  const hideSidebar = location.pathname === "/login";

  return (
    <div className="flex">

      {!hideSidebar && <Sidebar />}

      <div
        className={
          hideSidebar
            ? "w-full"
            : "flex-1 bg-gray-100 min-h-screen"
        }
      >

        <Routes>

          <Route path="/login" element={<Login />} />

          <Route path="/" element={<Dashboard />} />

          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/events" element={<Events />} />

          <Route path="/guests" element={<Guests />} />

          <Route path="/add-event" element={<AddEvent />} />

          <Route
            path="/department/:name"
            element={<Department />}
          />

        </Routes>

      </div>

    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Layout />
    </BrowserRouter>
  );
}

export default App;

