import React from 'react'
import { Theme, ThemeContext } from '../../context/theme'

interface Props {
    className?: string
}

export default ({ children, className }: React.PropsWithChildren<Props>) => {
    const { toggle } = React.useContext(ThemeContext) as Theme
    return <span className={`${className} ${toggle ? 'text-gray-200' : 'text-zinc-900'}`}>{children}</span>
}
