import { create } from 'zustand'
import { MouseEventHandler, PropsWithChildren } from 'react'

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

export default ({ children, onClick, className }: PropsWithChildren<Props>) => (
    <div className={`text-[0px] lg:text-base text-stone-400 absolute bottom-1 left-[50%] translate-x-[-50%] bg-transparent ${className}`} onClick={onClick}>
        {useNoteVisibility().noteVisibility ? children : null}
    </div>
)
