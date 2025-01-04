/**
 * @copyright 2025 Wisdom Michael (c)
 * @license Apache-2.0
 */

// Node modules for React and ReactDOM
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// Import the CSS file
import './index.css'

// Import the App component
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
