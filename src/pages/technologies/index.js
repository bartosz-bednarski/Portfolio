import Technologies from "../../components/technologies/technologies";
import Home from "../../components/home/home";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
const TechnologiesPage = () => {
  // const router = useRouter();
  // const handleScroll = () => {
  //   const scrollPosition = window.scrollY; // => scroll position
  //   if (scrollPosition < 50) {
  //     router.push(
  //       {
  //         pathname: "/",
  //         query: { ...router.query },
  //       },
  //       undefined,
  //       { scroll: false }
  //     );
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
      <Technologies />
    </>
  );
};
export default TechnologiesPage;
