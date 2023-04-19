import classes from "./technologies.module.scss";
const Technologies = () => {
  return (
    <div className={classes.technologies}>
      <h1 className={classes["technologies__header__one"]}>and</h1>

      <h1 className={classes["technologies__header__two"]}>
        used in my Projects
      </h1>

      <main className={classes["technologies__main"]}>
        <div className={classes["main__col-1"]}>
          <h2>Languages</h2>
          <span className={classes["main__col_item"]}>HTML5</span>

          <span className={classes["main__col_item"]}>JavaScript</span>
          <span className={classes["main__col_item"]}>TypeScript</span>

          <div className={classes["main__col__image-box"]}>
            <img src="/assets/html5.svg" />

            <img src="/assets/file-type-js-official.svg" />
            <img src="/assets/typescript-icon.svg" />
          </div>
        </div>
        <div className={classes["main__col-2"]}>
          <h2>Styling</h2>
          <span className={classes["main__col_item"]}>CSS3</span>
          <span className={classes["main__col_item"]}>Sass</span>
          <div className={classes["main__col__image-box"]}>
            <img src="/assets/file-type-css.svg" />
            <img src="/assets/sass-original.svg" />
          </div>
        </div>
        <div className={classes["main__col-3"]}>
          <h2>Frameworks</h2>
          <span className={classes["main__col_item"]}>React.js</span>
          <span className={classes["main__col_item"]}>Redux.js</span>
          <span className={classes["main__col_item"]}>React Router</span>
          <span className={classes["main__col_item"]}>Next.Js</span>
          <div className={classes["main__col__image-box"]}>
            <img src="/assets/react.svg" />
            <img src="/assets/redux-original.svg" />
            <img src="/assets/react-router.svg" />
            <img src="/assets/next-js.svg" />
          </div>
        </div>
        <div className={classes["main__col-4"]}>
          <h2>API & other</h2>
          <span className={classes["main__col_item"]}>Google Firebase</span>
          <span className={classes["main__col_item"]}>YouTube Data API v3</span>
          <span className={classes["main__col_item"]}>Oauth 2.0</span>
          <span className={classes["main__col_item"]}>GIT</span>
          <div className={classes["main__col__image-box"]}>
            <img src="/assets/file-type-firebase.svg" />
            <img src="/assets/youtube.svg" />
            <img src="/assets/oauth.svg" />
            <img src="/assets/git.svg" />
          </div>
        </div>
      </main>
    </div>
  );
};
export default Technologies;
