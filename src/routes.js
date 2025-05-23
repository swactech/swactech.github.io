/**
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/** 
  All of the routes for the Material Kit 2 React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Navbar.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `name` key is used for the name of the route on the Navbar.
  2. The `icon` key is used for the icon of the route on the Navbar.
  3. The `collapse` key is used for making a collapsible item on the Navbar that contains other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  4. The `route` key is used to store the route location which is used for the react router.
  5. The `href` key is used to store the external links location.
  6. The `component` key is used to store the component of its route.
  7. The `dropdown` key is used to define that the item should open a dropdown for its collapse items .
  8. The `description` key is used to define the description of
          a route under its name.
  9. The `columns` key is used to define that how the content should look inside the dropdown menu as columns,
          you can set the columns amount based on this key.
  10. The `rowsPerColumn` key is used to define that how many rows should be in a column.
*/

// @mui material components
import Icon from "@mui/material/Icon";

// @mui icons
import GitHubIcon from "@mui/icons-material/GitHub";

// Pages
import HomePage from "layouts/pages/landing-pages/home";
import BlogPage from "layouts/pages/landing-pages/blog";
// import AboutUs from "layouts/pages/landing-pages/about-us";
// import ContactUs from "layouts/pages/landing-pages/contact-us";
// import Author from "layouts/pages/landing-pages/author";
// import SignIn from "layouts/pages/authentication/sign-in";

// // Sections
// import PageHeaders from "layouts/sections/page-sections/page-headers";
// import Features from "layouts/sections/page-sections/featuers";
// import Navbars from "layouts/sections/navigation/navbars";
// import NavTabs from "layouts/sections/navigation/nav-tabs";
// import Pagination from "layouts/sections/navigation/pagination";
// import Inputs from "layouts/sections/input-areas/inputs";
// import Forms from "layouts/sections/input-areas/forms";
// import Alerts from "layouts/sections/attention-catchers/alerts";
// import Modals from "layouts/sections/attention-catchers/modals";
// import TooltipsPopovers from "layouts/sections/attention-catchers/tooltips-popovers";
// import Avatars from "layouts/sections/elements/avatars";
// import Badges from "layouts/sections/elements/badges";
// import BreadcrumbsEl from "layouts/sections/elements/breadcrumbs";
// import Buttons from "layouts/sections/elements/buttons";
// import Dropdowns from "layouts/sections/elements/dropdowns";
// import ProgressBars from "layouts/sections/elements/progress-bars";
// import Toggles from "layouts/sections/elements/toggles";
// import Typography from "layouts/sections/elements/typography";

const routes = [
  {
    name: "home",
    icon: <Icon>dashboard</Icon>,
    component: <HomePage />,
  },
  {
    name: "products & services",
    icon: <Icon>view_day</Icon>,
    collapse: [
      {
        name: "software",
        description: "Get software",
        component: <></>,
      },
      {
        name: "try for school",
        description: "Want one for your school?",
        component: <></>,
      },
      {
        name: "try for business",
        description: "Let's make onboarding exciting",
        component: <></>,
      },
    ],
  },
  {
    name: "blog",
    icon: <Icon>article</Icon>,
    collapse: [
      {
        name: "platform updates and announcements",
        description: "New feature rollouts; roadmap sneak-peeks and beta invites",
        route: "/blog/platform-updates-n-announcements/",
        component: <BlogPage />,
      },
      {
        name: "research & innovation",
        description: "A deep dive on how SWACTech adapts learning styles",
        route: "/blog/research-n-innovation/",
      },
      {
        name: "how-to-guides & tutorials",
        description: "Step-by-step walkthroughs to aid your experience",
        route: "/blog/how-to-guides-n-tutorials/",
      },
      {
        name: "let's talk community",
        description: "Open-question posts; polls to crowdsource feature ideas",
        route: "/blog/lets-talk-community/",
      },
    ],
  },
  {
    name: "github",
    icon: <GitHubIcon />,
    href: "https://github.com/swactech/swactech.github.io.git",
  },
];

export default routes;
