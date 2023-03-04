import { create } from 'zustand'

interface SetterStates {
    defaultOctave: number
    volume: number
}

interface TogglerStates {
    noteVisibility: boolean
}

type Prefix<T, P extends string, A extends boolean> = {
    [E in keyof T as E extends string ? `${P}${Capitalize<E>}` : never]: A extends true ? (value: T[E]) => void : () => void
} & T

export type Store = Prefix<SetterStates, 'set', true> & Prefix<TogglerStates, 'toggle', false>

export const useSettingsStore = create<Store>((set) => ({
    defaultOctave: 4,
    volume: 100,
    noteVisibility: true,
    setDefaultOctave: (octave: number) => set({ defaultOctave: octave }),
    setVolume: (volume: number) => set({ volume: volume }),
    toggleNoteVisibility: () => set((state) => ({ noteVisibility: !state.noteVisibility })),
}))
