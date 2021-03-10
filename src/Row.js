import {useState,useEffect} from "react"


function Row({title, fetchUrl }){
    const [movies, setMovies]= useState([])
// a snippet of code which runs based on a specific condition/variable
    useEffect(() => {
// run once when the row loads and dont run again
    }, []);

    return(
        <div>
            <h2>{title}</h2>

            {/* container -> posters */}


        </div>
    )
}

export default Row