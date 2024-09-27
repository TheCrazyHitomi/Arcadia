import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Animaux from './Pages/Animaux';
import Animation from './Pages/Animation';
import Habitats from './Pages/Habitats';
import Header from './assets/components/header/header';
import Footer from './assets/components/footer/footer';

const App: React.FC = () => {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/animation" element={<Animation />} />
        <Route path="/habitats" element={<Habitats />} />
        <Route path="/animaux" element={<Animaux />} />
        <Route path="*" element={<h1>Error 418: I'm a Teapot</h1>} />
      </Routes>
      <Footer/>
    </Router>
  );
};

export default App;