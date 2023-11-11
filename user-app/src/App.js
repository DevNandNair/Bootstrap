import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import View from './components/View';
import AddUser from './components/AddUser';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<View/>}></Route>
        <Route path='add' element={<AddUser/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
