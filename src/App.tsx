import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './assets/components/header/header';
import Footer from './assets/components/footer/footer';
import Home from './Pages/Home';


const App: React.FC = () => {

  return (
    <BrowserRouter>
        <>
          <Header />
            <Routes>
              <Route path="/" element = {<Home/>}/>
              <Route path="*" element = {<h1>Error 418 : i'm a TeaPot...</h1>}/>
            </Routes>
          <Footer />
          </>
      </BrowserRouter>
  )
}

export default App;
