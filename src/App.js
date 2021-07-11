
import './App.css';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Posters from './Components/Posters/Posters';
import {trending_url,toprated_url} from '../src/Constance'
import Footer from './Components/Footer/Footer';
import {Route} from 'react-router-dom'
import Favorites from './Components/Favorites/Favorites';
import AboutMe from './Components/Aboutme';
import React,{useState} from 'react'



function App() {

const [index,setIndex] = useState(0)

  return (
    <div className="App">
       <Navbar/>
       <Route path='/' exact>

      <Home movieindex={index} />
      <Posters title='Trending' url={trending_url} selectmovie={index=> setIndex(index)} />
      <Posters title='Toprated' url={toprated_url} ok selectmovie={index=> setIndex(index)}   />
      </Route>

       <Route path='/favorites'> <Favorites/> </Route>
       <Route path='/aboutme'> <AboutMe/></Route>

      
      <Footer/>
    </div>
  );
}

export default App;
