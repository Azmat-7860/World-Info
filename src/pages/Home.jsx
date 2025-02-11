import React from "react";
import { Link } from "react-router-dom";

import Hero from "../component/Hero";
import About from "./About";

function Home() {
  return <>
  <Hero/>
  <About/>
  </>
}

export default Home;
