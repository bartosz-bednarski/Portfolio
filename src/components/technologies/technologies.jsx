import classes from "./technologies.module.scss";
const Technologies = () => {
  return (
    <div className={classes.technologies}>
      <h1 className={classes["technologies__header__one"]}>and</h1>
      <h1 className={classes["technologies__header__two"]}>
        used in my Projects
      </h1>
      <main className={classes["technologies__main"]}>
        <div className={classes["main__col__one"]}>
          <span className={classes["main__col_item"]}>
            <img src="/assets/html5.svg" />
            HTML5
          </span>
          <span className={classes["main__col_item"]}>
            <img src="/assets/file-type-css.svg" />
            CSS3
          </span>
          <span className={classes["main__col_item"]}>
            <img src="/assets/file-type-js-official.svg" />
            JavaScript
          </span>
          <span className={classes["main__col_item"]}>
            <img src="/assets/typescript-icon.svg" />
            TypeScript
          </span>
          <span className={classes["main__col_item"]}>
            <img src="/assets/sass-original.svg" />
            Sass
          </span>
        </div>
        <div className={classes["main__col__two"]}>
          <span className={classes["main__col_item"]}>
            <img src="/assets/react.svg" />
            React.js
          </span>
          <span className={classes["main__col_item"]}>
            <img src="/assets/redux-original.svg" />
            Redux.js
          </span>
          <span className={classes["main__col_item"]}>
            <img src="/assets/react-router.svg" />
            React Router
          </span>
          <span className={classes["main__col_item"]}>
            <img src="/assets/next-js.svg" />
            Next.Js
          </span>
        </div>
        <div className={classes["main__col__three"]}>
          <span className={classes["main__col_item"]}>
            <img src="/assets/file-type-firebase.svg" />
            Google Firebase
          </span>
          <span className={classes["main__col_item"]}>
            <img src="/assets/youtube.svg" />
            YouTube Data API v3
          </span>
          <span className={classes["main__col_item"]}>
            <img src="/assets/oauth.svg" />
            Oauth 2.0
          </span>
          <span className={classes["main__col_item"]}>
            <img src="/assets/git.svg" />
            GIT
          </span>
        </div>
      </main>
    </div>
  );
};
export default Technologies;
