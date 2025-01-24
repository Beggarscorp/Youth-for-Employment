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
import Man_on_Mission from './Pages/Man-on-Mission/Man_on_Mission';
import MissionVns from './Pages/MissionVns/MissionVns';
import DMProposal from './Pages/DMProposal/DMProposal';
import EmploymentDebate from './Pages/EmploymentDebate/EmploymentDebate';
import BeAVolunteerForm from './Pages/BeAVolunteerForm';
import TwitterTweets from './Components/TwitterTweets/TwitterTweets';
import MemorandumToLeaders from './Pages/MemorandumToLeaders/MemorandumToLeaders';


function App() {
  return (
    <>
    <BrowserRouter>
    <ScrollToTop/>
     <Header/>
     <TwitterTweets/>
     <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route exact path='/about-us' element={<About/>}/>
      <Route exact path='/media' element={<Media/>}/>
      <Route exact path='/article' element={<Article/>}>
      <Route exact path=":articleID" element={<Article/>}/>
      </Route>
      <Route exact path='/background' element={<Background/>}/>
      <Route exact path='/vote-for-employment' element={<Voteforemp/>}/>
      <Route exact path='/man-on-mission' element={<Man_on_Mission/>}/>
      <Route exact path='/mission-vns' element={<MissionVns/>}/>
      <Route exact path='/DMProposal' element={<DMProposal/>}/>
      <Route exact path='/EmploymentDebate' element={<EmploymentDebate/>}/>
      <Route exact path='/BeAVolunteer' element={<BeAVolunteerForm/>}/>
      <Route exact path='/MemorandumToLeaders' element={<MemorandumToLeaders/>}/>
     </Routes>
     <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
