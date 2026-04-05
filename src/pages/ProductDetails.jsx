import React from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Edit2, Play, Info, MapPin, Calendar, Users, Eye } from "lucide-react";
import hero from "../assets/tour1.svg";

export default function ProductDetails() {
  const { id } = useParams();

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 space-y-8 bg-gray-50 min-h-screen">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 tracking-tight">
            Tour Einzelheiten
          </h2>
          <p className="text-gray-500 text-sm mt-1 flex items-center gap-2">
            <span className="font-medium bg-gray-200 text-gray-700 px-2 py-0.5 rounded-md">ID: {id}</span>
            <span>Robby Testing Details</span>
          </p>
        </div>

        <Link
          to="/products"
          className="group flex items-center gap-2 px-5 py-2.5 bg-white border-2 border-gray-200 rounded-xl text-sm font-semibold text-gray-600 hover:border-orange-500 hover:text-orange-600 transition-all shadow-sm hover:shadow-md"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          Zurück zu den Touren
        </Link>
      </div>

      {/* Main Card */}
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-3">

          {/* Image Preview */}
          <div className="lg:col-span-2 p-6 lg:p-8">
            <div className="relative group rounded-2xl overflow-hidden shadow-inner">
              <div
                className="h-80 sm:h-[450px] w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${hero})` }}
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors"></div>
              
              <div className="absolute bottom-4 right-4 flex gap-2">
                <span className="bg-orange-500 text-white text-sm font-bold px-3 py-1.5 rounded-lg shadow-lg">11 MB</span>
                <span className="bg-white text-green-600 text-sm font-semibold px-3 py-1.5 rounded-lg shadow-lg flex items-center gap-1.5">
                  <Eye size={16} className="text-green-500" /> Público
                </span>
              </div>
            </div>
          </div>

          {/* Details Panel */}
          <div className="border-t lg:border-t-0 lg:border-l border-gray-100 p-6 lg:p-8 flex flex-col justify-between bg-gray-50/50">

            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Robby Testing
              </h3>

              <div className="space-y-4">
                <div className="flex items-center p-3 bg-white rounded-xl border border-gray-100 shadow-sm hover:border-orange-200 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 mr-4">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Objekt ID</p>
                    <p className="text-gray-800 font-semibold">-</p>
                  </div>
                </div>

                <div className="flex items-center p-3 bg-white rounded-xl border border-gray-100 shadow-sm hover:border-orange-200 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 mr-4">
                    <Users size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Ansprechpartner</p>
                    <p className="text-gray-800 font-semibold">-</p>
                  </div>
                </div>

                <div className="flex items-center p-3 bg-white rounded-xl border border-gray-100 shadow-sm hover:border-orange-200 transition-colors">
                  <div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 mr-4">
                    <Calendar size={20} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wider">Erstellt am</p>
                    <p className="text-gray-800 font-semibold">31 Mar 2026</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-col gap-3">
              <button className="w-full flex items-center justify-center gap-2 px-5 py-3.5 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-xl transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
                <Edit2 size={18} />
                Tour bearbeiten
              </button>

              <button className="w-full flex items-center justify-center gap-2 px-5 py-3.5 bg-white border-2 border-gray-200 hover:border-gray-300 text-gray-700 font-semibold rounded-xl transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5">
                <Play size={18} />
                Vorschau ansehen
              </button>
            </div>

          </div>
        </div>
      </div>

      {/* Additional Info Section */}
      <div className="bg-gradient-to-br from-white to-orange-50 border border-orange-100 rounded-3xl shadow-sm p-8">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-orange-100 flex items-center justify-center text-orange-500 shrink-0">
            <Info size={24} />
          </div>
          <div>
            <h4 className="text-xl font-bold text-gray-800 mb-2">
              Tour Informationen
            </h4>
            <p className="text-gray-600 leading-relaxed max-w-3xl">
              Diese Tour enthält den vollständigen interaktiven Rundgang durch die Immobilie.
              Sie können Szenen bearbeiten, Hotspots hinzufügen oder KI-Videovorschauen im Touren-Editor erstellen. 
              Nutzen Sie die Werkzeuge, um das Erlebnis für Ihre Kunden zu maximieren.
            </p>
          </div>
        </div>
      </div>

    </div>
  );
}