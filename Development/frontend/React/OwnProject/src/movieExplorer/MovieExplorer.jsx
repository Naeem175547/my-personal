
import {BrowserRouter,Routes, Route} from 'react-router-dom'
import './style.css'
import Home from './pages/Home'
import Nav from './compoents/Nav'
import MovieDetail from './pages/MovieDetails'

export default function MovieExplorer() {
  return (
    <BrowserRouter>
    <Nav/>

    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/movie:id" element={<MovieDetail/>}/>

    </Routes>

    

    </BrowserRouter>
    
  )
}
