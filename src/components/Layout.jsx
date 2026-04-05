import React, { useState } from 'react'
import { Outlet, Link, useLocation } from 'react-router-dom'
import { LayoutDashboard, Map, Settings, Video, Menu, X, Bell, User, ChevronRight } from 'lucide-react'
import logo from '../assets/main_logo.svg'

function Sidebar({open, onClose}){
  const location = useLocation()
  
  const isActive = (path) => {
    return location.pathname === path
  }

  return (
    <aside className={`fixed inset-y-0 left-0 z-50 w-72 bg-white shadow-[4px_0_24px_rgba(0,0,0,0.02)] border-r border-gray-100 transform transition-transform duration-300 ease-in-out flex flex-col ${open ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="h-20 flex items-center justify-between px-8 border-b border-gray-50">
        <img src={logo} alt="FEELESTATE logo" className="w-32" />
        <button onClick={onClose} className="md:hidden p-2 text-gray-400 hover:text-orange-500 rounded-lg transition-colors">
          <X size={20} />
        </button>
      </div>
      
      <nav className="flex-1 px-4 py-8 overflow-y-auto">
        <ul className="space-y-2">
          <li>
            <Link 
              to="/" 
              onClick={onClose} 
              className={`flex items-center justify-between p-3.5 rounded-xl transition-all ${isActive('/') ? 'bg-orange-50 text-orange-600 font-semibold' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 font-medium'}`}
            >
              <div className="flex items-center gap-3">
                <LayoutDashboard size={20} className={isActive('/') ? 'text-orange-500' : 'text-gray-400'} />
                Dashboard
              </div>
              {isActive('/') && <ChevronRight size={16} className="text-orange-400" />}
            </Link>
          </li>
          <li>
            <Link 
              to="/products" 
              onClick={onClose} 
              className={`flex items-center justify-between p-3.5 rounded-xl transition-all ${isActive('/products') ? 'bg-orange-50 text-orange-600 font-semibold' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 font-medium'}`}
            >
              <div className="flex items-center gap-3">
                <Map size={20} className={isActive('/products') ? 'text-orange-500' : 'text-gray-400'} />
                Meine Touren
              </div>
              {isActive('/products') && <ChevronRight size={16} className="text-orange-400" />}
            </Link>
          </li>
          
          <li className="pt-8 pb-2 px-3">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Erweitert</p>
          </li>
          
          <li>
            <a href="#" className="flex items-center justify-between p-3.5 rounded-xl text-gray-600 hover:bg-gray-50 hover:text-gray-900 font-medium transition-all cursor-pointer">
              <div className="flex items-center gap-3">
                <Video size={20} className="text-gray-400" />
                AI Video Maker
              </div>
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center justify-between p-3.5 rounded-xl text-gray-600 hover:bg-gray-50 hover:text-gray-900 font-medium transition-all cursor-pointer">
              <div className="flex items-center gap-3">
                <Settings size={20} className="text-gray-400" />
                Einstellungen
              </div>
            </a>
          </li>
        </ul>
      </nav>

      {/* User Profile at bottom of sidebar */}
      <div className="p-4 border-t border-gray-50">
        <div className="flex items-center gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer">
          <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 shrink-0 border-2 border-white shadow-sm">
            <User size={20} />
          </div>
          <div className="flex-1 overflow-hidden">
            <p className="text-sm font-semibold text-gray-800 truncate">Johannes Kiese</p>
            <p className="text-xs text-gray-500 truncate">johannes@feelestate.com</p>
          </div>
        </div>
      </div>
    </aside>
  )
}

function Header({onToggle, open}){
  return (
    <header className="h-20 flex items-center justify-between px-6 lg:px-10 bg-white/80 backdrop-blur-md border-b border-gray-100 sticky top-0 z-30 transition-all">
      <div className="flex items-center gap-4">
        <button 
          aria-label="Toggle sidebar" 
          onClick={onToggle} 
          className="p-2.5 rounded-xl bg-white border border-gray-200 text-gray-600 hover:text-orange-500 hover:border-orange-200 hover:bg-orange-50 transition-all shadow-sm"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
        <img src={logo} alt="FEELESTATE logo" className="w-28 sm:hidden" />
      </div>

      <div className="flex items-center gap-5">
        {/* Notifications */}
        <button className="relative p-2 text-gray-500 hover:text-orange-500 transition-colors">
          <Bell size={22} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-orange-500 rounded-full border border-white"></span>
        </button>
        
        {/* User Badge Header */}
        <div className="hidden sm:flex items-center gap-3 pl-5 border-l border-gray-200">
          <div className="text-right">
            <div className="text-sm font-bold text-gray-800">Johannes Kiese</div>
            <div className="text-xs text-green-600 font-semibold flex items-center justify-end gap-1">
               <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Online
            </div>
          </div>
          <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 border-2 border-white shadow-sm">
            <User size={20} />
          </div>
        </div>
      </div>
    </header>
  )
}

export default function Layout(){
  const [open, setOpen] = useState(false)

  const toggle = () => setOpen(v=>!v)
  const close = () => setOpen(false)

  return (
    <div className="relative flex flex-col min-h-screen bg-gray-50">
      <Sidebar open={open} onClose={close} />

      {/* overlay when sidebar open (covers whole UI and closes sidebar on click) */}
      {open && (
        <div className="fixed inset-0 z-40 lg:hidden" onClick={close}>
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm transition-opacity" />
        </div>
      )}

      {/* Main content wrapper */}
      <div 
        className={`flex-1 flex flex-col transition-all duration-300 ease-in-out ${
          open ? 'lg:ml-72' : 'ml-0'
        }`}
      >
        <Header onToggle={toggle} open={open} />
        <main className="flex-1 w-full max-w-full">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
