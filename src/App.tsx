import React from 'react'
import * as Components from './components'
import { Theme, ThemeContext } from './context/theme'

const App: React.FC = () => {
    const { toggle, toggleTheme } = React.useContext(ThemeContext) as Theme
    const setShowNoteName = Components.showNoteName((state) => state.toggleShowNoteName)

    return (
        <div>
            <div className='flex'>
                <Components.Toggle onClick={toggleTheme} toggle={toggle} className='pr-5'>
                    <Components.Span>{toggle ? 'Dark' : 'Light'}</Components.Span>
                </Components.Toggle>
                <Components.Toggle onClick={setShowNoteName} className='pr-5'>
                    <Components.Span>Show note names</Components.Span>
                </Components.Toggle>
                <Components.Range
                    options={{
                        defaultValue: 100,
                    }}
                >
                    <Components.Span>Volume</Components.Span>
                </Components.Range>
            </div>
            <div className='flex'>
                <Components.Keyboard.default octave={3} />
                <Components.Keyboard.default octave={4} />
                <Components.Keyboard.default octave={5} />
            </div>
        </div>
    )
}

export default App
