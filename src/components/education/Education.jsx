import classes from "./education.module.scss";
const Education = () => {
  return (
    <div className={classes.education}>
      <div className={classes["education__header-container"]}>
        <span className={classes["education__header-container__header"]}>
          and courses
        </span>
      </div>
      <div className={classes["education__cards-container"]}>
        <div className={classes["education__cards-container__cards-box"]}>
          <span
            className={classes["education__cards-container__cards-box__header"]}
          >
            Education
          </span>
          <div
            className={classes["education__cards-container__cards-box__card"]}
          >
            <span
              className={
                classes["education__cards-container__cards-box__card__title"]
              }
            >
              <span
                className={
                  classes[
                    "education__cards-container__cards-box__card__title__orange"
                  ]
                }
              >
                Master of science{" "}
              </span>
              in Materials Engineering
            </span>
            <span
              className={
                classes["education__cards-container__cards-box__card__time"]
              }
            >
              2021-2022
            </span>
            <span
              className={
                classes["education__cards-container__cards-box__card__academy"]
              }
            >
              Academy of Science and Technology in Krakow
            </span>
          </div>
          <div
            className={classes["education__cards-container__cards-box__card"]}
          >
            <span
              className={
                classes["education__cards-container__cards-box__card__title"]
              }
            >
              <span
                className={
                  classes[
                    "education__cards-container__cards-box__card__title__orange"
                  ]
                }
              >
                Engineer{" "}
              </span>
              in Materials Engineering
            </span>
            <span
              className={
                classes["education__cards-container__cards-box__card__time"]
              }
            >
              2017-2021
            </span>
            <span
              className={
                classes["education__cards-container__cards-box__card__academy"]
              }
            >
              Academy of Science and Technology in Krakow
            </span>
          </div>
          <div
            className={classes["education__cards-container__cards-box__card"]}
          >
            <span
              className={
                classes["education__cards-container__cards-box__card__title"]
              }
            >
              IT
              <span
                className={
                  classes[
                    "education__cards-container__cards-box__card__title__orange"
                  ]
                }
              >
                {" "}
                Technician
              </span>
            </span>
            <span
              className={
                classes["education__cards-container__cards-box__card__time"]
              }
            >
              2013-2017{" "}
            </span>
            <span
              className={
                classes[
                  "education__cards-container__cards-box__card__certificate"
                ]
              }
            >
              <img src="/assets/bx-certification.svg" />
              Certificates: E.12 - E.13 - E.14
            </span>
            <span
              className={
                classes["education__cards-container__cards-box__card__academy"]
              }
            >
              Complex of electric and electronic schools in Radomsko
            </span>
          </div>
        </div>
        <div className={classes["education__cards-container__cards-box"]}>
          <span
            className={classes["education__cards-container__cards-box__header"]}
          >
            Courses
          </span>
          <div
            className={classes["education__cards-container__cards-box__card"]}
          >
            <span
              className={
                classes["education__cards-container__cards-box__card__title"]
              }
            >
              <span
                className={
                  classes[
                    "education__cards-container__cards-box__card__title__orange"
                  ]
                }
              >
                React{" "}
              </span>
              - The Complete Guide
            </span>
            <span
              className={
                classes["education__cards-container__cards-box__card__time"]
              }
            >
              2023{" "}
            </span>
            <a href="https://www.udemy.com/certificate/UC-fad33bee-33e2-4387-930d-6ff6b897abc4/">
              <img src="/assets/bx-certification.svg" />
              Certificate
            </a>
            <span
              className={
                classes["education__cards-container__cards-box__card__academy"]
              }
            >
              Udemy
            </span>
          </div>
          <div
            className={classes["education__cards-container__cards-box__card"]}
          >
            <span
              className={
                classes["education__cards-container__cards-box__card__title"]
              }
            >
              Kurs Tworzenia Stron WWW cz.II -
              <span
                className={
                  classes[
                    "education__cards-container__cards-box__card__title__orange"
                  ]
                }
              >
                {" "}
                SASS, JS, Bootstrap
              </span>
            </span>
            <span
              className={
                classes["education__cards-container__cards-box__card__time"]
              }
            >
              2023{" "}
            </span>{" "}
            <a href="https://www.udemy.com/certificate/UC-75475d09-32d3-431e-bf9a-6f405a05fc54/">
              <img src="/assets/bx-certification.svg" />
              Certificate
            </a>
            <span
              className={
                classes["education__cards-container__cards-box__card__academy"]
              }
            >
              Udemy
            </span>
          </div>
          <div
            className={classes["education__cards-container__cards-box__card"]}
          >
            <span
              className={
                classes["education__cards-container__cards-box__card__title"]
              }
            >
              <span
                className={
                  classes[
                    "education__cards-container__cards-box__card__title__orange"
                  ]
                }
              >
                JavaScript{" "}
              </span>
              - Jedyny Kurs, Którego Potrzebujesz!
            </span>
            <span
              className={
                classes["education__cards-container__cards-box__card__time"]
              }
            >
              2022{" "}
            </span>
            <a href="https://www.udemy.com/certificate/UC-563f24f3-1867-4254-95bf-6d1ec541336b/">
              <img src="/assets/bx-certification.svg" />
              Certificate
            </a>
            <span
              className={
                classes["education__cards-container__cards-box__card__academy"]
              }
            >
              Udemy
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Education;
