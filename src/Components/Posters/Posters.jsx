import React,{useEffect,useState} from 'react'
import Youtube from 'react-youtube'
import './Posters.css'
import {img_url,api_key} from '../../Constance'
import axios from '../Services/axios'
import { Button } from 'react-bootstrap';




function Posters(props) {
    useEffect(() => {
        axios.get(props.url).then((res)=>{
             setallmovie(res.data.results)
         })
       }, [])
       const [allmovie, setallmovie] = useState([])

       const opts = {
    
        height: '290',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 1,
        },
      };
      const[urlid , seturlId] = useState()
      const[box,setbox] =useState(false) 
      const closebox =()=>{
          setbox(!box) 
      }
         const trailers =(id)=>{
        axios.get(`/movie/${id}/videos?api_key=${api_key}&language=en-US`).then((res)=>{
            console.log(res.data);
            if(res.data.results.length !==0){
                setbox(true)
                seturlId(res.data.results[0].key)
            }
            else{
                alert('not available')
            }
        })
      }
    return ( 
        
        <div className='rows'>
            <h2>{props.title}</h2> 
            <div className="posters">
                {
                    allmovie.map((movie,index)=>{
                        return(
                            <div className='card' key={index} >
                                 <img className={props.ok? 'poster2' : 'poster'} onClick={()=>props.selectmovie(index)} src={`${img_url+movie.poster_path }`} alt=""  />
                                 {/* <button onClick={()=>trailers(movie.id)} className={props.ok ?'trilerbtn2' :'trilerbtn1'}>watch trailer</button> */}
                                 <Button onClick={()=>trailers(movie.id)} className={props.ok ?'trilerbtn2' :'trilerbtn1'}>watch trailer</Button>
                            </div> )}) 
                        } 
            </div>
                            {box && <div className="trailers">
                                { urlid &&    <Youtube opts={opts} videoId={urlid}/>} 
                                {/* <button className='closebtn' onClick={closebox}>Close</button> */}
                                <Button className='closebtn' onClick={closebox}>Close</Button>
                                </div> }
        </div>
    )
}

export default Posters
 