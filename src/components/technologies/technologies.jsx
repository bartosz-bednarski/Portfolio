import classes from "./technologies.module.scss";
const Technologies = () => {
  return (
    <div className={classes.technologies}>
      <div className={classes["technologies__header-container"]}>
        <h1 className={classes["technologies__header-container__one"]}>and</h1>
      </div>
      <div className={classes["technologies__header-container"]}>
        <h1 className={classes["technologies__header-container__two"]}>
          used in my Projects
        </h1>
      </div>
      <div className={classes["technologies__cards"]}>
        <div className={classes["technologies__cards__card"]}>
          <h2 className={classes["technologies__cards__card__header"]}>
            Languages
          </h2>
          <span className={classes["technologies__cards__card__item"]}>
            HTML5
          </span>

          <span className={classes["technologies__cards__card__item"]}>
            JavaScript
          </span>
          <span className={classes["technologies__cards__card__item"]}>
            TypeScript
          </span>

          <div className={classes["technologies__cards__card__image-box"]}>
            <img
              src="/assets/icons/html5.svg"
              alt="HTML-icon"
              className={classes["technologies__cards__card__image-box__img"]}
            />

            <img
              src="/assets/icons/file-type-js-official.svg"
              alt="JS-icon"
              className={classes["technologies__cards__card__image-box__img"]}
            />
            <img
              src="/assets/icons/typescript-icon.svg"
              alt="TS-icon"
              className={classes["technologies__cards__card__image-box__img"]}
            />
          </div>
        </div>

        <div className={classes["technologies__cards__card"]}>
          <h2
            className={classes["technologies__cards__card__header"]}
            style={{}}
          >
            Frameworks
          </h2>

          <span className={classes["technologies__cards__card__item"]}>
            Next.js
          </span>
          <span className={classes["technologies__cards__card__item"]}>
            Express.js
          </span>
          <div className={classes["technologies__cards__card__image-box"]}>
            <img
              src="/assets/icons/next-js.svg"
              alt="NextJs-icon"
              className={classes["technologies__cards__card__image-box__img"]}
            />
            <img
              src="/assets/icons/express.svg"
              alt="
              Express-icon"
              className={classes["technologies__cards__card__image-box__img"]}
            />
          </div>
        </div>
        <div className={classes["technologies__cards__card"]}>
          <h2
            className={classes["technologies__cards__card__header"]}
            style={{}}
          >
            Libraries
          </h2>

          <span className={classes["technologies__cards__card__item"]}>
            React.js
          </span>
          <span className={classes["technologies__cards__card__item"]}>
            jQuery
          </span>

          <div className={classes["technologies__cards__card__image-box"]}>
            <img
              src="/assets/icons/react.svg"
              alt="React-icon"
              className={classes["technologies__cards__card__image-box__img"]}
            />

            <img
              src="/assets/icons/jquery-original-wordmark.svg"
              alt="jquery-icon"
              className={classes["technologies__cards__card__image-box__img"]}
            />
          </div>
        </div>
        <div className={classes["technologies__cards__card"]}>
          <h2 className={classes["technologies__cards__card__header"]}>
            Databases
          </h2>
          <span className={classes["technologies__cards__card__item"]}>
            Google Firebase
          </span>
          <span className={classes["technologies__cards__card__item"]}>
            MongoDB
          </span>
          <span className={classes["technologies__cards__card__item"]}>
            PostgreSQL
          </span>

          <div className={classes["technologies__cards__card__image-box"]}>
            <img
              src="/assets/icons/file-type-firebase.svg"
              alt="Firebase-icon"
              className={classes["technologies__cards__card__image-box__img"]}
            />
            <img
              src="/assets/icons/mongodb-original-wordmark.svg"
              alt="MongoDB-icon"
              className={classes["technologies__cards__card__image-box__img"]}
            />
            <img
              src="/assets/icons/postgresql-plain-wordmark.svg"
              alt="PostgreeSql-icon"
              className={classes["technologies__cards__card__image-box__img"]}
            />
          </div>
        </div>
        <div className={classes["technologies__cards__card"]}>
          <h2 className={classes["technologies__cards__card__header"]}>
            Styling
          </h2>
          <span className={classes["technologies__cards__card__item"]}>
            CSS3
          </span>
          <span className={classes["technologies__cards__card__item"]}>
            Sass
          </span>
          <span className={classes["technologies__cards__card__item"]}>
            Tailwind CSS
          </span>
          <div className={classes["technologies__cards__card__image-box"]}>
            <img
              src="/assets/icons/file-type-css.svg"
              alt="CSS-icon"
              className={classes["technologies__cards__card__image-box__img"]}
            />
            <img
              src="/assets/icons/sass-original.svg"
              alt="SASS-icon"
              className={classes["technologies__cards__card__image-box__img"]}
            />
            <img
              src="/assets/icons/tailwind-css.svg"
              alt="Tailwind-icon"
              className={classes["technologies__cards__card__image-box__img"]}
            />
          </div>
        </div>
        <div className={classes["technologies__cards__card"]}>
          <h2 className={classes["technologies__cards__card__header"]}>
            API & Tools
          </h2>
          <span className={classes["technologies__cards__card__item"]}>
            YouTube Data API v3
          </span>
          <span className={classes["technologies__cards__card__item"]}>
            Redux Toolkit
          </span>
          <span className={classes["technologies__cards__card__item"]}>
            React-router-dom
          </span>
          <span className={classes["technologies__cards__card__item"]}>
            OAuth 2.0
          </span>

          <div className={classes["technologies__cards__card__image-box"]}>
            <img
              src="/assets/icons/youtube.svg"
              alt="Youtube-icon"
              className={classes["technologies__cards__card__image-box__img"]}
            />
            <img
              src="/assets/icons/redux-original.svg"
              alt="Redux-icon"
              className={classes["technologies__cards__card__image-box__img"]}
            />
            <img
              src="/assets/icons/react-router.svg"
              alt="React-router-icon"
              className={classes["technologies__cards__card__image-box__img"]}
            />
            <img
              src="/assets/icons/oauth.svg"
              alt="oauth-icon"
              className={classes["technologies__cards__card__image-box__img"]}
            />
          </div>
        </div>
        <div className={classes["technologies__cards__card"]}>
          <h2 className={classes["technologies__cards__card__header"]}>
            Tools
          </h2>
          <span className={classes["technologies__cards__card__item"]}>
            GitHub
          </span>
          <span className={classes["technologies__cards__card__item"]}>
            GitLab
          </span>
          <span className={classes["technologies__cards__card__item"]}>
            Jira
          </span>

          <div className={classes["technologies__cards__card__image-box"]}>
            <img
              src="/assets/icons/youtube.svg"
              alt="github-icon"
              className={classes["technologies__cards__card__image-box__img"]}
            />
            <img
              src="/assets/icons/gitlab-original-wordmark.svg"
              alt="gitlab-icon"
              className={classes["technologies__cards__card__image-box__img"]}
            />
            <img
              src="/assets/icons/jira.svg"
              alt="jira-icon"
              className={classes["technologies__cards__card__image-box__img"]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Technologies;
