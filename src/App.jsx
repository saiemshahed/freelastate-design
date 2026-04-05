import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Dashboard from './pages/Dashboard'
import Products from './pages/Products'
import ProductDetails from './pages/ProductDetails'

export default function App(){
  return (
    <div className="app-container">
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Dashboard/>} />
          <Route path="products" element={<Products/>} />
          <Route path="products/:id" element={<ProductDetails/>} />
        </Route>
      </Routes>
    </div>
  )
}
