import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Info from './pages/Info';
import CreateAccount from './pages/CreateAccount';
import SignIn from './pages/SignIn';
import ArtistInfo from './pages/ArtistInfo';
import Info2 from './pages/Info2';
import Info3 from './pages/Info3';
import Info4 from './pages/Info4';
import Info5 from './pages/Info5';
import ArtistInfo1 from './pages/ArtistInfo1';
import ArtistInfo2 from './pages/ArtistInfo2';
import Info6 from './pages/Info6';
import Info7 from './pages/Info7';
import Info1 from './pages/info1';


function App() {
  return (

    <BrowserRouter>
      <Routes>
        
        <Route path='/' element={<Login />} />
        <Route path='home' element={<Home />} />
        <Route path='/info' element={<Info />} />
        <Route path='/info1' element={<Info1 />} />
        <Route path='/info2' element={<Info2 />} />
        <Route path='/info3' element={<Info3 />} />
        <Route path='/info4' element={<Info4 />} />
        <Route path='/info5' element={<Info5 />} />
        <Route path='/info6' element={<Info6 />} />
        <Route path='/info7' element={<Info7 />} />
        <Route path='/create-account' element={<CreateAccount />} />
        <Route path='/sign-in' element={<SignIn />} />
        <Route path="/artist-info" element={<ArtistInfo />} />
        <Route path="/artist-info1" element={<ArtistInfo1 />} />
        <Route path="/artist-info2" element={<ArtistInfo2 />} />

      </Routes>
    </BrowserRouter>

  )
}

export default App;
