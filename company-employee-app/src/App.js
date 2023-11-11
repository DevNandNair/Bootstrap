import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewAll from './components/ViewAll';
import Add from './components/Add';
import Delete from './components/Delete';
import Search from './components/Search';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='' element={<ViewAll/>}></Route>
    <Route path='' element={<Add/>}></Route>
    <Route path='' element={<Delete/>}></Route>
    <Route path='' element={<Search/>}></Route>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
