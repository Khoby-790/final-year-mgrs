import React from "react";
import { Link } from "react-router-dom";

interface Props {}

const Dashboard = (props: Props) => {
  return (
    <>
      {/* <!-- Replace with your content --> */}
      <div className="px-4 py-8 sm:px-0">
        <div>
          <h3 className="text-lg leading-6 font-medium text-gray-900">
            Reports
          </h3>
          <dl className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3">
            <div className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
              <dt className="text-sm font-medium text-gray-500 truncate">
                Total Reports
              </dt>
              <dd className="mt-1 text-3xl font-semibold text-gray-900">
                71,897
              </dd>
            </div>

            <div className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
              <dt className="text-sm font-medium text-gray-500 truncate">
                Completed Reports
              </dt>
              <dd className="mt-1 text-3xl font-semibold text-gray-900">
                58.16%
              </dd>
            </div>

            <div className="px-4 py-5 bg-white shadow rounded-lg overflow-hidden sm:p-6">
              <dt className="text-sm font-medium text-gray-500 truncate">
                Reports In-progress
              </dt>
              <dd className="mt-1 text-3xl font-semibold text-gray-900">
                24.57%
              </dd>
            </div>
          </dl>
        </div>
      </div>
      {/* <!-- /End replace --> */}

      <div className="px-4 py-8 sm:px-0">
        {/* <!-- This example requires Tailwind CSS v2.0+ --> */}
        <div className="flex flex-col">
          <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
              <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        #
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Course Title
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Course Code
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Lecturer
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        Year of Exams
                      </th>
                      <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Edit</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    <tr>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        1
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Compilers
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        CSCD 412
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        Mr. Soli
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        2019
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <Link
                          to="/student"
                          className="text-indigo-600 hover:text-indigo-900"
                        >
                          view progress
                        </Link>
                      </td>
                    </tr>

                    {/* <!-- More people... --> */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
