import { create } from 'zustand'
import { Theme, ThemeContext } from '../../context/theme'
import { MouseEventHandler, PropsWithChildren, useContext } from 'react'

interface Props {
    onClick?: MouseEventHandler<HTMLElement>
    className?: string
}

interface State {
    noteVisibility: boolean
    toggleNoteVisibility: () => void
}

export const useNoteVisibility = create<State>((set) => ({
    noteVisibility: false,
    toggleNoteVisibility: () => set((state) => ({ noteVisibility: !state.noteVisibility })),
}))

export default ({ children, onClick, className }: PropsWithChildren<Props>) => {
    const { toggle } = useContext(ThemeContext) as Theme

    return (
        <div className={`text-[0px] lg:text-base absolute bottom-1 left-[50%] translate-x-[-50%] bg-transparent ${className} ${
            toggle ? 'text-stone-600' : 'text-stone-400'
        }`} onClick={onClick}>
            {useNoteVisibility().noteVisibility ? children : null}
        </div>
    )
}
