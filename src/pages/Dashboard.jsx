import React from "react";
import grapes from "../assets/grapes.svg";
import t1 from "../assets/tour1.svg";
import t2 from "../assets/tour2.svg";
import t3 from "../assets/tour3.svg";

const tours = [t1, t2, t3];

export default function Dashboard() {
  return (
    <div className="p-4 sm:p-6 space-y-6">

      {/* Top Banner */}
      <div className="bg-white rounded-xl shadow-sm p-6 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
            News, Updates and Information!
          </h2>

          <p className="text-gray-500 mt-2 max-w-lg text-sm sm:text-base">
            From now on you will find news and information about FEELESTATE here.
          </p>
        </div>

        <img
          src={grapes}
          alt="grapes"
          className="w-32 sm:w-40 lg:w-48 self-center lg:self-auto"
        />
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

        {/* My Tours */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="font-semibold text-lg text-gray-800 mb-5">
              My Tours
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div
                  key={i}
                  className="group bg-gray-50 rounded-xl overflow-hidden border hover:shadow-lg transition-all duration-300"
                >
                  <div
                    className="h-36 bg-cover bg-center"
                    style={{ backgroundImage: `url(${tours[i % 3]})` }}
                  />

                  <div className="p-4">
                    <h4 className="font-semibold text-gray-700 group-hover:text-indigo-600 transition">
                      Tour {i}
                    </h4>

                    <p className="text-sm text-gray-500 mt-1">
                      Click to view details
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* News Section */}
        <aside className="bg-white rounded-xl shadow-sm p-6">
          <div className="flex items-start justify-between">
            <div>
              <h4 className="font-semibold text-lg text-gray-800">News & Updates</h4>
              <p className="text-xs text-gray-400 mt-1">Latest product updates, features and team news — stay in the loop.</p>
            </div>
            <div className="text-right">
              <a href="#" className="text-indigo-600 text-sm hover:underline">See all</a>
            </div>
          </div>

          <ul className="text-sm text-gray-600 mt-4 space-y-4">

            <li className="flex items-start gap-3">
              <div className="flex-shrink-0 mt-1">
                <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-indigo-50 text-indigo-600">AI</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <p className="font-medium text-gray-800">AI Video Maker</p>
                  <span className="text-xs text-gray-400">2 days ago</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">Create MP4 videos from up to 7 images of your 360° tour. (activation required)</p>
                <div className="mt-2 flex items-center gap-3">
                  <a href="#" className="text-indigo-600 text-sm hover:underline">Read more</a>
                  <span className="px-2 py-0.5 text-xs bg-indigo-100 text-indigo-700 rounded">New</span>
                </div>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <div className="flex-shrink-0 mt-1">
                <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-green-50 text-green-600">V</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <p className="font-medium text-gray-800">Visibility Restriction</p>
                  <span className="text-xs text-gray-400">1 week ago</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">Adjust the visible area for your 360° images to focus viewer attention.</p>
                <div className="mt-2 flex items-center gap-3">
                  <a href="#" className="text-indigo-600 text-sm hover:underline">Learn how</a>
                  <span className="px-2 py-0.5 text-xs bg-green-100 text-green-700 rounded">Update</span>
                </div>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <div className="flex-shrink-0 mt-1">
                <span className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-orange-50 text-orange-600">T</span>
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <p className="font-medium text-gray-800">Team Management</p>
                  <span className="text-xs text-gray-400">Mar 20, 2026</span>
                </div>
                <p className="text-xs text-gray-500 mt-1">Create and manage subaccounts for team members. Control access per tour.</p>
                <div className="mt-2 flex items-center gap-3">
                  <a href="#" className="text-indigo-600 text-sm hover:underline">Setup guide</a>
                </div>
              </div>
            </li>

          </ul>

          <div className="border-t pt-4 mt-4">
            <h5 className="text-sm font-medium text-gray-700">Recent Activity</h5>
            <ul className="mt-3 space-y-2 text-xs text-gray-500">
              <li>Johannes published <span className="text-gray-700">Robby Testing</span> — 3 hours ago</li>
              <li>Image uploaded to <span className="text-gray-700">Neue Version</span> — Yesterday</li>
              <li>Tour <span className="text-gray-700">test editor</span> set to public — 2 days ago</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}