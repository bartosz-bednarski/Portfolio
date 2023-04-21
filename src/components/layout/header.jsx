import { useRouter } from "next/router";
import classes from "./header.module.scss";
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
        <li>
          <Link legacyBehavior href="/projects">
            <a
              className={
                router.pathname == "/projects"
                  ? classes["link__active"]
                  : classes["link__disactive"]
              }
            >
              Projects
            </a>
          </Link>
        </li>
        <li>
          <Link legacyBehavior href="/education">
            <a
              className={
                router.pathname == "/education"
                  ? classes["link__active"]
                  : classes["link__disactive"]
              }
            >
              Education
            </a>
          </Link>
        </li>
      </ul>
      <button>Download CV</button>
    </div>
  );
};

export default Header;
