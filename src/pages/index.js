import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Home from "@/components/home/home";
import TechnologiesPage from "./technologies";
const HomePage = () => {
  // const router = useRouter();
  // const handleScroll = () => {
  //   const technologiesDiv = document.getElementById("technologies");
  //   const scrollPosition = window.scrollY; // => scroll position
  //   // console.log(technologiesDiv.offsetTop);
  //   if (scrollPosition > technologiesDiv.offsetTop - 100) {
  //     router.push("/technologies");
  //   }
  //   console.log(scrollPosition);
  // };
  // useEffect(() => {
  //   handleScroll();
  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <>
      <Home />
    </>
  );
};
export default HomePage;
