import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from './App'
import { ThemeSwitchProvider } from './hooks/ThemeSwitcher'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeSwitchProvider>
      <App />
    </ThemeSwitchProvider>
  </React.StrictMode>
)
