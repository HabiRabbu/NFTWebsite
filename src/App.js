import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Overview from "./components/Overview";
import Specifics from "./components/Specifics";
import Roadmap from "./components/Roadmap";
import Footer from "./components/Footer";


export default function App() {
  return (
    <main className="text-green-800 bg-white font-Varela">
        <Navbar />
        <About />
        <Overview />
        <Specifics />
        <Roadmap />
        <Footer />
    </main>
  );
}
 