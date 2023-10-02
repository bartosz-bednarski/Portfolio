import classes from "./experience.module.scss";
const Experience = () => {
  return (
    <div className={classes.experience}>
      <div className={classes["experience__header-container"]}>
        <span className={classes["experience__header-container__header"]}>
          experience
        </span>
      </div>
      <div className={classes["experience__cards-container"]}>
        <div
          className={classes["experience__cards-container__cards-box__card"]}
        >
          <span
            className={
              classes["experience__cards-container__cards-box__card__title"]
            }
          >
            <span
              className={
                classes[
                  "experience__cards-container__cards-box__card__title__orange"
                ]
              }
            >
              Junior{" "}
            </span>
            Front End developer
          </span>
          <span
            className={
              classes["experience__cards-container__cards-box__card__time"]
            }
          >
            07.2023 - 09.2023
          </span>
          <span
            className={
              classes["experience__cards-container__cards-box__card__academy"]
            }
          >
            GISON
          </span>
          <span
            className={
              classes["experience__cards-container__cards-box__card__time"]
            }
          >
            Krakow | Poland | Stationary job
          </span>
          <span
            className={
              classes["experience__cards-container__cards-box__card__title"]
            }
          >
            <span
              className={
                classes[
                  "experience__cards-container__cards-box__card__title__orange"
                ]
              }
            >
              Techno
            </span>
            logies
          </span>
          <ul>
            <li>JavaScript | JQuery</li>
            <li>Sass | CSS</li>
            <li>Leaflet</li>
            <li>Git | Gitlab</li>
            <li>Gulp | Npm</li>
            <li>HTML5</li>
            <li>Jira</li>
          </ul>
          <span
            className={
              classes["experience__cards-container__cards-box__card__title"]
            }
          >
            <span
              className={
                classes[
                  "experience__cards-container__cards-box__card__title__orange"
                ]
              }
            >
              Tasks
            </span>
          </span>
          <ul>
            <li>Fixing JavaScript bugs</li>
            <li>RWD</li>
            <li>Implementing scripts into aplication from others projects</li>
            <li>Implementing components with backend cooperation</li>
            <li>Creating online and pdf forms for local governments</li>
            <li>Styling components</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Experience;
