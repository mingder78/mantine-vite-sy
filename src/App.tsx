import { AppShell, Burger, Group, NavLink, Text } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useMediaQuery } from '@mantine/hooks';
import { Routes, Route } from "react-router-dom";

import { NavLink as RouterNavLink } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import Rings from "./pages/Rings";
import WritingBodyMovingStrokes from "./pages/Writing-Body-Moving-Strokes"
import SeedingHerFeet from "./pages/Seeding-Her-Feet"

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
          <Text fw={600}>WANG, SZU-YI  王 思 懿  </Text>
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
          to="/writing-Body-Moving-Strokes"
          label="書寫身體 風動筆畫"
          onClick={() => isMobile && close()}
        />


           <NavLink
          component={RouterNavLink}
          to="/seeding-Her-Feet"
          label="Seeding Her Feet"
          onClick={() => isMobile && close()}
        />
                <NavLink
          component={RouterNavLink}
          to="/Rings"
          label="Rings"
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
        
          <Route path="/writing-Body-Moving-Strokes" element={<WritingBodyMovingStrokes />} />
            <Route path="/seeding-Her-Feet" element={<SeedingHerFeet />} />
            <Route path="/rings" element={<Rings />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </AppShell.Main>
    </AppShell>
  );
}
