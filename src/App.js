import '../src/App.css';
import React from "react";
import Header from './Layouts/header/Header';
import Footer from './Layouts/footer/Footer';
import Centerpage from './components/Centerpage/Centerpage';

function App() {
  return (
    <>
    <Header />
    <Centerpage />
    <Footer />
    </>
  );
}

export default App;
