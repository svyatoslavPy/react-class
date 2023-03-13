import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/reset.css'
import './styles/index.css'
import Clock from './components/Clock'
import logo from './img/react-icon.png'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<React.StrictMode>
    <Clock icon = {logo}>
      {4} 
    </Clock>
	</React.StrictMode>
)
