import React from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Features from './components/features/Features';
import Menu from './components/menu/Menu';

function App() {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Features />
      <Menu />
    </>
  );
}

export default App;
