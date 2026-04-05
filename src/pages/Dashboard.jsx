import React from "react";
import { Link } from "react-router-dom";
import { Heart, Sparkles, Bell, ArrowRight, Eye, Video, Shield, Users, MapPin, Calendar, Clock } from "lucide-react";
import grapes from "../assets/grapes.svg";
import t1 from "../assets/tour1.svg";
import t2 from "../assets/tour2.svg";
import t3 from "../assets/tour3.svg";

const tours = [t1, t2, t3];
const titles = ["Robby Testing", "Neue Version", "test editor", "Gewoba Hollergrund", "Muster Wohnung", "Stadtvilla"];

export default function Dashboard() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-8 bg-gray-50 min-h-screen">

      {/* Hero Banner with Gratitude */}
      <div className="relative bg-gradient-to-r from-orange-500 to-orange-400 rounded-3xl shadow-lg p-8 sm:p-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute top-0 right-0 -mt-20 -mr-20 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-48 h-48 bg-orange-600 opacity-20 rounded-full blur-2xl"></div>

        <div className="relative z-10 max-w-2xl text-white">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/20 rounded-full text-sm font-medium mb-4 backdrop-blur-sm border border-white/30">
            <Sparkles size={16} className="text-yellow-200" />
            <span>Welcome back</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-bold flex items-center gap-3">
            Thank you for using FEELESTATE <Heart className="text-red-400 fill-red-400 animate-pulse" size={32} />
          </h2>

          <p className="mt-4 text-orange-50 text-lg leading-relaxed font-medium">
            We're incredibly grateful to have you with us. Explore your latest tours, discover new AI features, and continue building amazing 360° experiences!
          </p>
          
          <div className="mt-8 flex gap-4">
            <Link to="/products" className="px-6 py-3 bg-white text-orange-600 font-bold rounded-xl shadow-md hover:shadow-lg hover:bg-gray-50 transition-all flex items-center gap-2">
              Meine Touren <ArrowRight size={18} />
            </Link>
          </div>
        </div>

        <div className="relative z-10 hidden sm:block shrink-0 bg-white/10 p-4 rounded-3xl backdrop-blur-sm border border-white/20 shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
          <img
            src={grapes}
            alt="Welcome Grape Decoration"
            className="w-40 sm:w-48 lg:w-56 drop-shadow-2xl"
          />
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* My Tours Section */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-2xl font-bold text-gray-800 tracking-tight">Kürzlich bearbeitete Touren</h3>
            <Link to="/products" className="text-orange-500 font-semibold hover:text-orange-600 flex items-center gap-1 text-sm bg-orange-50 px-3 py-1.5 rounded-lg transition-colors">
              Alle ansehen <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col relative"
              >
                {/* Image Area */}
                <div className="h-40 relative overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url(${tours[i % 3]})` }}
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors"></div>
                  
                  {/* Status Overlay */}
                  <div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm text-green-600 text-xs font-bold px-2.5 py-1 rounded-md shadow-sm flex items-center gap-1.5">
                    <Eye size={12} className="text-green-500" /> Público
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-5 flex flex-col flex-1">
                  <h4 className="font-bold text-gray-800 text-lg group-hover:text-orange-500 transition-colors mb-4 line-clamp-1">
                    {titles[i]}
                  </h4>

                  {/* Detailed Information Grid */}
                  <div className="space-y-3 mt-auto">
                    <div className="flex items-center text-sm text-gray-500 gap-3">
                      <div className="w-7 h-7 rounded-lg bg-orange-50 flex items-center justify-center text-orange-500 shrink-0">
                        <MapPin size={14} />
                      </div>
                      <span className="truncate">Objekt ID: 104{i}92</span>
                    </div>

                    <div className="flex items-center text-sm text-gray-500 gap-3">
                      <div className="w-7 h-7 rounded-lg bg-orange-50 flex items-center justify-center text-orange-500 shrink-0">
                        <Clock size={14} />
                      </div>
                      <span className="truncate">Bearbeitet: Vor {i + 2} Stunden</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sidebar: News & Updates */}
        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-800 tracking-tight flex items-center gap-2">
            <Bell className="text-orange-500" size={24} /> Aktuelles
          </h3>

          <aside className="bg-white rounded-3xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-start justify-between mb-6 pb-6 border-b border-gray-100">
              <div>
                <h4 className="font-bold text-gray-800 text-lg">Platform Updates</h4>
                <p className="text-sm text-gray-400 mt-1">Die neuesten Funktionen.</p>
              </div>
            </div>

            <ul className="space-y-6">
              {/* Item 1 */}
              <li className="group">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 text-white flex items-center justify-center shrink-0 shadow-md group-hover:shadow-lg transition-shadow">
                    <Video size={20} />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <p className="font-bold text-gray-800 group-hover:text-orange-500 transition-colors">AI Video Maker</p>
                      <span className="px-2 py-0.5 text-[10px] uppercase tracking-wider font-bold bg-orange-100 text-orange-600 rounded-md">Neu</span>
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed">Erstellen Sie mp4-Videos aus bis zu 7 Bildern Ihrer 360°-Tour. (Aktivierung erforderlich)</p>
                  </div>
                </div>
              </li>

              {/* Item 2 */}
              <li className="group">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-teal-400 to-emerald-500 text-white flex items-center justify-center shrink-0 shadow-md group-hover:shadow-lg transition-shadow">
                    <Shield size={20} />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <p className="font-bold text-gray-800 group-hover:text-orange-500 transition-colors">Sichtbarkeitsbeschränkung</p>
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed">Passen Sie den sichtbaren Bereich Ihrer 360°-Bilder an, um die Aufmerksamkeit zu fokussieren.</p>
                  </div>
                </div>
              </li>

              {/* Item 3 */}
              <li className="group">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-orange-400 to-red-500 text-white flex items-center justify-center shrink-0 shadow-md group-hover:shadow-lg transition-shadow">
                    <Users size={20} />
                  </div>
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <p className="font-bold text-gray-800 group-hover:text-orange-500 transition-colors">Teamverwaltung</p>
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed">Erstellen und verwalten Sie Unterkonten für Teammitglieder. Steuern Sie den Zugriff.</p>
                  </div>
                </div>
              </li>
            </ul>

            <div className="mt-8 pt-6 border-t border-gray-100 bg-gray-50 -mx-6 -mb-6 p-6 rounded-b-3xl">
              <h5 className="text-sm font-bold text-gray-700 mb-4 flex items-center gap-2">
                <Calendar size={16} className="text-gray-400" /> Letzte Aktivitäten
              </h5>
              <ul className="space-y-3 text-sm text-gray-500">
                <li className="flex gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-1.5 shrink-0"></span>
                  <p>Johannes hat <span className="font-semibold text-gray-700">Robby Testing</span> veröffentlicht — vor 3 Stunden</p>
                </li>
                <li className="flex gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-400 mt-1.5 shrink-0"></span>
                  <p>Bild hochgeladen zu <span className="font-semibold text-gray-700">Neue Version</span> — Gestern</p>
                </li>
              </ul>
            </div>
          </aside>
        </div>

      </div>
    </div>
  );
}