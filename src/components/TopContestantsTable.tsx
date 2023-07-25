import Link from "next/link";
import React from "react";

const TopContestantsTable = () => {
  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-8">
        <div>
          <h2 className="text-lg font-semibold leading-tight">
            Top candidates
          </h2>
        </div>
        <div className="-mx-4 overflow-x-auto px-4 py-4 sm:-mx-8 sm:px-8">
          <div className="inline-block min-w-full overflow-hidden rounded-lg shadow-md">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-700">
                    Client / Invoice
                  </th>
                  <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-700">
                    Amount
                  </th>
                  <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-700">
                    Issued / Due
                  </th>
                  <th className="border-b-2 border-gray-200 bg-gray-100 px-5 py-3 text-left text-xs font-semibold uppercase tracking-wider text-gray-700">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <div className="flex">
                      <div className="h-10 w-10 flex-shrink-0">
                        <img
                          className="h-full w-full rounded-full"
                          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                          alt=""
                        />
                      </div>
                      <div className="ml-3">
                        <p className="whitespace-no-wrap text-gray-900">
                          Molly Sanders
                        </p>
                        <p className="whitespace-no-wrap text-gray-600">
                          by Temperory
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap text-gray-900">$20,000</p>
                    <p className="whitespace-no-wrap text-gray-600">USD</p>
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap text-gray-900">
                      Sept 28, 2019
                    </p>
                    <p className="whitespace-no-wrap text-gray-600">
                      Due in 3 days
                    </p>
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                      <span
                        aria-hidden
                        className="absolute inset-0 rounded-full bg-green-200 opacity-50"
                      ></span>
                      <span className="relative">Paid</span>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <div className="flex">
                      <div className="h-10 w-10 flex-shrink-0">
                        <img
                          className="h-full w-full rounded-full"
                          src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                          alt=""
                        />
                      </div>
                      <div className="ml-3">
                        <p className="whitespace-no-wrap text-gray-900">
                          Michael Roberts
                        </p>
                        <p className="whitespace-no-wrap text-gray-600">
                          by Eren Yeager
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap text-gray-900">$214,000</p>
                    <p className="whitespace-no-wrap text-gray-600">USD</p>
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap text-gray-900">
                      Sept 25, 2019
                    </p>
                    <p className="whitespace-no-wrap text-gray-600">
                      Due in 6 days
                    </p>
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-green-900">
                      <span
                        aria-hidden
                        className="absolute inset-0 rounded-full bg-green-200 opacity-50"
                      ></span>
                      <span className="relative">Paid</span>
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <div className="flex">
                      <div className="h-10 w-10 flex-shrink-0">
                        <img
                          className="h-full w-full rounded-full"
                          src="https://images.unsplash.com/photo-1540845511934-7721dd7adec3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                          alt=""
                        />
                      </div>
                      <div className="ml-3">
                        <p className="whitespace-no-wrap text-gray-900">
                          Devin Childs
                        </p>
                        <p className="whitespace-no-wrap text-gray-600">
                          by Mikasa
                        </p>
                      </div>
                    </div>
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap text-gray-900">$20,000</p>
                    <p className="whitespace-no-wrap text-gray-600">USD</p>
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <p className="whitespace-no-wrap text-gray-900">
                      Sept 14, 2019
                    </p>
                    <p className="whitespace-no-wrap text-gray-600">
                      Due in 2 weeks
                    </p>
                  </td>
                  <td className="border-b border-gray-200 bg-white px-5 py-5 text-sm">
                    <span className="relative inline-block px-3 py-1 font-semibold leading-tight text-orange-900">
                      <span
                        aria-hidden
                        className="absolute inset-0 rounded-full bg-orange-200 opacity-50"
                      ></span>
                      <span className="relative">Pending</span>
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div>
          <Link href="/asd" className="hover:underline transition duration-75 ease-in">View More</Link>
        </div>
      </div>
    </div>
  );
};

export default TopContestantsTable;
