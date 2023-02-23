import React, { useEffect } from 'react'
import { create } from 'zustand'
import { KeyText, PropsBase, Keyboard } from '..'
import { Theme, ThemeContext } from '../../context/theme'

interface Props extends Partial<PropsBase> {
    type: Keyboard.KeyType
    note: string
    text?: string
}

interface State {
    volume: number
    setVolume: (volume: number) => void
}

export const useVolumeStore = create<State>((set) => ({
    volume: 100,
    setVolume: (volume: number) => set({ volume }),
}))

const replaceClass = (e: HTMLElement, className: string, newClass: string) => {
    e.classList.remove(className)
    e.className += ` ${newClass}`
}

const playNote = (note: string, volume: number): Promise<void> =>
    new Promise((resolve) => {
        const audio = document.getElementById(note) as HTMLAudioElement
        audio.currentTime = 0
        audio.volume = volume
        audio.play()
        audio.addEventListener('ended', () => resolve())
    })

const onWhiteClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, toggle: boolean, volume: number) => {
    const old = toggle ? 'bg-zinc-300' : 'bg-background-light'
    const pressed = toggle ? 'bg-zinc-400' : 'bg-zinc-200'

    replaceClass(e.target as HTMLElement, old, pressed)
    playNote((e.target as HTMLElement).dataset.note as string, volume).then(() => replaceClass(e.target as HTMLElement, pressed, old))
}

const onBlackClick = (e: React.MouseEvent<HTMLElement, MouseEvent>, toggle: boolean, volume: number) => {
    const old = toggle ? 'bg-zinc-800' : 'bg-black'
    const pressed = toggle ? 'bg-zinc-900' : 'bg-zinc-700'

    replaceClass(e.target as HTMLElement, old, pressed)
    playNote((e.target as HTMLElement).dataset.note as string, volume).then(() => replaceClass(e.target as HTMLElement, pressed, old))
}

const onTextClick = (e: React.MouseEvent<HTMLElement, MouseEvent>, note: string) => {
    e.stopPropagation()
    ;(document.getElementById(`${note}Key`) as HTMLDivElement).click()
}

interface KeyDown {
    key: string
    note: string
}

const keydown = (octave: number): Array<KeyDown> => [
    { key: 'z', note: `C${octave - 1}` },
    { key: 's', note: `C#${octave - 1}` },
    { key: 'x', note: `D${octave - 1}` },
    { key: 'd', note: `D#${octave - 1}` },
    { key: 'c', note: `E${octave - 1}` },
    { key: 'v', note: `F${octave - 1}` },
    { key: 'g', note: `F#${octave - 1}` },
    { key: 'b', note: `G${octave - 1}` },
    { key: 'h', note: `G#${octave - 1}` },
    { key: 'n', note: `A${octave - 1}` },
    { key: 'j', note: `A#${octave - 1}` },
    { key: 'm', note: `B${octave - 1}` },
    { key: 'q', note: `C${octave}` },
    { key: '2', note: `C#${octave}` },
    { key: 'w', note: `D${octave}` },
    { key: '3', note: `D#${octave}` },
    { key: 'e', note: `E${octave}` },
    { key: 'r', note: `F${octave}` },
    { key: '5', note: `F#${octave}` },
    { key: 't', note: `G${octave}` },
    { key: '6', note: `G#${octave}` },
    { key: 'y', note: `A${octave}` },
    { key: '7', note: `A#${octave}` },
    { key: 'u', note: `B${octave}` },
    { key: 'i', note: `C${octave + 1}` },
    { key: '9', note: `C#${octave + 1}` },
    { key: 'o', note: `D${octave + 1}` },
    { key: '0', note: `D#${octave + 1}` },
    { key: 'p', note: `E${octave + 1}` },
    { key: '[', note: `F${octave + 1}` },
    { key: '=', note: `F#${octave + 1}` },
    { key: ']', note: `G${octave + 1}` },
    { key: '.', note: `G#${octave + 1}` },
    { key: ';', note: `A${octave + 1}` },
    { key: '/', note: `A#${octave + 1}` },
    { key: "'", note: `B${octave + 1}` },
]

export default ({ type, note, text }: Props) => {
    const { toggle } = React.useContext(ThemeContext) as Theme
    const volume = useVolumeStore((state) => state.volume / 100)

    useEffect(() => {
        const callback = (e: KeyboardEvent) => {
            if (e.repeat) return
            const key = keydown(4).find((k) => k.key === e.key)
            if (key) {
                const element = document.getElementById(`${key.note}Key`) as HTMLDivElement
                element.click()
            }
        }
        document.addEventListener('keydown', callback)

        return () => {
            document.removeEventListener('keydown', callback)
        }
    })

    if (type === Keyboard.KeyType.White) {
        return (
            <div
                id={`${note}Key`}
                data-note={note}
                className={`key var-width-4vw border-[1.5px] border-solid ${toggle ? 'bg-gray-300 border-gray-500' : 'bg-background-light border-gray-300'}`}
                onClick={(e) => onWhiteClick(e, toggle, volume)}
            >
                <KeyText onClick={(e) => onTextClick(e, note)}>{text ?? note}</KeyText>
            </div>
        )
    } else {
        return (
            <div
                id={`${note}Key`}
                data-note={note}
                className={`key var-width-2-5vw black ${toggle ? 'bg-zinc-800' : 'bg-black'}`}
                onClick={(e) => onBlackClick(e, toggle, volume)}
            >
                <KeyText onClick={(e) => onTextClick(e, note)}>{text ?? note}</KeyText>
            </div>
        )
    }
}
