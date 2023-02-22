import { create } from 'zustand'
import { MouseEventHandler, PropsWithChildren } from 'react'

interface Props {
    onClick?: MouseEventHandler<HTMLElement>
    className?: string
}

interface State {
    showNoteName: boolean
    toggleShowNoteName: () => void
}

export const showNoteName = create<State>((set) => ({
    showNoteName: false,
    toggleShowNoteName: () => set((state) => ({ showNoteName: !state.showNoteName })),
}))

export default ({ children, onClick, className }: PropsWithChildren<Props>) => (
    <div className={`text-[0px] lg:text-base text-stone-400 absolute bottom-1 left-[50%] translate-x-[-50%] bg-transparent ${className}`} onClick={onClick}>
        {showNoteName((state) => state.showNoteName) ? children : null}
    </div>
)
