import { useEffect, useState } from "react";
import classes from "./project.module.scss";
const Project = (props) => {
  // useEffect(() => {
  //   setData(props.data);
  // });
  // const [data, setData] = useState(props.data);
  console.log(props.data);
  return (
    <div className={classes.project}>
      <div className={classes["project__title-container"]}>
        <h1 className={classes["project__title-container__title"]}>
          {props.data.name}
        </h1>
      </div>
      <div className={classes["project__top-container"]}>
        <img
          src={props.data.mainImg}
          className={classes["project__top-container__img"]}
        />
        <div className={classes["project__top-container__technologies"]}>
          <h2
            className={classes["project__top-container__technologies__header"]}
          >
            nologies
          </h2>

          <ul className={classes["project__top-container__technologies__list"]}>
            {props.data.technologiesList.map((item) => {
              return <li>{item}</li>;
            })}
          </ul>
          <div
            className={
              classes["project__top-container__technologies__button-box"]
            }
          >
            <a href={props.data.live}>
              <button
                className={
                  classes[
                    "project__top-container__technologies__button-box__button"
                  ]
                }
              >
                <img
                  src="/assets/icons/github.svg"
                  className={
                    classes[
                      "project__top-container__technologies__button-box__button__img"
                    ]
                  }
                />
                Live
              </button>
            </a>
            <a href={props.data.repo}>
              <button
                className={
                  classes[
                    "project__top-container__technologies__button-box__button"
                  ]
                }
              >
                <img
                  src="/assets/icons/github.svg"
                  className={
                    classes[
                      "project__top-container__technologies__button-box__button__img"
                    ]
                  }
                />
                Repository
              </button>
            </a>
          </div>
          <div
            className={classes["project__top-container__technologies__icons"]}
          >
            {props.data.icons.map((item) => (
              <img
                src={item}
                className={
                  classes["project__top-container__technologies__icons__icon"]
                }
              />
            ))}
          </div>
        </div>
      </div>
      <div className={classes["project__bottom-container"]}>
        <h2 className={classes["project__bottom-container__header"]}>
          the project
        </h2>
        <span className={classes["project__bottom-container__about"]}>
          {props.data.about}
        </span>

        <ul className={classes["project__bottom-container__list"]}>
          {props.data.aboutList.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      </div>
      <div className={classes["project__gallery-container"]}>
        {props.data.gallery.map((item) => (
          <img
            src={item}
            className={classes["project__gallery-container__img"]}
          />
        ))}
      </div>
    </div>
  );
};
export default Project;
