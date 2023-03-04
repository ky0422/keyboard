import React from 'react'
import { Theme, ThemeContext } from '../../context/theme'
import { PropsBase } from '..'

export default ({ children, className }: React.PropsWithChildren<PropsBase>) => {
    const { toggle } = React.useContext(ThemeContext) as Theme
    return <span className={`${className} ${toggle ? 'text-gray-200' : 'text-zinc-900'}`}>{children}</span>
}
