import { AppShell, NavLink } from "@mantine/core";
import { Routes, Route, useNavigate } from "react-router-dom";
import { NavLink as MantineNavLink } from "@mantine/core";
import { NavLink as RouterNavLink } from "react-router-dom";

<MantineNavLink component={RouterNavLink} to="/dashboard" label="Dashboard" />;

import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";

export default function App() {
  const navigate = useNavigate();

  return (
    <AppShell
      navbar={{
        width: 220,
        breakpoint: "sm",
      }}
    >
      <AppShell.Navbar p="md">
        <NavLink label="Home" onClick={() => navigate("/")} />

        <MantineNavLink
          component={RouterNavLink}
          to="/dashboard"
          label="Dashboard"
        />

        <NavLink label="Settings" onClick={() => navigate("/settings")} />
      </AppShell.Navbar>

      <AppShell.Main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </AppShell.Main>
    </AppShell>
  );
}
