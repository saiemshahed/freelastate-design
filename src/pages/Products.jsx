import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Monitor, Edit2, Download, BarChart2, Plus, Target } from "lucide-react";

const imgs = [
  "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=800"
];

const items = Array.from({ length: 9 }).map((_, i) => ({
  id: i + 1,
  title: ["Robby Testing", "Neue Version", "test editor", "Gewoba Hollergrund"][i % 4],
  img: imgs[i % 3],
  size: ["11 MB", "3 GB", "38 MB", "88 MB", "102 MB"][i % 5],
  date: "2026-03-" + (31 - i).toString().padStart(2, "0"),
}));

export default function Products() {
  const navigate = useNavigate();

  return (
    <div className="p-4 sm:p-6 lg:p-8 bg-gray-50 min-h-screen">
      {/* Page Title & Search Bar Area */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-8 gap-4">
        <h2 className="text-2xl font-bold text-gray-800 tracking-tight">Meine Touren</h2>
        <div className="relative">
          <input
            type="text"
            placeholder="Suchen"
            className="w-full sm:w-64 pl-4 pr-10 py-2 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-shadow"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Create Tour Card */}
        <div className="group border-2 border-dashed border-gray-300 rounded-2xl flex flex-col items-center justify-center bg-white hover:border-orange-500 hover:bg-orange-50 transition-all duration-300 cursor-pointer min-h-[360px] shadow-sm hover:shadow-md">
          <div className="flex flex-col items-center gap-4 text-center">
            {/* Top Image Placeholder */}
            <div className="w-full h-40 flex items-center justify-center mb-2 px-6">
              <div className="w-full max-w-[120px] aspect-video border-[3px] border-gray-300 rounded-lg flex items-center justify-center relative bg-gray-50 group-hover:bg-white group-hover:border-orange-200 transition-colors">
                <div className="w-8 h-8 rounded-full border-[3px] border-gray-300 absolute -top-4 -left-4 hidden sm:block"></div>
                <div className="w-8 h-8 rounded-full border-[3px] border-gray-300 absolute -top-4 -right-4 hidden sm:block"></div>
                <svg
                  className="w-12 h-12 text-gray-300 group-hover:text-orange-200 transition-colors"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z" />
                </svg>
              </div>
            </div>
            
            <div className="w-full border-t border-gray-100 transition-colors group-hover:border-orange-200 pb-4"></div>

            <p className="font-semibold text-gray-800 text-lg group-hover:text-orange-600 transition-colors">
              Neue Tour erstellen
            </p>
            
            <div className="w-14 h-14 bg-white border-2 border-orange-500 rounded-full flex items-center justify-center group-hover:bg-orange-500 transition-all shadow-sm group-hover:shadow-lg group-hover:-translate-y-1 mt-2">
              <Plus className="w-6 h-6 text-orange-500 group-hover:text-white transition-colors" />
            </div>
          </div>
        </div>

        {/* Tour Cards */}
        {items.map((item) => (
          <div
            key={item.id}
            className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col min-h-[360px] relative"
          >
            {/* Image Header */}
            <div
              className="h-44 w-full bg-cover bg-center relative transition-transform duration-500 group-hover:scale-[1.02]"
              style={{ backgroundImage: `url(${item.img})` }}
            >
              {/* Size Badge */}
              <div className="absolute top-2 right-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-md shadow-sm">
                {item.size}
              </div>

              {/* Status Badge */}
              <div className="absolute bottom-2 right-2 bg-white/95 backdrop-blur text-green-600 text-xs font-semibold px-2 py-1 rounded-full flex items-center gap-1 shadow-sm">
                <Target size={12} className="text-green-500" />
                Öffentlich
              </div>

              {/* Outer Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors"></div>
            </div>

            {/* Separator */}
            <div className="h-1 w-full bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

            {/* Card Content */}
            <div className="p-5 flex-1 flex flex-col">
              <h3 className="font-bold text-gray-800 text-center text-[17px] mb-4 group-hover:text-orange-600 transition-colors">
                {item.title}
              </h3>

              {/* Information List */}
              <div className="space-y-1.5 text-[13px] text-gray-500 px-2 mt-auto pb-4">
                <div className="grid grid-cols-[110px_1fr] items-center">
                  <span className="font-medium text-gray-400">Objekt ID:</span>
                  <span className="text-gray-700 font-medium">-</span>
                </div>
                <div className="grid grid-cols-[110px_1fr] items-center">
                  <span className="font-medium text-gray-400">Ansprechpartner:</span>
                  <span className="text-gray-700 font-medium">-</span>
                </div>
                <div className="grid grid-cols-[110px_1fr] items-center">
                  <span className="font-medium text-gray-400">Team Mitglied:</span>
                  <span className="text-gray-700 font-medium">-</span>
                </div>
                <div className="grid grid-cols-[110px_1fr] items-center">
                  <span className="font-medium text-gray-400">Erstellt am:</span>
                  <span className="text-gray-700 font-medium">{item.date}</span>
                </div>
              </div>

              {/* Action Buttons Container (Hidden by default, slides up on hover) */}
              <div className="absolute left-0 bottom-0 w-full p-4 bg-gradient-to-t from-white via-white to-transparent translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-3">
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    navigate(`/products/${item.id}`);
                  }}
                  className="w-10 h-10 rounded-full border-2 border-orange-500 text-orange-500 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors shadow-sm cursor-pointer z-10"
                  title="View Details"
                >
                  <Monitor size={16} strokeWidth={2.5} />
                </button>
                <button 
                  className="w-10 h-10 rounded-full border-2 border-orange-500 text-orange-500 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors shadow-sm cursor-pointer z-10"
                  title="Edit"
                >
                  <Edit2 size={16} strokeWidth={2.5} />
                </button>
                <button 
                  className="w-10 h-10 rounded-full border-2 border-orange-500 text-orange-500 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors shadow-sm cursor-pointer z-10"
                  title="Download"
                >
                  <Download size={16} strokeWidth={2.5} />
                </button>
                <button 
                  className="w-10 h-10 rounded-full border-2 border-orange-500 text-orange-500 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-colors shadow-sm cursor-pointer z-10"
                  title="Stats"
                >
                  <BarChart2 size={16} strokeWidth={2.5} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}