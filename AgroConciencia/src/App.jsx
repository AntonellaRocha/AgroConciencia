import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Inicio from './pages/Inicio'
import Noticias from './pages/Noticias';
import SobreNosotros from './pages/SobreNosotros';
import Contacto from './pages/Contacto';
import IniciarSesion from './pages/IniciarSesion';

const routes = [
  { path: "/", element: <Inicio /> },
  { path: "/noticias", element: <Noticias /> },
  { path: "/sobre-nosotros", element: <SobreNosotros /> },
  { path: "/contacto", element: <Contacto /> },
  { path: "/iniciar-sesion", element: <IniciarSesion /> },
];

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {routes.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;



