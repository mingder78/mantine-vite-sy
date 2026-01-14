import React from "react";
import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";
import {
  MantineProvider,
  createTheme,
  type MantineColorsTuple,
} from "@mantine/core";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "@mantine/core/styles.css";

const images = ["/x.jpg", "/y.jpg", "/z.jpg"];

const myColor: MantineColorsTuple = [
  "#ecf4ff",
  "#dce4f5",
  "#b9c7e2",
  "#94a8d0",
  "#748dc0",
  "#5f7cb7",
  "#5474b4",
  "#44639f",
  "#3a5890",
  "#2c4b80",
];

const theme = createTheme({
  colors: {
    myColor,
  },
  primaryColor: "myColor",
});

function A() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // ✅ useEffect must be inside the component
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
      console.log('a')
    }, 5000); // rotate every 5s

    return () => clearInterval(interval);
  }, []);

  return (
    <React.StrictMode>
      <BrowserRouter>
        <MantineProvider theme={theme}>
          {/* Full screen wrapper with background */}
          <div
            style={{
              position: "fixed", // cover entire window
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              backgroundImage: `url(${images[currentIndex]})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              zIndex: -1, // behind all content
              transition: "background-image 1s ease-in-out",
            }}
          />
          <App />
        </MantineProvider>
      </BrowserRouter>
    </React.StrictMode>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(<A />);
