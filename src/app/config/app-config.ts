
export interface RouteType {
  name: string,
  label: string,
  route: string
  children: Route[]
}

export interface Route {
  name: string,
  label: string,
  route: string
}

export const headerNavLinks: RouteType[] = [
  {
    name: "home",
    label: "Home",
    route: "",
    children: []
  },
  {
    name: "recipes",
    label: "Recipes",
    route: "recipes",
    children: []
  },
  {
    name: "about",
    label: "About",
    route: "about",
    children: []
  },
  {
    name: "products",
    label: "Products",
    route: "products",
    children: []
  }
];

export const footerNavLinks: RouteType[] = [
  {
    name: "privacy",
    label: "Privacy Policy",
    route: "privacy-policy",
    children: []
  },
  {
    name: "cookie",
    label: "Cookie Policy",
    route: "cookie-policy",
    children: []
  },
  {
    name: "contact",
    label: "Contact",
    route: "contact",
    children: []
  },
  {
    name: "faq",
    label: "FAQ",
    route: "faq",
    children: []
  }
];

export class AppConfig {
}
