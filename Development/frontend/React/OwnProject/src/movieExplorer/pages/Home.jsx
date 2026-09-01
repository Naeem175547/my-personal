import { useEffect, useRef, useState } from "react"
import MovieList from "../compoents/MovieList";


export default function Home() {
    const [movies,setMovies]=useState([])
    const [loading,setLoading]=useState(false)
    const inputRef=useRef();
    const fetchMovies=async (query)=>{
        setLoading(true);
        const res=await fetch(`https://www.omdbapi.com/?apikey=6fbd452e&s=${query}`)
        const data=await res.json();
        setMovies(data.Search || [])
        console.log(data)
        console.log(data.Search)
        setLoading(false)
        


    }
    useEffect(()=>{
        fetchMovies('avenger')
    },[])


    function handleSubmit(e){
        e.preventDefault();
        const query=inputRef.current.value.trim();
        console.log(query)
        if(query) fetchMovies(query)

    }
  return (
    <div className="home">
    <form onSubmit={handleSubmit}>
        <input
        className="searchInput"
        placeholder="seach for a movie.."
        ref={inputRef}

        />
        <button type="submit">Search 🔎</button>
    </form>
    {loading?<p>Loading...</p>:<MovieList movies={movies}/>}


    </div>
    
  )
}
