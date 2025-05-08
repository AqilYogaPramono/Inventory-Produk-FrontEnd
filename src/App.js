import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/nav';
import Home from './pages/home'
import Produk from './pages/produk';
import Kategori from './pages/kategori';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/produk' element={<Produk/>}/>
        <Route path='/kategori' element={<Kategori/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
