import React from 'react'
import ReactDOM from 'react-dom/client'
import {Route, Routes}
import from './index.css'
import Home from './components/pages/Home/Home'
import Layout from './components/layout/Layout'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Layout>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/about' element={<About />} />
      </Routes>
    </Layout>
  </React.StrictMode>
);

