interface iRoute {
  path: string;
  name: string;
}

export const routes: iRoute[] = [
  {
    path: "/student/",
    name: "Home",
  },
  {
    path: "/student/reports",
    name: "Reports",
  },
];
