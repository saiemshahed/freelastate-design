import React from "react";
import { useParams, Link } from "react-router-dom";
import hero from "../assets/tour1.svg";

export default function ProductDetails() {
  const { id } = useParams();

  return (
    <div className="max-w-6xl mx-auto p-4 sm:p-6 space-y-6">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800">
            Tour Details
          </h2>
          <p className="text-gray-500 text-sm">Tour ID: {id}</p>
        </div>

        <Link
          to="/products"
          className="text-sm font-medium text-indigo-600 hover:underline"
        >
          ← Back to Tours
        </Link>
      </div>

      {/* Main Card */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">

        <div className="grid grid-cols-1 lg:grid-cols-3">

          {/* Image Preview */}
          <div className="lg:col-span-2 p-6">
            <div
              className="h-72 sm:h-96 bg-cover bg-center rounded-xl"
              style={{ backgroundImage: `url(${hero})` }}
            />
          </div>

          {/* Details Panel */}
          <div className="border-t lg:border-t-0 lg:border-l p-6 flex flex-col justify-between">

            <div>
              <h3 className="text-lg font-semibold text-gray-800">
                Robby Testing
              </h3>

              <div className="mt-4 space-y-2 text-sm text-gray-600">

                <div className="flex justify-between">
                  <span className="text-gray-500">Objekt ID</span>
                  <span>-</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-500">Ansprechpartner</span>
                  <span>-</span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-500">Created</span>
                  <span>31 Mar 2026</span>
                </div>

              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-6 flex gap-3">

              <button className="flex-1 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg transition">
                Edit Tour
              </button>

              <button className="px-4 py-2 border rounded-lg hover:bg-gray-50 transition">
                Preview
              </button>

            </div>

          </div>
        </div>
      </div>

      {/* Additional Info Section */}
      <div className="bg-white rounded-xl shadow-sm p-6">

        <h4 className="font-semibold text-gray-800 mb-4">
          Tour Information
        </h4>

        <p className="text-sm text-gray-600 leading-relaxed">
          This tour contains the full interactive walkthrough of the property.
          You can edit scenes, add hotspots, or generate AI video previews
          inside the tour editor.
        </p>

      </div>
    </div>
  );
}