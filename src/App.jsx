import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Navbar } from './components/pages/Home/Navbar'
import { Home } from './components/pages/Home/Home'
import { About } from './components/pages/About/About'
import Layout from './components/layout/Layout'





function App() {
    return (
            <Layout>
                <BrowserRouter>
                    <Navbar />
                        <div>
                            <Routes>
                                <Route path='/' exact element={<Home />} />
                                <Route path='/about' element={<About />} />
                            </Routes>
                        </div>
                </BrowserRouter>
            </Layout>
    )
}

export default App;