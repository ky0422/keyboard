import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import * as Components from './components'
import { ThemeProvider } from './context/theme'
import { Fade } from 'react-awesome-reveal'

import '../global.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ThemeProvider>
            <Components.Background />
            <div className='absolute top-0 left-0 w-full bg-transparent select-none'>
                <Fade delay={300}>
                    <Components.Center>
                        <Components.Title />
                    </Components.Center>
                </Fade>

                <App inc={1} toggleButton />
                <App inc={5} />
                <App inc={10} />

                <Components.Center>
                    <Fade delay={300}>
                        <Components.Text className='text-2xl sm:text-3xl'>
                            <a href='https://github.com/ky0422/ky0422.github.io'>GITHUB</a>
                        </Components.Text>

                        <Components.Text className='text-2xl sm:text-3xl'>
                            <a href='https://ky0422.tistory.com'>TISTORY</a>
                        </Components.Text>
                    </Fade>
                </Components.Center>
            </div>
        </ThemeProvider>
    </React.StrictMode>
)
