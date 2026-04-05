import React, { useState } from 'react'
import { Outlet, Link } from 'react-router-dom'
import logo from '../assets/main_logo.svg'

function Sidebar({open, onClose}){
  return (
    <aside className={`fixed inset-y-0 left-0 z-50 w-80 bg-white border-r shadow-lg transform transition-transform ${open ? 'translate-x-0' : '-translate-x-full'}`}>
      <div className="h-20 flex items-center px-6 border-b">
        <img src={logo} alt="logo" className="w-28" />
      </div>
      <nav className="p-4">
        <ul className="space-y-2">
          <li><Link to="/" onClick={onClose} className="flex items-center gap-3 p-3 rounded hover:bg-gray-50">Dashboard</Link></li>
          <li><Link to="/products" onClick={onClose} className="flex items-center gap-3 p-3 rounded hover:bg-gray-50">My Tours</Link></li>
          <li className="text-sm text-gray-500 mt-6">Tools</li>
          <li><a className="flex items-center gap-3 p-3 rounded hover:bg-gray-50">AI Video</a></li>
        </ul>
      </nav>
    </aside>
  )
}

function Header({onToggle, open}){
  return (
    <header className="h-16 flex items-center justify-between px-4 md:px-6 bg-white border-b">
      <div className="flex items-center gap-3">
        <button aria-label="Toggle sidebar" onClick={onToggle} className="p-2 rounded-md hover:bg-gray-100">
          {open ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
        <div className="flex items-center gap-3">
          <img src={logo} alt="logo" className="w-28 hidden sm:block" />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="text-sm text-gray-600">Johannes Kiese</div>
        <div className="w-9 h-9 rounded-full bg-green-300"></div>
      </div>
    </header>
  )
}

export default function Layout(){
  const [open, setOpen] = useState(false)

  const toggle = () => setOpen(v=>!v)
  const close = () => setOpen(false)

  return (
    <div className="relative">
      <Sidebar open={open} onClose={close} />

      {/* overlay when sidebar open (covers whole UI and closes sidebar on click) */}
      {open && (
        <div className="fixed inset-0 z-40" onClick={close}>
          <div className="absolute inset-0 bg-black/20" />
        </div>
      )}

      <div className={`flex-1 min-h-screen bg-gray-50 transition-filter duration-200 ${open ? 'filter blur-sm pointer-events-none' : ''}`}>
        <Header onToggle={toggle} open={open} />
        <main className="p-4 md:p-4">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
