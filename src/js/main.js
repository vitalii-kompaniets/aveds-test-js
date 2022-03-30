import homePage from "./pages/homePage";
import profilePage from "./pages/profilePage";
import contactsPage from "./pages/contactsPage";
import "../css/main.css";

const routes = [
  { path: "/", component: homePage },
  { path: "profile", component: profilePage },
  { path: "contacts", component: contactsPage },
];

function findComponentByPath(path, routes) {
  return routes.find((route) => {
    return route.path === path;
  });
}

function router() {
  const pathArray = location.hash.split("/");

  let currentPath = pathArray[0] === "" ? "/" : pathArray[1];
  currentPath = currentPath === "" ? "/" : currentPath;

  const { component = errorPage } =
    findComponentByPath(currentPath, routes) || {};

  component();
}

window.addEventListener("hashchange", router);
window.addEventListener("load", router);
