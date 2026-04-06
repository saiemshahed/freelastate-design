import React from "react";
import { Link } from "react-router-dom";
import { Heart, Sparkles, Bell, ArrowRight, Eye, Video, Shield, Users, MapPin, Calendar, Clock } from "lucide-react";
import grapes from "../assets/grapes.svg";
const tours = [
  "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1566665797739-1674de7a421a?auto=format&fit=crop&q=80&w=800"
];
const titles = ["Robby Testing", "Neue Version", "test editor", "Gewoba Hollergrund", "Muster Wohnung", "Stadtvilla"];

export default function Dashboard() {
  return (
    <div className="p-4 sm:p-6 lg:p-8 space-y-8 bg-gray-50 min-h-screen">

      {/* Top Grid: Announcement & Sidebar */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Admin Announcement Editor Card */}
        <div className="lg:col-span-2 bg-white rounded-[24px] shadow-sm border border-gray-100 p-8 sm:p-10 relative overflow-hidden">
          {/* Editor Toolbar Mockup */}
          <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-500 to-orange-500 opacity-20"></div>

          <div className="flex items-center gap-4 mb-8 pb-6 border-b border-gray-100">
            <div className="w-12 h-12 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center shrink-0">
              <span className="text-2xl">📢</span>
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight">Willkommen im FEELESTATE-Dashboard</h2>
              <p className="text-sm text-gray-500 font-medium mt-0.5">Latest updates and announcements</p>
            </div>
          </div>

          {/* Rich Text Editor Body */}
          <div className="space-y-5 text-gray-600 text-[15px] sm:text-[16px] leading-relaxed max-w-4xl">
            <p>
              <span className="font-semibold text-gray-800">Frühling liegt in der Luft 🌱</span>
            </p>
            
            <p>
              Der Winter verabschiedet sich, die Tage werden länger und auch bei AVANTO geht es mit frischer Energie weiter.
            </p>
            
            <p>
              Wir arbeiten aktuell an neuen Funktionen und werden euch bald über alle Updates informieren.
            </p>

            <div className="my-8 rounded-[20px] overflow-hidden shadow-md max-w-3xl border border-gray-100 group cursor-pointer relative">
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200" 
                alt="Team Event" 
                className="w-full h-[280px] object-cover hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-black/5 hover:bg-black/0 transition-colors"></div>
            </div>

            <p>
              Außerdem beginnt bald wieder die Messesaison. Ihr könnt uns unter anderem auf folgenden Veranstaltungen treffen: <strong className="text-gray-900 font-bold">Office Business Beats, Kensington Convention, VR-Immobilien Nord & Süd Tagung.</strong>
            </p>
            
            <br/>
            
            <p>Zufrieden mit AVANTO?</p>
            
            <p>
              Dann freuen wir uns über eine kurze Bewertung.<br/>
              Helfen Sie uns und anderen Interessenten mit <strong className="text-orange-500 font-bold hover:underline cursor-pointer">5 Sternen bei Google</strong>. Vielen Dank für Ihre Unterstützung. ⭐⭐⭐⭐⭐
            </p>

            <br/>

            <p>
              Neue Technik, neue Features, neue Möglichkeiten - wir halten euch hier im Dashboard auf dem Laufenden.
            </p>
            
            <p className="font-bold text-gray-900 pt-4">
              Euer AVANTO-Team 🚀
            </p>
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

      {/* My Tours Section */}
      <div className="space-y-6 pt-4">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold text-gray-800 tracking-tight">Kürzlich bearbeitete Touren</h3>
          <Link to="/products" className="text-orange-500 font-semibold hover:text-orange-600 flex items-center gap-1 text-sm bg-orange-50 px-3 py-1.5 rounded-lg transition-colors">
            Alle ansehen <ArrowRight size={16} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="w-full space-y-4">
              <Link to={`/products`} className="block">
                <div 
                  className="h-[220px] sm:h-[180px] lg:h-[200px] rounded-[24px] bg-cover bg-center shadow-lg border border-gray-200 relative group overflow-hidden"
                  style={{ backgroundImage: `url(${tours[i % 3]})` }}
                >
                  {/* Image Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
                  
                  {/* Status Badge Over Image */}
                  <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md rounded-lg px-3 py-1.5 flex items-center gap-1.5 opacity-90 group-hover:opacity-100 transition-opacity text-white shadow-md">
                    <Eye size={14} className="text-green-400" />
                    <span className="text-[12px] font-bold uppercase tracking-widest text-green-400">Público</span>
                  </div>
                </div>
              </Link>

              <div className="px-2 space-y-2">
                <h4 className="font-bold text-gray-900 text-lg hover:text-orange-500 transition-colors cursor-pointer line-clamp-1">
                  {titles[i]}
                </h4>

                <div className="flex flex-col xl:flex-row xl:items-center text-sm text-gray-500 gap-x-5 gap-y-2">
                  <div className="flex items-center gap-1.5 font-medium">
                    <MapPin size={15} className="text-orange-400 stroke-[2.5px]" />
                    <span>ID: 104{i}92</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-medium">
                    <Clock size={15} className="text-orange-400 stroke-[2.5px]" />
                    <span>Vor {i + 2} Std</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}