import { useEffect,useState } from "react"

export default function useFetch(url){
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        async function fetchDate(){
            try{
                const res=await fetch(url);
            const data=await res.json();
            setData(data);
            }
            catch(err){
                setError(err);
            }
            finally{
                setLoading(false);

            }
            
            
        }
        fetchDate();
       
    },[url]);
    return {data,loading,error};



}