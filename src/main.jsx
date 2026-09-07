import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import './index.css'
import { Jobprovider } from './JobContext'
createRoot(document.getElementById('root')).render(
    <Jobprovider>
        <Router>
            <App/>
        </Router>
    </Jobprovider>
)
