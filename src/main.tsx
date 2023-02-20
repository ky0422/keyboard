import React from 'react'
import ReactDOM from 'react-dom/client'
import * as Components from './components'
import App from './App'
import { ThemeProvider } from './context/theme'

import '../global.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ThemeProvider>
            <Components.Background />
            <div className='m-0 min-h-[100vh] flex justify-center content-center w-[100%] h-[100%] flex-col items-center'>
                <App />
            </div>
        </ThemeProvider>
    </React.StrictMode>
)
