import { useRouter } from "next/router";
import classes from "../../src/scss/header.module.scss";
import Link from "next/link";
const Header = () => {
  const router = useRouter();
  return (
    <div className={classes["header-container"]}>
      <span></span>
      <ul>
        <li>
          <Link legacyBehavior href="/">
            <a
              className={
                router.pathname == "/"
                  ? classes["link__active"]
                  : classes["link__disactive"]
              }
            >
              Home
            </a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="/technologies">
            <a
              className={
                router.pathname == "/technologies"
                  ? classes["link__active"]
                  : classes["link__disactive"]
              }
            >
              Technologies
            </a>
          </Link>
        </li>
        <li>Projects</li>
        <li>Education</li>
      </ul>
      <button>Download CV</button>
    </div>
  );
};

export default Header;
