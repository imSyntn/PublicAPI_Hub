import React from 'react'
import SmoothScroll from './Utils/SmoothScroll.jsx';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';

ReactDOM.createRoot(document.getElementById('root')).render(
    <SmoothScroll >
      <App />
     </SmoothScroll>
)
serviceWorkerRegistration.unregister();