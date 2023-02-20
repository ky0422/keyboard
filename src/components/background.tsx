import React from 'react'
import { Theme, ThemeContext } from '../context/theme'

export default () => {
    const theme = React.useContext(ThemeContext) as Theme

    return <div className={`fixed w-[100vw] h-[100vh] ${theme.toggle ? 'bg-zinc-900' : 'bg-gray-200'}`} />
}
