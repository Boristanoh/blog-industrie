import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import reportWebVitals from './reportWebVitals';

// Importation de style
import './styles/index.css';
import './styles/fonts.css';

// Layouts
import PublicLayout from './layouts/PublicLayout';
// import AdminLayout from './layouts/AdminLayout';

//Importation des pages
import App from './pages/App';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import Error from './pages/Error';
import Contact from "./pages/Contact";
// index.js ou App.js
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import 'bootstrap-icons/font/bootstrap-icons.css';

// Importation style global
import GlobalStyle from './utils/style/GlobalStyle';

document.title="Blog de l'industrie"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      
      <Routes>
        <Route element={<PublicLayout />}>
          <Route path="/" element={<App />} />
          <Route path="/home" element={<Home />} />
          <Route path="/a-propos" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </Router>
    {/* <App /> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();




