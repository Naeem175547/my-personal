import { BrowserRouter, Routes,Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./index.css"
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetails";

export default function MovieExplorer(){
    return (
        <BrowserRouter>
        <Navbar/>
        <Routes>
        <Route path="/" element={<Home/>}/>
         <Route path='/movie/:id' element={<MovieDetail />} />
                    
        </Routes>
        

        </BrowserRouter>
        
        
        
    )




}