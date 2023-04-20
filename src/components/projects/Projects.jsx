import { useRouter } from "next/router";
import classes from "./projects.module.scss";

const projects = [
  {
    name: "Plan.This",
    id: "plan-this",
    mainImg: "/assets/plan-this/plan-this.png",
    icons: [
      "/assets/icons/html5.svg",
      "/assets/icons/file-type-css.svg",
      "/assets/icons/typescript-icon.svg",
      "/assets/icons/react.svg",
      "/assets/icons/redux-original.svg",
      "/assets/icons/react-router.svg",
      "/assets/icons/file-type-firebase.svg",
    ],
    start: "02.02.2023",
    live: "04.03.2023",
  },
  {
    name: "Paintings-store",
    id: "paintings-store",
    mainImg: "/assets/paintings-store/01.PNG",
    icons: [
      "/assets/icons/html5.svg",
      "/assets/icons/file-type-css.svg",
      "/assets/icons/file-type-js-official.svg",
      "/assets/icons/react.svg",
      "/assets/icons/file-type-firebase.svg",
    ],
    start: "23.01.2023",
    live: "14.02.2023",
  },
  {
    name: "Youtube",
    id: "youTube",
    mainImg: "/assets/youtube/05.png",
    icons: [
      "/assets/icons/file-type-js-official.svg",
      "/assets/icons/sass-original.svg",
      "/assets/icons/html5.svg",
      "/assets/icons/oauth.svg",
      "/assets/icons/youtube.svg",
    ],
    start: "04.11.2022",
    live: "16.11.2022",
  },
  {
    name: "Restaurant",
    id: "restaurant",
    mainImg: "/assets/restaurant/01.png",
    icons: [
      "/assets/icons/file-type-js-official.svg",
      "/assets/icons/file-type-css.svg",
      "/assets/icons/html5.svg",
    ],
    start: "06.10.2022",
    live: "07.11.2022",
  },
];

const Projects = () => {
  const router = useRouter();
  return (
    <div className={classes.projects}>
      <div className={classes["projects__header-box"]}>
        <h1 className={classes["projects__header-box__title"]}>Projects</h1>
      </div>
      {projects.map((item) => {
        return (
          <div className={classes["projects__project"]}>
            <img
              src={item.mainImg}
              className={classes["projects__project__img"]}
            />
            <div className={classes["projects__project__details"]}>
              <span className={classes["projects__project__details__title"]}>
                {item.name} Project
              </span>
              <span className={classes["projects__project__details__timeline"]}>
                Starting Project Date: {item.start}
              </span>
              <span className={classes["projects__project__details__timeline"]}>
                Page Live: {item.live}
              </span>
              <button
                className={classes["projects__project__details__button"]}
                onClick={() => {
                  router.push(`/projects/${item.id}`);
                }}
              >
                View more details
              </button>
              <div className={classes["projects__project__details__icons"]}>
                {item.icons.map((icon) => {
                  return (
                    <img
                      src={icon}
                      className={
                        classes["projects__project__details__icons__item"]
                      }
                    />
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Projects;
