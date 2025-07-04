import {BrowserRouter, Routes, Route, Link} from 'react-router'
import './App.css'
import CityList from './components/CityList'

function App() {


  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CityList />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
