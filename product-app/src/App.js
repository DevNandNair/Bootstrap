import logo from './logo.svg';
import './App.css';
import AddProduct from './components/AddProduct';
import SearchProduct from './components/SearchProduct';
import DeleteProduct from './components/DeleteProduct';
import ViewProducts from './components/ViewProducts';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path=""element={<ViewProducts></ViewProducts>}></Route>
    <Route path=""element={<search/>}></Route>
    <Route path=""element={<AddProduct/>}></Route>
    <Route path=""element={<AddProduct/>}></Route>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
