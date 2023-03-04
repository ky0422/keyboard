import { Theme, ThemeContext } from '../../context/theme'
import { MouseEventHandler, PropsWithChildren, useContext } from 'react'
import { PropsBase } from '..'
import { useSettingsStore } from '../../settings'

interface Props extends PropsBase {
    onClick?: MouseEventHandler<HTMLElement>
}

export default ({ children, onClick, className }: PropsWithChildren<Props>) => {
    const { toggle } = useContext(ThemeContext) as Theme
    const { noteVisibility } = useSettingsStore()

    return (
        <div
            className={`text-[0px] lg:text-base absolute bottom-1 left-[50%] translate-x-[-50%] bg-transparent ${className} ${
                toggle ? 'text-stone-600' : 'text-stone-400'
            }`}
            onClick={onClick}
        >
            {noteVisibility ? children : null}
        </div>
    )
}
