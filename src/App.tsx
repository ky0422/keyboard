import React from 'react'
import * as Components from './components'

const App: React.FC = () => (
    <div className='flex'>
        <Components.Keyboard.default octave={3} />
        <Components.Keyboard.default octave={4} />
        <Components.Keyboard.default octave={5} />
    </div>
)

export default App
