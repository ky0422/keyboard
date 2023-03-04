import React, { useEffect } from 'react'
import { create } from 'zustand'
import { KeyText, PropsBase, Keyboard } from '..'
import { Theme, ThemeContext } from '../../context/theme'
import { useSettingsStore } from '../../settings'

interface Props extends Partial<PropsBase> {
    type: Keyboard.KeyType
    note: string
    text?: string
}

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

const w_old_b = 'bg-zinc-300'
const w_old_w = 'bg-background-light'
const w_pressed_b = 'bg-zinc-400'
const w_pressed_w = 'bg-zinc-200'

const b_old_b = 'bg-zinc-800'
const b_old_w = 'bg-black'
const b_pressed_b = 'bg-zinc-900'
const b_pressed_w = 'bg-zinc-700'

const onWhiteClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, toggle: boolean, volume: number) => {
    const old = toggle ? w_old_b : w_old_w
    const pressed = toggle ? w_pressed_b : w_pressed_w

    replaceClass(e.target as HTMLElement, old, pressed)
    playNote((e.target as HTMLElement).dataset.note as string, volume).then(() => replaceClass(e.target as HTMLElement, pressed, old))
}

const onBlackClick = (e: React.MouseEvent<HTMLElement, MouseEvent>, toggle: boolean, volume: number) => {
    const old = toggle ? b_old_b : b_old_w
    const pressed = toggle ? b_pressed_b : b_pressed_w

    replaceClass(e.target as HTMLElement, old, pressed)
    playNote((e.target as HTMLElement).dataset.note as string, volume).then(() => replaceClass(e.target as HTMLElement, pressed, old))
}

const onTextClick = (e: React.MouseEvent<HTMLElement, MouseEvent>, note: string) => {
    e.stopPropagation()
    ;(document.getElementById(`${note}Key`) as HTMLDivElement).click()
}

interface KeyBind {
    key: string
    note: string
}

const keyBinds = (octave: number): Array<KeyBind> => [
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
    { key: 'l', note: `G#${octave + 1}` },
    { key: '.', note: `A${octave + 1}` },
    { key: ';', note: `A#${octave + 1}` },
    { key: '/', note: `B${octave + 1}` },
]

export default ({ type, note, text }: Props) => {
    const { toggle } = React.useContext(ThemeContext) as Theme
    const [volume, defaultOctave] = useSettingsStore((state) => [state.volume / 100, state.defaultOctave])

    useEffect(() => {
        const keydown = (e: KeyboardEvent) => {
            if (e.repeat) return
            const key = keyBinds(defaultOctave).find((k) => k.key === e.key)
            if (key) {
                const element = document.getElementById(`${key.note}Key`) as HTMLDivElement
                element.click()
            }
        }
        document.addEventListener('keydown', keydown)

        const keyup = (e: KeyboardEvent) => {
            const key = keyBinds(4).find((k) => k.key === e.key)
            if (key) {
                const element = document.getElementById(`${key.note}Key`) as HTMLDivElement

                if (element.classList.contains(w_pressed_b)) replaceClass(element, w_pressed_b, w_old_b)
                if (element.classList.contains(w_pressed_w)) replaceClass(element, w_pressed_w, w_old_w)
                if (element.classList.contains(b_pressed_b)) replaceClass(element, b_pressed_b, b_old_b)
                if (element.classList.contains(b_pressed_w)) replaceClass(element, b_pressed_w, b_old_w)
            }
        }
        document.addEventListener('keyup', keyup)

        return () => {
            document.removeEventListener('keydown', keydown)
            document.removeEventListener('keyup', keyup)
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
