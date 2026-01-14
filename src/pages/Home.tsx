import { useState, useEffect } from "react";
import { Center, Text, Box} from "@mantine/core";

const images = ["/x.jpg", "/y.jpg", "/z.jpg"];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // ✅ useEffect must be inside the component
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
      console.log("a");
    }, 5000); // rotate every 5s

    return () => clearInterval(interval);
  }, []);
  return (
    <>
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
      <Center
        h="100vh" // full window height
        w="100%" // IMPORTANT: not 100vw
      >
        <Box
          maw="80%"
          px="xl"
          py="xl"
          mih={260} // 🔹 makes the box higher
          style={{
            display: "inline-flex",
            alignItems: "center", // vertical center text
          }}
        >
          <Text c="white" ta="center">
            — Unfold the sensibility between light and shadow, breathe beneath
            water and air, sink into tranquility and ambience, and wander along
            with architecture and poetry.
          </Text>
        </Box>
      </Center>
    </>
  );
}
