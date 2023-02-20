import React from 'react'
import * as Components from './components'

const App: React.FC = () => (
    <div className='flex'>
        <Components.Keyboard octave={3} />
        <Components.Keyboard octave={4} />
        <Components.Keyboard octave={5} />
    </div>
)

export default App
