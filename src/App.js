import 'bootstrap-icons/font/bootstrap-icons.css';
import './App.css';
import Header from './Components/Header/Header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import Footer from './Components/Footer/Footer';
import Article from './Pages/Article/Article';
import Media from './Pages/Media/Media';
import ScrollToTop from './Components/ScrollToTop ';
import Background from './Pages/Background/Background';
import Voteforemp from './Pages/Vote-for-emp/Voteforemp';

function App() {
  return (
    <>
    <BrowserRouter>
    <ScrollToTop/>
     <Header/>
     <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/about-us' element={<About/>}/>
      <Route exact path='/media' element={<Media/>}/>
      <Route exact path='/article' element={<Article/>}>
      <Route exact path=":articleID" element={<Article/>}/>
      </Route>
      <Route exact path='/background' element={<Background/>}/>
      <Route exact path='/vote-for-employement' element={<Voteforemp/>}/>
     </Routes>
     <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
