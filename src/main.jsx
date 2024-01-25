import React from 'react'
import SmoothScroll from './Utils/SmoothScroll.jsx';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <SmoothScroll >
      <App />
     </SmoothScroll>
  // </React.StrictMode>,
)
