import Project from "@/components/projects/project/Project";
import { useRouter } from "next/router";
const ProjectName = {
  atzmDesign: {
    name: "A.T.Ż.M Design",
    mainImg: "/assets/atzm/1.png",
    mainImgMobile: "/assets/atzm/01_mobile.png",
    technologiesList: ["Wordpress", "WooCommerce"],
    icons: ["/assets/icons/wordpress.svg", "/assets/icons/woocommerce.svg"],
    about:
      '"A.T.Ż.M Design" is an online store specializing in the sale of handmade sweaters.',
    aboutList: [
      "The site was created in WordPress with the WooCommerce plugin",
      "WPForms were used for user contact with the store owner and for order data submission.",
      "A responsive design was implemented for all subpages.",
      "Uploaded images and content were optimized to improve site performance.",
      "Available products were configured along with their inventory management.",
      "Online payment methods were added.",
      "Delivery options were added with the ability to select parcel lockers from the supplier's map.",
      "Email message content was configured to inform the customer about the status of their order.",
    ],
    gallery: [
      "/assets/atzm/2.png",
      "/assets/atzm/3.png",
      "/assets/atzm/4.png",
      "/assets/atzm/5.png",
      "/assets/atzm/6.png",
    ],
    mobileGallery: [
      "/assets/atzm/02_mobile.png",
      "/assets/atzm/03_mobile.png",
      "/assets/atzm/04_mobile.png",
      "/assets/atzm/05_mobile.png",
      "/assets/atzm/06_mobile.png",
      "/assets/atzm/07_mobile.png",
    ],
    live: "https://atzmdesign.pl/",
    repo: "https://github.com/bartosz-bednarski",
    type: "desktop",
  },
  ogarnietyBudzet: {
    name: "Ogarnięty Budżet",
    mainImg: "/assets/ogarnietyBudzet/layout.png",
    mainImgMobile: "/assets/ogarnietyBudzet/Screenshot_1709200694.png",
    technologiesList: [
      "React Native",
      "Redux-toolkit",
      "TypeScript",
      "Cypress",
      "Github",
      "Jira",
    ],
    icons: [
      "/assets/icons/react.svg",
      "/assets/icons/redux-original.svg",
      "/assets/icons/typescript-icon.svg",
      "/assets/icons/cypress.svg",
      "/assets/icons/github.svg",
      "/assets/icons/jira.svg",
    ],
    about:
      '"Ogarnięty Budżet" app will allow you to easily manage all your finances. Using the available options, you will take control of your income, expenses, and savings. From now on, not a single coin will slip through your fingers.',
    aboutList: [
      "Configure your own names and choose matching icons, then track your expense and income statements displayed over periods of a week, month, year, and years.",
      "Plan your monthly expenses and monitor their progress in real-time. Additionally, the app will allow you to set financial goals (like saving for a specific purpose).",
      "Add bills or bank accounts and modify them in terms of name and the currency in which you conduct transactions. Over time, as you use the app, you will receive monthly summaries showing how much money you have managed to save in a given month in individual accounts/bank accounts.",
      " The application was created using React Native with TypeScript.",
      "Redux has been used for managing logic.",
      "All entered data is stored in the device's local storage using redux-persist.",
    ],
    gallery: [
      "/assets/ogarnietyBudzet/Screenshot_1709193395.png",
      "/assets/ogarnietyBudzet/Screenshot_1709193457.png",
      "/assets/ogarnietyBudzet/Screenshot_1709200694.png",
      "/assets/ogarnietyBudzet/Screenshot_1709200744.png",
      "/assets/ogarnietyBudzet/Screenshot_1709201027.png",
      "/assets/ogarnietyBudzet/Screenshot_1709201806.png",
      "/assets/ogarnietyBudzet/Screenshot_1709201836.png",
      "/assets/ogarnietyBudzet/Screenshot_1709201849.png",
      "/assets/ogarnietyBudzet/Screenshot_1709202136.png",
    ],
    mobileGallery: [
      "/assets/ogarnietyBudzet/Screenshot_1709193395.png",
      "/assets/ogarnietyBudzet/Screenshot_1709193457.png",
      "/assets/ogarnietyBudzet/Screenshot_1709200694.png",
      "/assets/ogarnietyBudzet/Screenshot_1709200744.png",
      "/assets/ogarnietyBudzet/Screenshot_1709201027.png",
      "/assets/ogarnietyBudzet/Screenshot_1709201806.png",
      "/assets/ogarnietyBudzet/Screenshot_1709201836.png",
      "/assets/ogarnietyBudzet/Screenshot_1709201849.png",
      "/assets/ogarnietyBudzet/Screenshot_1709202136.png",
    ],
    live: "https://play.google.com/store/apps/details?id=com.bartoszBednarski.ogarnietyBudzet&pcampaignid=web_share",
    repo: "https://github.com/bartosz-bednarski/Ogarniety-Budzet",
    type: "mobile",
  },
  geometa: {
    name: "GeoMeta",
    mainImg: "/assets/geometa/01.PNG",
    mainImgMobile: "/assets/geometa/01_mobile.png",
    technologiesList: [
      "React.js",
      "Redux-toolkit",
      "React-router-dom",
      "JavaScript",
      "Sass",
      "Express.js",
      "MongoDB",
      "PostgreSQL",
      "CSS",
      "HTML",
      "Github",
      "Jira",
    ],
    icons: [
      "/assets/icons/react.svg",
      "/assets/icons/redux-original.svg",
      "/assets/icons/react-router.svg",
      "/assets/icons/file-type-js-official.svg",
      "/assets/icons/sass-original.svg",
      "/assets/icons/postgresql-plain-wordmark.svg",
      "/assets/icons/mongodb-original-wordmark.svg",
      "/assets/icons/express.svg",
      "/assets/icons/github.svg",
      "/assets/icons/jira.svg",
    ],
    about: "GeoMeta is an online guide for the browser game Geoguesrr.",
    aboutList: [
      "Frontend written in React.",
      "Backend in the form of a REST API written in Express.",
      "React-router-dom was used to navigate beetwen different pages.",
      "Sass was used for styling.",
      "Express was used to built rest-api to handle authentication/authorization and query data from databases.",
      "MongoDB was used to store forum data.",
      "PostgreSQL was used to store more related data like users, coutries etc.",
      "Home - general information about the website and its content, continents",
      "Continents - a world map with the ability to select a specific continent and view the countries it comprises. Selecting a specific country redirects to a dedicated page containing information about it, which will be expanded through tips for players of the GeoGuessr game.",
      "Forum - a place where logged-in users can create topics with questions and engage in discussions. The option to add responses to topics is also available for non-logged-in users.",
    ],
    gallery: [
      "/assets/geometa/02.PNG",
      "/assets/geometa/03.PNG",
      "/assets/geometa/04.PNG",
      "/assets/geometa/05.PNG",
    ],
    mobileGallery: [
      "/assets/geometa/01_mobile.png",
      "/assets/geometa/02_mobile.png",
      "/assets/geometa/03_mobile.png",
    ],
    live: "https://geo-meta.vercel.app/",
    repo: "https://github.com/bartosz-bednarski/GEOMeta",
    type: "desktop",
  },
  hotel: {
    name: "Hotel",
    mainImg: "/assets/hotel/01.PNG",
    mainImgMobile: "/assets/hotel/01_mobile.png",
    technologiesList: [
      "Next.js",
      "Redux-toolkit",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "CSS",
      "HTML",
      "MongoDB",
      "React-hook-form",
      "React-Calendar",
    ],
    icons: [
      "/assets/icons/html5.svg",
      "/assets/icons/file-type-css.svg",
      "/assets/icons/tailwind-css.svg",
      "/assets/icons/file-type-js-official.svg",
      "/assets/icons/typescript-icon.svg",
      "/assets/icons/next-js.svg",
      "/assets/icons/redux-original.svg",
      "/assets/icons/mongodb-original-wordmark.svg",
    ],
    about:
      "Hotel Project is a hotel website built with Next.js and styled with Tailwind CSS.",
    aboutList: [
      "Website uses Next.js with a built-in router that provides better navigation capabilities.",
      "Some of the components' logic was created using React Redux to achieve cleaner code and store action logic in the Redux store.",
      "Website uses MongoDB to store room data.",
      "The selection of check-in and check-out dates was implemented with react-calendar.",
      "React Hook Form was utilized to validate user forms for booking rooms.",
      "Website was styled with Tailwind CSS.",
    ],
    gallery: [
      "/assets/hotel/02.PNG",
      "/assets/hotel/03.PNG",
      "/assets/hotel/04.PNG",
      "/assets/hotel/05.PNG",
    ],
    mobileGallery: [
      "/assets/hotel/01_mobile.png",
      "/assets/hotel/02_mobile.png",
      "/assets/hotel/03_mobile.png",
    ],
    live: "https://sapphire-palace.vercel.app/",
    repo: "https://github.com/bartosz-bednarski/Hotel-Project",
    type: "desktop",
  },
  "plan-this": {
    name: "Plan.This",
    mainImg: "/assets/plan-this/plan-this.png",
    mainImgMobile: "/assets/plan-this/01_mobile.png",
    technologiesList: [
      "React",
      "React Redux",
      "React Router",
      "JavaScript",
      "CSS",
      "HTML",
      "Google Firebase RealTime Database",
      "Google Firebase Authentication",
      "React-Calendar",
    ],
    icons: [
      "/assets/icons/html5.svg",
      "/assets/icons/file-type-css.svg",
      "/assets/icons/typescript-icon.svg",
      "/assets/icons/react.svg",
      "/assets/icons/redux-original.svg",
      "/assets/icons/react-router.svg",
      "/assets/icons/file-type-firebase.svg",
    ],
    about:
      "Plan.this-Project is a website build with React to set up daily tasks and plan your food menu.",
    aboutList: [
      "Website uses React Router to navigate between routes and helps to protect before unauthorized access to them.",
      "Some of the components logic was created with React Redux to get cleaner code and to store actions logic in Redux store.",
      "Authentication is provided by Google Firebase Authentication.",
      "Website uses Google Firebase RealTime Database to store users data which was committed during the interaction on the page.",
      "Setting date chosen by user is made with use of react calendar, where date is being set up, and gets updated in redux store.",
      "Adding daily meals at food route is possible by writing the recipe manually or picking it from the menu component.",
      "Menu component gives possibility to store meals data and get quick access to them.",
    ],
    gallery: [
      "/assets/plan-this/plan-this-02.PNG",
      "/assets/plan-this/plan-this-03.PNG",
      "/assets/plan-this/plan-this-04.PNG",
      "/assets/plan-this/plan-this-05.PNG",
    ],
    mobileGallery: [
      "/assets/plan-this/01_mobile.png",
      "/assets/plan-this/02_mobile.png",
      "/assets/plan-this/03_mobile.png",
    ],
    live: "https://bartosz-bednarski.github.io/Plan.this-Project/",
    repo: "https://github.com/bartosz-bednarski/Plan.this-Project",
    type: "desktop",
  },
  "paintings-store": {
    name: "Paintings-store",
    mainImg: "/assets/paintings-store/01.PNG",
    mainImgMobile: "/assets/paintings-store/01_mobile.jpg",
    technologiesList: [
      "React",
      "JavaScript",
      "CSS",
      "HTML",
      "Google Firebase API",
    ],
    icons: [
      "/assets/icons/html5.svg",
      "/assets/icons/file-type-css.svg",
      "/assets/icons/file-type-js-official.svg",
      "/assets/icons/react.svg",
      "/assets/icons/file-type-firebase.svg",
    ],
    about:
      "Paintings-store-project is a website build with React, using Google Firebase and JavaScript to update and download data stored at server.",
    aboutList: [
      "Website has simple validation logic to create an account where username and password are stored in Firebase realtime database.",
      "When page starts it connects with database and download paintings data which are filtered and displayed in individual sections of the website.",
      "Logging with login: 'admin1234@gmail.com' and password: '123456' initializes displaying admin component which gives possibility to update paintings to database and view their present list.",
      "After filling all brackets in form and displaying image on drag and drop element we can send image data to the database.",
      "Accept button initializes function which sends blob url to firebase storage and downloads it's url by getStorage() build in function. After that data is being send to the Firebase paintings database and then gets downloaded automaticly to update the present list of database elements.",
    ],
    gallery: [
      "/assets/paintings-store/02.PNG",
      "/assets/paintings-store/03.PNG",
      "/assets/paintings-store/04.PNG",
      "/assets/paintings-store/05.PNG",
    ],
    mobileGallery: [
      "/assets/paintings-store/01_mobile.jpg",
      "/assets/paintings-store/02_mobile.jpg",
      "/assets/paintings-store/03_mobile.jpg",
    ],
    live: "https://bartosz-bednarski.github.io/Paintings-store-project/",
    repo: "https://github.com/bartosz-bednarski/Paintings-store-project",
    type: "desktop",
  },
  youTube: {
    name: "YouTube",
    mainImg: "/assets/youtube/05.png",
    mainImgMobile: "/assets/youtube/01_mobile.jpg",
    technologiesList: [
      "JavaScript",
      "Sass",
      "HTML",
      "OAuth 2.0",
      "YouTube Data API v3",
      "Axios",
    ],
    icons: [
      "/assets/icons/file-type-js-official.svg",
      "/assets/icons/sass-original.svg",
      "/assets/icons/html5.svg",
      "/assets/icons/oauth.svg",
      "/assets/icons/youtube.svg",
    ],
    about:
      "YouTube-Project is a website build on flexbox, using YouTube Data API v3, OAuth 2.0 and JavaScript to filter the incoming data from API.",
    aboutList: [
      "Website uses OAuth 2.0 authorization to let the user log in with google account to take his YouTube channel informations.",
      "When the authorization process is done, website uses obtained acess token to get the informations from server about the youTube channel ID.",
      "Next step is sending the request the list of channels which user subscribes to and display their logos icons at the navigation bar.",
      "Each click of the channel icon at the navigation menu sends a request to server to get the list of the last updates videos of that channel.",
      "Retrieved informations are displayed on the main screen, after filtering them with JavaScript.",
      "Clicking video miniature starts loading YouTube player. Displayed navigation bar is a demonstration version of my youTube channel subscribtions list placed in HTML. If you want to check how the website works with authorization write me on e-mail or linkedIn. In the message you need to place your google e-mail which is connected to your YouTube channel. This gives me a posibility to put you on a testing users list and allow to use the authorization on that website.",
    ],
    gallery: [
      "/assets/youtube/02.png",
      "/assets/youtube/03.png",
      "/assets/youtube/04.png",
      "/assets/youtube/01.png",
    ],
    mobileGallery: [
      "/assets/youtube/01_mobile.jpg",
      "/assets/youtube/02_mobile.jpg",
      "/assets/youtube/03_mobile.jpg",
    ],
    live: "https://bartosz-bednarski.github.io/YouTube-Project/",
    repo: "https://github.com/bartosz-bednarski/YouTube-Project",
    type: "desktop",
  },
  restaurant: {
    name: "Restaurant",
    mainImg: "/assets/restaurant/01.png",
    mainImgMobile: "/assets/restaurant/01_mobile.jpg",
    technologiesList: ["JavaScript", "CSS", "HTML"],
    icons: [
      "/assets/icons/file-type-js-official.svg",
      "/assets/icons/file-type-css.svg",
      "/assets/icons/html5.svg",
    ],
    about:
      "Restaurant-Project is a website build on flexbox, with simple css styling and JavaScript functions.",
    aboutList: [
      "Menu items are displayed dynamically using JavaScript methods.",
      "Menu buttons use the filtering options to display the correct categories of items in menu.",
      "Website has posibility to create an account to get a free delivery bonus.",
      "After loggin in and confirming your order total price will be calculated without delivery price value.",
      "Registration process uses Map() data structure to store user's e-mail adress and password.",
      "Icons used in footer sections were downloaded from : Icon Pack: Social Media | Flat created by Ruslan Babkin - Flaticon",
    ],
    gallery: ["/assets/restaurant/02.png", "/assets/restaurant/03.png"],
    mobileGallery: [
      "/assets/restaurant/01_mobile.jpg",
      "/assets/restaurant/02_mobile.jpg",
      "/assets/restaurant/03_mobile.jpg",
    ],
    live: "https://bartosz-bednarski.github.io/Restaurant-Project/",
    repo: "https://github.com/bartosz-bednarski/Restaurant-Project",
    type: "desktop",
  },
};

const ProjectPage = (props) => {
  // console.log(data);
  return <Project data={props.data} />;
};

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          projectName: "atzmDesign",
        },
      },
      {
        params: {
          projectName: "ogarnietyBudzet",
        },
      },
      {
        params: {
          projectName: "geometa",
        },
      },
      {
        params: {
          projectName: "hotel",
        },
      },
      {
        params: {
          projectName: "plan-this",
        },
      },
      {
        params: {
          projectName: "paintings-store",
        },
      },
      {
        params: {
          projectName: "youTube",
        },
      },
      {
        params: {
          projectName: "restaurant",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  const projectName = context.params.projectName;
  const data = ProjectName[projectName];
  console.log(projectName);
  return {
    props: {
      data: data,
    },
  };
}

export default ProjectPage;
