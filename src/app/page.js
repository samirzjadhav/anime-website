import Image from "next/image";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Anime from "./components/Anime";

export default function App() {
  return (
    <body>
      <Navbar />
      <Home />
      <Anime />
    </body>
  );
}
