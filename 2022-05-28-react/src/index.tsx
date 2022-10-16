import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
//import App from './next/App'
import App from './galadarbs/App.tsx' 

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
) 