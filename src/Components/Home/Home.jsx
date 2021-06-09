import React,{useEffect,useState} from 'react'
import './Home.css'
import {api_key,img_url} from '../../Constance'
import axios from '../Services/axios'

function  Home(props) {
    
    const [movie, setmovie] = useState()
 
    useEffect(() => {
     axios.get(`trending/all/day?api_key=${api_key}`).then((res)=>{
          setmovie(res.data.results[props.movieindex ])
      })
    }, [props.movieindex]) 


    return (
        <div>
            <div className="demo" style={{backgroundImage:`url(${movie ? img_url+movie.backdrop_path :''})`}}>
               
                <div className="content">
                <h1>{movie? movie.title :''}</h1>
                <div >
                    <button className="btns" onClick={()=>alert('Not available now')} >Play</button>
                    <button className="btns" onClick={()=>alert('Not possible now')}>Add to Fav</button>
                   
                </div>
                <p>{movie? movie.overview :''}</p>
                </div>
              
            
            </div> 
        </div>
    )
}

export default Home
