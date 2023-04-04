import React from 'react'
import { createRoot } from 'react-dom/client';
import App from './App.js'
import { Provider } from 'react-redux';
import { store } from './components/Store/Store.jsx';
import './App.css';
import { BrowserRouter } from 'react-router-dom';



const container = document.getElementById('root');
const root = createRoot(container);
root.render(


    <Provider store={store}>
        <App />
    </Provider>

    
)






