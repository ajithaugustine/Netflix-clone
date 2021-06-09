import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'


function Navbar() {
    return (
      
                 
       <div className='outer'>
            <div>
                <img className='logo' src="https://cdn.vox-cdn.com/thumbor/QuS2QKQys3HhosKiV-2IuKhphbo=/39x0:3111x2048/1400x1050/filters:focal(39x0:3111x2048):format(png)/cdn.vox-cdn.com/uploads/chorus_image/image/49901753/netflixlogo.0.0.png" alt="" />
            </div>
            
            {/* <div className="routers">
               <Link to='/'>Home</Link>
               <Link to='/favorites'>fav</Link>
               <Link to='/aboutme'> about me</Link>
  
            </div>   */}
        </div>
      
 
    )
}

export default Navbar
