import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Products",
    newTab: false,
    submenu: [
      {
        id: 11,
        title: "Realtime Pipelines",
        path: "/blog",
        newTab: false,
      },
      {
        id: 12,
        title: "Lakehouse Storage",
        path: "/blog-sidebar",
        newTab: false,
      },
      {
        id: 13,
        title: "Query API",
        path: "/blog-details",
        newTab: false,
      },
      {
        id: 14,
        title: "Notebook Workspace",
        path: "/blog-sidebar",
        newTab: false,
      },
      {
        id: 15,
        title: "Dashboards",
        path: "/blog-details",
        newTab: false,
      },
    ],
  },
  {
    id: 2,
    title: "Developers",
    newTab: false,
    submenu: [
      {
        id: 21,
        title: "Documentation",
        path: "/blog",
        newTab: false,
      },
      {
        id: 22,
        title: "API Reference",
        path: "/blog-sidebar",
        newTab: false,
      },
      {
        id: 23,
        title: "SDKs",
        path: "/blog-sidebar",
        newTab: false,
      },
      {
        id: 24,
        title: "Examples",
        path: "/blog-details",
        newTab: false,
      },
      {
        id: 25,
        title: "Status Page",
        path: "/error",
        newTab: false,
      },
    ],
  },

  {
    id: 3,
    title: "Pricing",
    path: "/pricing",
    newTab: false,
  },

  {
    id: 4,
    title: "Resources",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Blob",
        path: "/about",
        newTab: false,
      },
      {
        id: 42,
        title: "Architecture",
        path: "/contact",
        newTab: false,
      },
      {
        id: 43,
        title: "Changelog",
        path: "/contact",
        newTab: false,
      },
      {
        id: 44,
        title: "Guides",
        path: "/contact",
        newTab: false,
      },
    ],
  },
  {
    id: 5,
    title: "Company",
    newTab: false,
    submenu: [
      {
        id: 51,
        title: "About",
        path: "/about",
        newTab: false,
      },
      {
        id: 52,
        title: "Roadmap",
        path: "/contact",
        newTab: false,
      },
      {
        id: 53,
        title: "Contact",
        path: "/contact",
        newTab: false,
      },
    ],
  },
];
export default menuData;
