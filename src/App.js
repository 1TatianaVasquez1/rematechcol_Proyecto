import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import AdminAddProduct from './components/AdminAddProduct';
import AdminViewProducts from './components/AdminViewProducts';
import AdminViewSales from './components/AdminViewSales';
import ClientViewProducts from './components/ClientViewProducts';
import ClientViewCart from './components/ClientViewCart';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
    <div className="App">
      <Header />
      <Routes>
      <Route path="/admin/add-product" component={AdminAddProduct} />
      <Route path="/admin/view-products" component={AdminViewProducts} />
      <Route path="/admin/view-sales" component={AdminViewSales} />
      <Route path="/client/view-products" component={ClientViewProducts} />
      <Route path="/client/view-cart" component={ClientViewCart} />
      </Routes>
      <MainContent />
      <Footer />
    </div>
    <div className="footer-images">
          <img src="/images\image 2.png" alt="Imagen 1" />
          <img src="/images/image 1.png" alt="Imagen 2" />
          <img src="/images/image 3.png" alt="Imagen 3" />
          <img src="/images/image 4.png" alt="Imagen 4" />
        </div>
    </Router>
  );
}

export default App;
