import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { Navbar } from './components/pages/Home/Navbar'
import { Home } from './components/pages/Home/Home'
import { About } from './components/pages/About/About'





function App() {
    return (
            <BrowserRouter>
                <Navbar />
                    <div className='bg-gray-800'>
                        <Routes>
                            <Route path='/' exact element={<Home />} />
                            <Route path='/about' element={<About />} />
                        </Routes>
                    </div>
            </BrowserRouter>
    )
}

export default App;