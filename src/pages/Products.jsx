import React from "react";
import { Link } from "react-router-dom";

import t1 from "../assets/tour1.svg";
import t2 from "../assets/tour2.svg";
import t3 from "../assets/tour3.svg";

const imgs = [t1, t2, t3];

const items = Array.from({ length: 9 }).map((_, i) => ({
  id: i + 1,
  title: ["Robby Testing", "Neue Version", "test editor", "Gewoba Hollergrund"][i % 4],
  img: imgs[i % 3],
}));

export default function Products() {
  return (
    <div className="p-4 sm:p-6">

      {/* Page Title */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Meine Touren
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">

        {/* Create Tour Card */}
        <div className="group border-2 border-dashed rounded-xl flex items-center justify-center bg-white hover:border-orange-400 hover:bg-orange-50 transition cursor-pointer min-h-[200px]">

          <div className="text-center text-orange-500">

            <div className="text-4xl mb-2 group-hover:scale-110 transition">
              +
            </div>

            <p className="font-medium">
              Neue Tour erstellen
            </p>

          </div>
        </div>

        {/* Tour Cards */}
        {items.map((item) => (
          <Link
            to={`/products/${item.id}`}
            key={item.id}
            className="group block"
          >
            <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300">

              {/* Image */}
              <div
                className="h-44 bg-cover bg-center relative"
                style={{ backgroundImage: `url(${item.img})` }}
              >

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition"></div>

              </div>

              {/* Card Content */}
              <div className="p-4">

                <h3 className="font-semibold text-gray-800 group-hover:text-orange-500 transition">
                  {item.title}
                </h3>

                <div className="text-sm text-gray-500 mt-1">
                  Erstellt am: 2026-03-31
                </div>

              </div>
            </div>
          </Link>
        ))}

      </div>
    </div>
  );
}