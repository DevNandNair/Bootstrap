import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import BlogAuth from './components/BlogAuth';
import Register from './components/Register';
import BlogPost from './components/BlogPost';
import ViewAll from './components/ViewAll';
import DeleteBlog from './components/DeleteBlog';

function App() {
  return (
    <BrowserRouter>
    <Routes>
     <Route path=""  element={<BlogAuth/>}/>
     <Route path="register"  element={<Register/>}/>
     <Route path="post"  element={<BlogPost/>}/>
     <Route path="view"  element={<ViewAll/>}/>
     <Route path="delete"  element={<DeleteBlog/>}/>
    </Routes>
    </BrowserRouter>
   
  );
}

export default App;
