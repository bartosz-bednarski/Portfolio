import classes from "../../src/scss/header.module.scss";
const Header = () => {
  return (
    <div className={classes["header-container"]}>
      <span></span>
      <ul>
        <li>Home</li>
        <li>Technologies</li>
        <li>Projects</li>
        <li>Education</li>
      </ul>
      <button>Download CV</button>
    </div>
  );
};

export default Header;
