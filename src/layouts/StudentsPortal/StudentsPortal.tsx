import React, { Fragment } from "react";
import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import _ from "lodash";

interface Props {}

type IRoute = {
  label: string;
  url: string;
};

const routes: IRoute[] = [
  {
    label: "Dashboard",
    url: "/student",
  },
  {
    label: "Create Report",
    url: "/student/create-report",
  },
];

const StudentsPortal = (props: Props) => {
  const { pathname } = useLocation();
  return (
    <Fragment>
      {/* <!-- This example requires Tailwind CSS v2.0+ --> */}

      <div className="min-h-full">
        <Navbar />
        <div className="py-10">
          <header>
            <div className="max-w-7xl flex flex-col lg:flex-row justify-between mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl font-bold leading-tight text-gray-900">
                {_.find(routes, ["url", pathname])?.label}
              </h1>

              <div>
                <Link
                  to="create-report"
                  type="button"
                  className="inline-flex items-center px-6 py-2 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-primary hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  {/* <!-- Heroicon name: solid/mail --> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="-ml-1 mr-3 h-5 w-5"
                    fill="none"
                    // className="h-6 w÷-6"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4v16m8-8H4"
                    />
                  </svg>
                  create an issue
                </Link>
              </div>
            </div>
          </header>
          <main>
            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
              <Outlet />
            </div>
          </main>
        </div>
      </div>
    </Fragment>
  );
};

export default StudentsPortal;
