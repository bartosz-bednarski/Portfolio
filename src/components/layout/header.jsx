import { useRouter } from "next/router";
import classes from "./header.module.scss";
import Link from "next/link";
import { useState } from "react";
import useDownloader from "react-use-downloader";
const Header = () => {
  const [showList, setShowList] = useState(false);
  const router = useRouter();
  const { download } = useDownloader();
  const fileUrl = "/assets/Bartosz_Bednarski_CV.pdf";
  const filename = "Bartosz_Bednarski_CV.pdf";
  return (
    <>
      <div className={classes["header"]}>
        <div
          className={
            classes[
              `${showList ? "header__hamburger--active" : "header__hamburger"}`
            ]
          }
        >
          <img
            src="/assets/hamburger.svg"
            alt="hamburger-menu-icon"
            onClick={() => setShowList(!showList)}
          />
          {showList && (
            <>
              <ul className={classes["header__hamburger__list"]}>
                <li
                  className={classes["header__hamburger__list__item"]}
                  onClick={() => setShowList(false)}
                >
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
                <li
                  className={classes["header__hamburger__list__item"]}
                  onClick={() => setShowList(false)}
                >
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
                <li
                  className={classes["header__hamburger__list__item"]}
                  onClick={() => setShowList(false)}
                >
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
                <li
                  className={classes["header__hamburger__list__item"]}
                  onClick={() => setShowList(false)}
                >
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
              <button
                className={classes["header__hamburger__button"]}
                onClick={() => download(fileUrl, filename)}
              >
                <img src="/assets/file-pdf.svg" alt="file-pdf" /> Download CV
              </button>
            </>
          )}
        </div>
        <span className={classes["header__separator"]}></span>
        <ul className={classes["header__list"]}>
          <li className={classes["header__list__item"]}>
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
          <li className={classes["header__list__item"]}>
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
          <li className={classes["header__list__item"]}>
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
          <li className={classes["header__list__item"]}>
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
        <button
          className={classes["header__button"]}
          onClick={() => download(fileUrl, filename)}
        >
          <img src="/assets/file-pdf.svg" alt="file-pdf" /> Download CV
        </button>
      </div>
    </>
  );
};

export default Header;
