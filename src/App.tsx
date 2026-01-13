import { AppShell, Burger, Group, NavLink, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useMediaQuery } from '@mantine/hooks';
import { Routes, Route } from "react-router-dom";

import { NavLink as RouterNavLink } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";

export default function App() {
  const [opened, { toggle, close }] = useDisclosure(false);
const isMobile = useMediaQuery('(max-width: 768px)');
  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 220,
        breakpoint: "sm",
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      {/* Header */}
      <AppShell.Header>
        <Group h="100%" px="md">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Text fw={600}>My App</Text>
        </Group>
      </AppShell.Header>

      {/* Sidebar */}
      <AppShell.Navbar p="md">
        <NavLink
          component={RouterNavLink}
          to="/"
          label="Home"
          onClick={() => isMobile && close()}
        />

        <NavLink
          component={RouterNavLink}
          to="/dashboard"
          label="Dashboard"
          onClick={() => isMobile && close()}
        />

        <NavLink
          component={RouterNavLink}
          to="/settings"
          label="Settings"
          onClick={() => isMobile && close()}
        />
      </AppShell.Navbar>

      {/* Main Content */}
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
