import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/styles/index.css'
import { BrowserRouter } from "react-router-dom";
import { MenuProvider } from './assets/components/LogicHeader';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <BrowserRouter>
    <MenuProvider>


    <App />
    </MenuProvider>
    
    </BrowserRouter>
  </React.StrictMode>,
)
