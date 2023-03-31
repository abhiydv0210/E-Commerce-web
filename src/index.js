import React from 'react'
import  { createRoot }  from 'react-dom/client';
import App from './App.js'
import './App.css';
// import { Store } from './Store'
// import { Provider } from 'react-redux'



const container = document.getElementById('root');
const root = createRoot(container);


root.render(<App/>);


