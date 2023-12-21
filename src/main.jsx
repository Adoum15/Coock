import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './assets/styles/index.scss'
import { ApiContext } from './context/ApiContext.jsx'

const root = ReactDOM.createRoot(document.getElementById('app'))
root.render(
  <React.StrictMode>
    <ApiContext.Provider value="https://restapi.fr/api/recipes">
    <App />
    </ApiContext.Provider>
  </React.StrictMode>,
)

