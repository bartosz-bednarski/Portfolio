import classes from "./project.module.scss";
const Project = () => {
  return (
    <div className={classes.project}>
      <h1 className={classes["project__title"]}>Plan.This</h1>
      <div className={classes["project__top-container"]}>
        <img
          src="/assets/plan-this.png"
          className={classes["project__top-container__img"]}
        />
        <div className={classes["project__top-container__technologies"]}>
          <h2
            className={classes["project__top-container__technologies__header"]}
          >
            nologies
          </h2>
          <ul className={classes["project__top-container__technologies__list"]}>
            <li>React</li>
            <li>React Redux</li>
            <li>React Router</li>
            <li>JavaScript</li>
            <li>CSS</li>
            <li>HTML</li>
            <li>Google Firebase RealTime Database</li>
            <li>Google Firebase Authentication</li>
            <li>React-Calendar</li>
          </ul>
          <div
            className={
              classes["project__top-container__technologies__button-box"]
            }
          >
            <button
              className={
                classes[
                  "project__top-container__technologies__button-box__button"
                ]
              }
            >
              <img
                src="/assets/github.svg"
                className={
                  classes[
                    "project__top-container__technologies__button-box__button__img"
                  ]
                }
              />
              Live
            </button>
            <button
              className={
                classes[
                  "project__top-container__technologies__button-box__button"
                ]
              }
            >
              <img
                src="/assets/github.svg"
                className={
                  classes[
                    "project__top-container__technologies__button-box__button__img"
                  ]
                }
              />
              Repository
            </button>
          </div>
          <div
            className={classes["project__top-container__technologies__icons"]}
          >
            <img
              src="/assets/html5.svg"
              className={
                classes["project__top-container__technologies__icons__icon"]
              }
            />
            <img
              src="/assets/file-type-css.svg"
              className={
                classes["project__top-container__technologies__icons__icon"]
              }
            />
            <img
              src="/assets/typescript-icon.svg"
              className={
                classes["project__top-container__technologies__icons__icon"]
              }
            />
            <img
              src="/assets/react.svg"
              className={
                classes["project__top-container__technologies__icons__icon"]
              }
            />
            <img
              src="/assets/redux-original.svg"
              className={
                classes["project__top-container__technologies__icons__icon"]
              }
            />
            <img
              src="/assets/react-router.svg"
              className={
                classes["project__top-container__technologies__icons__icon"]
              }
            />
            <img
              src="/assets/file-type-firebase.svg"
              className={
                classes["project__top-container__technologies__icons__icon"]
              }
            />
          </div>
        </div>
      </div>
      <div className={classes["project__bottom-container"]}>
        <h2 className={classes["project__bottom-container__header"]}>
          the project
        </h2>
        <span className={classes["project__bottom-container__about"]}>
          Plan.this-Project is a website build with React to set up daily tasks
          and plan your food menu.
        </span>

        <ul className={classes["project__bottom-container__list"]}>
          <li>
            Website uses React Router to navigate between routes and helps to
            protect before unauthorized access to them.
          </li>
          <li>
            Some of the components logic was created with React Redux to get
            cleaner code and to store actions logic in Redux store.
          </li>
          <li>Authentication is provided by Google Firebase Authentication.</li>
          <li>
            Website uses Google Firebase RealTime Database to store users data
            which was committed during the interaction on the page.
          </li>
          <li>
            Setting date chosen by user is made with use of react calendar,
            where date is being set up, and gets updated in redux store.
          </li>
          <li>
            Adding daily meals at food route is possible by writing the recipe
            manually or picking it from the menu component.
          </li>
          <li>
            Menu component gives possibility to store meals data and get quick
            access to them.
          </li>
        </ul>
      </div>
      <div className={classes["project__gallery-container"]}>
        <img
          src="/assets/plan-this-02.PNG"
          className={classes["project__gallery-container__img"]}
        />
        <img
          src="/assets/plan-this-03.PNG"
          className={classes["project__gallery-container__img"]}
        />
        <img
          src="/assets/plan-this-04.PNG"
          className={classes["project__gallery-container__img"]}
        />
        <img
          src="/assets/plan-this-05.PNG"
          className={classes["project__gallery-container__img"]}
        />
      </div>
    </div>
  );
};
export default Project;
