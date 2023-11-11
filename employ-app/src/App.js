import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import View from './components/View';
import { Delete } from './components/Delete';
import Search from './components/Search';
import Add from './components/Add';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="" element={<View></View>}></Route>
      <Route path="delete" element={<Delete></Delete>}></Route>
      <Route path="search" element={<Search></Search>}></Route>
      <Route path="add" element={<Add></Add>}></Route>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
