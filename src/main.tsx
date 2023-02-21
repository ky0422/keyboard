import React from 'react'
import ReactDOM from 'react-dom/client'
import * as Components from './components'
import App from './App'
import { ThemeProvider } from './context/theme'

import '../global.css'

interface Note {
    sharp: string
    flat: string
}

const notes = [
    { sharp: 'C', flat: 'C' },
    { sharp: 'C#', flat: 'Db' },
    { sharp: 'D', flat: 'D' },
    { sharp: 'D#', flat: 'Eb' },
    { sharp: 'E', flat: 'E' },
    { sharp: 'F', flat: 'F' },
    { sharp: 'F#', flat: 'Gb' },
    { sharp: 'G', flat: 'G' },
    { sharp: 'G#', flat: 'Ab' },
    { sharp: 'A', flat: 'A' },
    { sharp: 'A#', flat: 'Bb' },
    { sharp: 'B', flat: 'B' },
]
const octaves = [1, 2, 3, 4, 5, 6, 7]

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ThemeProvider>
            <Components.Background />
            <div className='m-0 min-h-[100vh] flex justify-center content-center w-[100%] h-[100%] flex-col items-center'>
                <p className='text-black'>test</p>
                <App />
            </div>
        </ThemeProvider>

        {octaves.map((octave) => {
            return notes.map(({ sharp, flat }) => {
                return <audio key={`${sharp}${octave}`} id={`${sharp}${octave}`} src={`./resources/notes/${flat}${octave}.mp3`} />
            })
        })}
    </React.StrictMode>
)
