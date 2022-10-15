import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './components/Home';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Header from './components/Header';
import User from './components/User';
import UserDetail from './components/UserDetail';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/user' element={<User/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path='/user/:id' element={<UserDetail/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
