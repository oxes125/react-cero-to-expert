import React from 'react'
import ReactDOM from 'react-dom/client'
import { GifExpertApp } from './GitExpertApp'
import './styles.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>  {/* identifica componentes error se remueve el produccion  */}
    <GifExpertApp />
  </React.StrictMode>
)
