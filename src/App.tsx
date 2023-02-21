import React from 'react'
import * as Components from './components'
import { Theme, ThemeContext } from './context/theme'

const App: React.FC = () => {
    const { toggle, toggleTheme } = React.useContext(ThemeContext) as Theme

    return (
        <div>
            <Components.Toggle onClick={toggleTheme} toggle={toggle}>
                {toggle ? <span className='text-gray-200'>Dark</span> : <span className='text-zinc-900'>Light</span>}
            </Components.Toggle>
            <div className='flex'>
                <Components.Keyboard.default octave={3} />
                <Components.Keyboard.default octave={4} />
                <Components.Keyboard.default octave={5} />
            </div>
        </div>
    )
}

export default App
