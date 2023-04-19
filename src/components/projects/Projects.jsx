import { useRouter } from "next/router";
import classes from "./projects.module.scss";
const PLAN_THIS = {
  name: "Plan.This",
  mainImg: "/assets/plan-this.png",
  technologiesList: [
    "React",
    "React Redux",
    "React Router",
    "JavaScript",
    "CSS",
    "HTML",
    "Google Firebase RealTime Database",
    "Google Firebase Authentication",
    "React-Calendar",
  ],
  icons: [
    "/assets/html5.svg",
    "/assets/file-type-css.svg",
    "/assets/typescript-icon.svg",
    "/assets/react.svg",
    "/assets/redux-original.svg",
    "/assets/react-router.svg",
    "/assets/file-type-firebase.svg",
  ],
  about:
    "Plan.this-Project is a website build with React to set up daily tasks and plan your food menu.",
  aboutList: [
    "Website uses React Router to navigate between routes and helps to protect before unauthorized access to them.",
    "Some of the components logic was created with React Redux to get cleaner code and to store actions logic in Redux store.",
    "Authentication is provided by Google Firebase Authentication.",
    "Website uses Google Firebase RealTime Database to store users data which was committed during the interaction on the page.",
    "Setting date chosen by user is made with use of react calendar, where date is being set up, and gets updated in redux store.",
    "Adding daily meals at food route is possible by writing the recipe manually or picking it from the menu component.",
    "Menu component gives possibility to store meals data and get quick access to them.",
  ],
};
const Projects = () => {
  const router = useRouter();
  const planThisHandler = () => {
    router.push("/projects/plan-this");
  };
  return (
    <div className={classes.projects}>
      <h1 className={classes["projects__title"]}>Projects</h1>
      <div className={classes["projects__project"]}>
        <img
          src="/assets/plan-this.png"
          className={classes["projects__project__img"]}
        />
        <div className={classes["projects__project__details"]}>
          <span className={classes["projects__project__details__title"]}>
            Plan.This Project
          </span>
          <span className={classes["projects__project__details__timeline"]}>
            Starting Project Date: 02.02.2023
          </span>
          <span className={classes["projects__project__details__timeline"]}>
            Page Live: 04.03.2023
          </span>
          <button
            className={classes["projects__project__details__button"]}
            onClick={planThisHandler}
          >
            View more details
          </button>
          <div className={classes["projects__project__details__icons"]}>
            <img
              src="/assets/html5.svg"
              className={classes["projects__project__details__icons__item"]}
            />
            <img
              src="/assets/file-type-css.svg"
              className={classes["projects__project__details__icons__item"]}
            />
            <img
              src="/assets/typescript-icon.svg"
              className={classes["projects__project__details__icons__item"]}
            />
            <img
              src="/assets/react.svg"
              className={classes["projects__project__details__icons__item"]}
            />
            <img
              src="/assets/redux-original.svg"
              className={classes["projects__project__details__icons__item"]}
            />
            <img
              src="/assets/react-router.svg"
              className={classes["projects__project__details__icons__item"]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Projects;
