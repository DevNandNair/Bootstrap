import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import View from './component/View';
import Add from './component/Add';
import Delete from './component/Delete';
import Dosearch from './component/Dosearch';




function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="" element={<View/>}></Route>
      <Route path="add" element={<Add/>}></Route>
      <Route path="delete" element={<Delete/>}></Route>
      <Route path="search" element={<Dosearch/>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
