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
import { moviedata } from './constant/Data';
import { traveldata } from './constant/Data';
import Cart from './redux/Cart'
import Wishlist from './redux/Wishlist';
function App() {
  return (
    <div className="App">
      
    <BrowserRouter>
             <Header/>

      <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='explore' element={<Explore/>} />
          <Route path='/main' element={<CuratorCarousel/>}/>
          <Route path='/movie' element={<MoviePoster data={moviedata} title="Movie Poster" />}/>
          <Route path='/art' element={<ArtPoster/>}/>
          {/* <Route path='/travel' element={<MoviePoster data={traveldata} title="Trave Poster" />}/> */}
           <Route path='/travel' element={<TravelPoster/>}/>
           <Route path="/cart" element={<Cart />} />
           <Route path="/wishlist" element={<Wishlist />} />

      </Routes>
              <Footer/>


      </BrowserRouter>
      </div>
  );
}

export default App;
