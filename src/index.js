import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import BemVindo from './BemVindo';
import Texto from "./Texto"
//import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    //<App />
    <>
      <BemVindo />
      <Texto />
    </>
);