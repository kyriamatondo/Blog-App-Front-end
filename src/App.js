
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog';
import Home from './components/Home';
import Navbar from './components/Navbar';
import AddBlog from './components/AddBlog';
import Update from './components/Update';
import Read from './components/Read';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/blogs' element={<Blog/>} />
    <Route path='/add' element={<AddBlog/>} />
    <Route path='/update/:id' element={<Update/>} />
    <Route path='/blog/:id' element={<Read/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
