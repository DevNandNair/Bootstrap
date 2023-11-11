import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddMovies from './components/AddMovies';
import View from './components/View';
import Search from './components/Search';
import DeleteMovie from './components/DeleteMovie';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="" element={<View/>}></Route>
      <Route path="add" element={<AddMovies/>}></Route>
      <Route path="search" element={<Search/>}></Route>
      <Route path="delete" element={<DeleteMovie/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
