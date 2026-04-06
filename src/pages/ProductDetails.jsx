import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { 
  Settings, UploadCloud, ArrowUpDown, EyeOff, LayoutTemplate, 
  Map as MapIcon, Info, Link2, Share2, Users, Globe, Video, 
  Wand2, Image as ImageIcon, Monitor, CheckCircle2, ChevronDown, 
  CheckSquare, Square, Trash2, Download, Edit3, X, Maximize, Move
} from "lucide-react";

import t1 from "../assets/tour1.svg";
import t2 from "../assets/tour2.svg";

export default function ProductDetails() {
  const { id } = useParams();
  const [activeTab, setActiveTab] = useState("Toureinstellungen");
  const [previewImage, setPreviewImage] = useState(null);
  
  const menuItems = [
    { title: "Toureinstellungen", icon: Settings },
    { title: "Upload", icon: UploadCloud },
    { title: "Sortieren", icon: ArrowUpDown },
    { title: "Verpixeln", icon: EyeOff },
    { title: "Bereiche", icon: LayoutTemplate },
    { title: "Grundrisspläne", icon: MapIcon },
    { title: "Info-Inhalte", icon: Info },
    { title: "Verknüpfen", icon: Link2 },
    { title: "Freigabe", icon: Share2 },
    { title: "Kundenverwaltung", icon: Users },
    { title: "Veröffentlichen", icon: Globe },
    { title: "Sichtbeschränkung", icon: EyeOff },
    { title: "AI Video", icon: Video },
    { title: "AI Grundriss (BETA)", icon: MapIcon },
    { title: "KI-Bildverbesserung (BETA)", icon: Wand2 },
  ];

  const settingsCheckboxes = [
    { label: "Panoramen automatisch langsam drehen", checked: true },
    { label: "Zoom zulassen", checked: false },
    { label: "Widerrufserklärung vorschalten", checked: false },
    { label: "Willkommenspopup anzeigen", checked: true },
    { label: "Social Media Buttons anzeigen", checked: true },
    { label: "Virtual Reality zulassen", checked: true },
    { label: "Vermessung aktivieren", checked: false },
  ];

  const uploadedImages = [
    { id: 1, name: "R0010002.JPG", thumb: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&q=80&w=1200" },
    { id: 2, name: "360_edited.jpg", thumb: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=1200" },
  ];

  const renderToureinstellungen = () => (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Left Form Column */}
      <div className="space-y-6">
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-5">
          {/* Freigabe-Status */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1.5">Freigabe-Status</label>
            <div className="relative">
              <select className="w-full appearance-none bg-gray-50 border border-gray-200 text-gray-700 py-2.5 px-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-colors">
                <option>Öffentlich</option>
                <option>Privat</option>
              </select>
              <ChevronDown className="absolute right-3 top-3 text-gray-400 pointer-events-none" size={18} />
            </div>
          </div>

          {/* Tourname */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1.5">Tourname<span className="text-orange-500">*</span></label>
            <input 
              type="text" 
              defaultValue="Robby Testing"
              className="w-full bg-white border border-gray-200 text-gray-700 py-2.5 px-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-colors"
            />
          </div>

          {/* Objekt ID */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1.5">Objekt ID</label>
            <input 
              type="text" 
              placeholder="Objekt ID"
              className="w-full bg-white border border-gray-200 text-gray-700 py-2.5 px-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-colors"
            />
          </div>

          {/* Ansprechpartner */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1.5">Ansprechpartner</label>
            <div className="relative">
              <select className="w-full appearance-none bg-gray-50 border border-gray-200 text-gray-700 py-2.5 px-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-colors">
                <option>Kein Ansprechpartner</option>
              </select>
              <ChevronDown className="absolute right-3 top-3 text-gray-400 pointer-events-none" size={18} />
            </div>
          </div>

          {/* Adresse */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1.5">Adresse <span className="text-gray-400 font-normal">(wird nicht öffentlich angezeigt)</span></label>
            <textarea 
              rows="3"
              className="w-full bg-white border border-gray-200 text-gray-700 py-2.5 px-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-colors resize-none"
            ></textarea>
          </div>

          {/* Expose */}
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-1.5">Exposé Informationen</label>
            <div className="relative mb-3">
              <select disabled className="w-full appearance-none bg-gray-100 border border-gray-200 text-gray-400 py-2.5 px-4 rounded-xl cursor-not-allowed">
                <option>Kein Exposé</option>
              </select>
              <ChevronDown className="absolute right-3 top-3 text-gray-300 pointer-events-none" size={18} />
            </div>
            <div className="bg-blue-50 text-blue-800 text-sm p-4 rounded-xl flex gap-3 items-start">
              <Info size={20} className="shrink-0 text-blue-500 mt-0.5" />
              <p>Sie haben noch keine Info-Inhalte für diese Tour erstellt. Legen Sie Ihren Exposé-Text im Menüpunkt "Info-Inhalte" an.</p>
            </div>
          </div>
        </div>

        {/* Hintergrundmusik */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-4">
          <label className="block text-sm font-bold text-gray-700">Hintergrundmusik *</label>
          <div className="space-y-3">
            <label className="flex items-center gap-3 cursor-pointer">
              <div className="w-5 h-5 rounded-full border-2 border-orange-500 flex items-center justify-center">
                <div className="w-2.5 h-2.5 bg-orange-500 rounded-full"></div>
              </div>
              <span className="text-sm text-gray-700 font-medium">Keine Hintergrundmusik</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer opacity-50">
              <div className="w-5 h-5 rounded-full border-2 border-gray-300 flex items-center justify-center"></div>
              <span className="text-sm text-gray-700 font-medium">FEEL Good</span>
            </label>
          </div>
        </div>
      </div>

      {/* Right Form Column */}
      <div className="space-y-6">
        {/* Einstellungen Checkboxes */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <label className="block text-sm font-bold text-gray-700 mb-4">Einstellungen</label>
          <div className="space-y-4">
            {settingsCheckboxes.map((item, idx) => (
              <label key={idx} className="flex items-center gap-3 cursor-pointer group">
                {item.checked ? (
                  <div className="text-orange-500 shrink-0">
                    <CheckSquare size={22} className="fill-orange-100" />
                  </div>
                ) : (
                  <div className="text-gray-300 group-hover:text-gray-400 shrink-0 transition-colors">
                    <Square size={22} />
                  </div>
                )}
                <span className="text-sm text-gray-700">{item.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Größe des Stativ-Stickers */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <label className="block text-sm font-bold text-gray-700 mb-1.5">Größe des Stativ-Stickers <span className="text-gray-400 font-normal">(VR und Messmodus)</span></label>
          <div className="relative">
            <select className="w-full appearance-none bg-gray-50 border border-gray-200 text-gray-700 py-2.5 px-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-colors">
              <option>Kleiner Sticker (FEELESTATE Monopod)</option>
            </select>
            <ChevronDown className="absolute right-3 top-3 text-gray-400 pointer-events-none" size={18} />
          </div>
        </div>

        {/* Tour-Zuweisung */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <label className="block text-sm font-bold text-gray-700 mb-1.5">Tour-Zuweisung</label>
          <div className="relative">
            <select className="w-full appearance-none bg-gray-50 border border-gray-200 text-gray-700 py-2.5 px-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-colors">
              <option>Kein Teammitglied für die Verteilung</option>
            </select>
            <ChevronDown className="absolute right-3 top-3 text-gray-400 pointer-events-none" size={18} />
          </div>
        </div>

        {/* Button-Typ */}
        <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <label className="block text-sm font-bold text-gray-700 mb-4">Button-Typ für Navigationselemente</label>
          <div className="flex gap-4">
            <button className="w-20 h-20 rounded-xl border-2 border-orange-500 bg-orange-50 flex items-center justify-center relative overflow-hidden transition-all shadow-sm">
              <div className="w-10 h-10 border-2 border-orange-500 bg-white rounded-full flex items-center justify-center">
                <span className="w-6 h-6 border-b-2 border-r-2 border-orange-500 transform rotate-45 -mt-1"></span>
              </div>
              <div className="absolute top-1 right-1 bg-orange-500 rounded-full text-white">
                <CheckCircle2 size={16} />
              </div>
            </button>
            <button className="w-20 h-20 rounded-xl border-2 border-gray-200 bg-transparent flex items-center justify-center transition-all hover:bg-gray-50 shadow-sm opacity-60 hover:opacity-100">
              <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center opacity-70">
                <span className="w-5 h-5 border-t-4 border-l-4 border-white transform rotate-45 ml-1 mt-1"></span>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  const renderUpload = () => (
    <div className="space-y-6">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">Upload</h2>
        <p className="text-gray-500 text-sm">Verwalten Sie die Einstellungen Ihrer virtuellen Tour</p>
      </div>

      <div className="flex flex-wrap gap-8">
        
        {/* Upload Dropzone */}
        <div className="w-full max-w-[320px] h-[220px] border-2 border-dashed border-orange-300 bg-orange-50/40 rounded-3xl flex flex-col items-center justify-center cursor-pointer hover:bg-orange-50 hover:border-orange-400 transition-all group">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-4 relative group-hover:scale-110 transition-transform">
            <ImageIcon size={28} className="text-orange-500" />
            <div className="absolute right-0 bottom-0 bg-green-500 rounded-full border-2 border-white w-6 h-6 flex items-center justify-center">
              <span className="text-white text-[14px] font-bold leading-none -mt-0.5">+</span>
            </div>
          </div>
          <p className="font-bold text-orange-500 px-6 text-center leading-snug">
            Datei wählen oder ins Fenster<br/>ziehen
          </p>
        </div>

        {/* Uploaded Images */}
        {uploadedImages.map((img) => (
          <div key={img.id} className="w-full max-w-[320px] space-y-3">
            <div 
              className="h-[220px] rounded-3xl bg-cover bg-center shadow-sm border border-gray-200 relative group cursor-pointer overflow-hidden"
              style={{ backgroundImage: `url(${img.thumb})` }}
              onClick={() => setPreviewImage(img)}
            >
              {/* Image Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300"></div>
              
              {/* Float action buttons */}
              <div className="absolute top-4 right-4 flex gap-2 translate-y-[-10px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <button 
                  className="w-9 h-9 rounded-full bg-white text-orange-500 flex items-center justify-center shadow-md hover:bg-orange-500 hover:text-white transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Trash2 size={16} />
                </button>
                <button 
                  className="w-9 h-9 rounded-full bg-white text-orange-500 flex items-center justify-center shadow-md hover:bg-orange-500 hover:text-white transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <Download size={16} />
                </button>
              </div>
              
              {/* 360 preview badge */}
              <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-md rounded-lg px-2.5 py-1.5 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                <Move size={14} className="text-white" />
                <span className="text-[11px] text-white font-bold uppercase tracking-widest">360° Preview</span>
              </div>
            </div>
            
            <div className="flex items-center gap-2 group cursor-pointer w-max pl-1">
              <p className="text-gray-900 font-bold text-[15px] group-hover:text-orange-500 transition-colors">
                {img.name}
              </p>
              <Edit3 size={14} className="text-orange-300 stroke-[2.5px] group-hover:text-orange-500 transition-colors" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="flex flex-col lg:flex-row min-h-[calc(100vh-80px)] bg-gray-50 border-t border-gray-100 relative">
      
      {/* Secondary Sidebar (Editor Menu) */}
      <aside className="w-full lg:w-72 bg-white border-r border-gray-200 shrink-0 flex flex-col h-[calc(100vh-80px)] sticky top-20 z-10">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-xl font-bold text-gray-800 tracking-tight">
            Editor <span className="text-gray-400 font-medium text-sm ml-1">{activeTab}</span>
          </h2>
          <p className="text-orange-500 font-semibold mt-2 text-lg">Robby Testing</p>
        </div>
        
        <div className="flex-1 overflow-y-auto py-4">
          <nav className="flex flex-col space-y-1">
            {menuItems.map((item, idx) => {
              const isActive = activeTab === item.title;
              return (
                <button 
                  key={idx}
                  onClick={() => setActiveTab(item.title)}
                  className={`flex items-center w-full gap-3 px-6 py-3 transition-colors text-sm font-medium ${
                    isActive 
                      ? "bg-orange-50 text-orange-600 border-l-4 border-orange-500" 
                      : "text-gray-600 hover:bg-gray-50 hover:text-gray-900 border-l-4 border-transparent"
                  }`}
                >
                  <item.icon size={18} className={isActive ? "text-orange-500" : "text-gray-400"} />
                  {item.title}
                </button>
              );
            })}
          </nav>
        </div>
        
        <div className="p-4 border-t border-gray-100 bg-white">
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-xl transition-colors">
            <Monitor size={18} className="text-gray-400" />
            Tour im Browser ansehen
          </a>
        </div>
      </aside>

      {/* Main Form Content */}
      <div className="flex-1 p-6 lg:p-10 w-full flex justify-center">
        <div className="w-full max-w-6xl">
          {activeTab === "Toureinstellungen" ? renderToureinstellungen() : null}
          {activeTab === "Upload" ? renderUpload() : null}
          {activeTab !== "Toureinstellungen" && activeTab !== "Upload" ? (
            <div className="flex flex-col items-center justify-center h-64 border-2 border-dashed border-gray-200 rounded-3xl bg-gray-50 mt-10">
              <Wand2 size={48} className="text-gray-300 mb-4" />
              <h3 className="text-xl font-bold text-gray-500">{activeTab}</h3>
              <p className="text-gray-400 mt-2">Dieser Bereich wird gerade entwickelt.</p>
            </div>
          ) : null}
        </div>
      </div>

      {/* 360 Image Preview Modal */}
      {previewImage && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-md">
          {/* Close button */}
          <button 
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors shadow-lg z-50 backdrop-blur-sm"
            onClick={() => setPreviewImage(null)}
          >
            <X size={24} />
          </button>
          
          <div className="absolute top-6 left-6 z-50 flex items-center gap-3">
            <div className="w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center shadow-lg">
              <Move size={20} className="text-white" />
            </div>
            <div>
              <p className="text-white font-bold text-lg">{previewImage.name}</p>
              <p className="text-orange-400 text-xs font-bold uppercase tracking-widest">360° Interactive Preview</p>
            </div>
          </div>
          
          {/* Mock 360 Interactive Container */}
          <div className="w-full h-full relative cursor-grab active:cursor-grabbing overflow-x-auto overflow-y-hidden hide-scrollbar flex items-center">
             {/* We simulate a 360 image by stretching the background width very wide */}
             <div 
               className="min-w-[200vw] sm:min-w-[150vw] h-[70vh] sm:h-[85vh] bg-cover bg-center bg-no-repeat transition-transform"
               style={{ 
                 backgroundImage: `url(${previewImage.thumb})`,
                 backgroundSize: '100% 100%'
               }}
             />
          </div>
          
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-md border border-white/10 px-6 py-3 rounded-full flex gap-6 text-white z-50 shadow-2xl items-center pointer-events-none">
            <Maximize size={20} className="opacity-70" />
            <span className="font-semibold text-sm tracking-wide">Drag to look around</span>
          </div>
        </div>
      )}
    </div>
  );
}