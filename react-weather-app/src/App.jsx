import {BrowserRouter, Routes, Route, Link} from 'react-router'
import './App.css'
import CityList from './components/CityList'
import { useState } from 'react'
import CityForecast from './components/CityForecast'

function App() {

  const [loading, isLoading] = useState(true)

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CityList />} />
        <Route path="/forecast/:city" element={<CityForecast />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
