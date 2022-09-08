import type { NextPage } from "next";
import NavBar from "../components/nav-bar";
import { Box } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react"
import LandingHome from "../components/landing-homescreen";
const Landing: NextPage = () => {
  return (
    <>
      <NavBar />
      <LandingHome />
      
    </>
  );
};

export default Landing;
