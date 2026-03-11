import logo from './logo.svg';
import './App.css';
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import CuratorCarousel from "./components/CuratorCarousel";
import MoviePoster from './components/MoviePoster';
import ArtPoster from './components/ArtPoster';
import TravelPoster from './components/TravelPoster';
import Explore from './components/Explore';
import { BrowserRouter,Route,Routes } from 'react-router-dom'


function App() {
  return (
    <div className="App">
    <BrowserRouter>
             <Header/>

      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='explore' element={<Explore/>} />
          <Route path='/main' element={<CuratorCarousel/>}/>
          <Route path='/movie' element={<MoviePoster/>}/>
          <Route path='/art' element={<ArtPoster/>}/>
          <Route path='/travel' element={<TravelPoster/>}/>

      </Routes>
              <Footer/>


      </BrowserRouter>
      </div>
  );
}

export default App;
