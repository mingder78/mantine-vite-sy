import { AppShell, Burger, Group, NavLink, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { Routes, Route } from "react-router-dom";
import { NavLink as MantineNavLink } from "@mantine/core";
import { NavLink as RouterNavLink } from "react-router-dom";
import { useEffect } from "react";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import { useMediaQuery } from "@mantine/hooks";

export default function App() {
  const isMobile = useMediaQuery("(max-width: 768px)");

  console.log("isMobile:", isMobile);

  const [opened, { toggle }] = useDisclosure(false);
  useEffect(() => {
    console.log("Burger opened:", opened);
  }, [opened]);

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
        <MantineNavLink component={RouterNavLink} to="/" label="Home" />

        <MantineNavLink
          component={RouterNavLink}
          to="/dashboard"
          label="Dashboard"
        />

        <MantineNavLink
          component={RouterNavLink}
          to="/settings"
          label="Settings"
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
