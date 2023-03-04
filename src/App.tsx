import React from 'react'
import * as Components from './components'
import { Theme, ThemeContext } from './context/theme'
import { useSettingsStore } from './settings'

const App: React.FC = () => {
    const { toggle, toggleTheme } = React.useContext(ThemeContext) as Theme
    const { defaultOctave, setVolume, setDefaultOctave, toggleNoteVisibility } = useSettingsStore()

    return (
        <div>
            <div className='flex'>
                <Components.Toggle onClick={toggleTheme} toggle={toggle} className='pr-5'>
                    <Components.Span>{toggle ? 'Dark' : 'Light'}</Components.Span>
                </Components.Toggle>
                <Components.Toggle onClick={toggleNoteVisibility} className='pr-5'>
                    <Components.Span>Show note names</Components.Span>
                </Components.Toggle>
                <Components.Range
                    options={{
                        defaultValue: 100,
                    }}
                    onChange={(e) => setVolume(Number(e.target.value))}
                    className='pr-5'
                >
                    <Components.Span>Volume</Components.Span>
                </Components.Range>
                <Components.Range
                    options={{
                        defaultValue: 4,
                        min: 2,
                        max: 6,
                    }}
                    onChange={(e) => setDefaultOctave(Number(e.target.value))}
                >
                    <Components.Span>Middle Octave ({defaultOctave})</Components.Span>
                </Components.Range>
            </div>
            <div className='flex'>
                <Components.Keyboard.default octave={defaultOctave - 1} />
                <Components.Keyboard.default octave={defaultOctave} />
                <Components.Keyboard.default octave={defaultOctave + 1} />
            </div>
        </div>
    )
}

export default App
