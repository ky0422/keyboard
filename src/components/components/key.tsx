import React from 'react'
import { KeyText, PropsBase, Keyboard } from '..'
import { Theme, ThemeContext } from '../../context/theme'

interface Props extends Partial<PropsBase> {
    type: Keyboard.KeyType
    note: string
    text?: string
}

const replaceClass = (e: HTMLElement, className: string, newClass: string) => {
    e.classList.remove(className)
    e.className += ` ${newClass}`
}

const playNote = (note: string): Promise<void> =>
    new Promise((resolve) => {
        const audio = document.getElementById(note) as HTMLAudioElement
        audio.currentTime = 0
        audio.play()
        audio.addEventListener('ended', () => resolve())
    })

const onWhiteClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, toggle: boolean) => {
    const old = toggle ? 'bg-zinc-300' : 'bg-background-light'
    const pressed = toggle ? 'bg-zinc-400' : 'bg-zinc-200'

    replaceClass(e.target as HTMLElement, old, pressed)
    playNote((e.target as HTMLElement).dataset.note as string).then(() => replaceClass(e.target as HTMLElement, pressed, old))
}

const onBlackClick = (e: React.MouseEvent<HTMLElement, MouseEvent>, toggle: boolean) => {
    const old = toggle ? 'bg-zinc-800' : 'bg-black'
    const pressed = toggle ? 'bg-zinc-900' : 'bg-zinc-700'

    replaceClass(e.target as HTMLElement, old, pressed)
    playNote((e.target as HTMLElement).dataset.note as string).then(() => replaceClass(e.target as HTMLElement, pressed, old))
}

const onTextClick = (e: React.MouseEvent<HTMLElement, MouseEvent>, note: string) => {
    e.stopPropagation()
    ;(document.getElementById(`${note}Key`) as HTMLDivElement).click()
}

export default ({ type, note, text }: Props) => {
    const { toggle } = React.useContext(ThemeContext) as Theme

    if (type === Keyboard.KeyType.White) {
        return (
            <div
                id={`${note}Key`}
                data-note={note}
                className={`key var-width-4vw border-[1.5px] border-solid ${toggle ? 'bg-gray-300 border-gray-500' : 'bg-background-light border-gray-300'}`}
                onClick={(e) => onWhiteClick(e, toggle)}
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
                onClick={(e) => onBlackClick(e, toggle)}
            >
                <KeyText onClick={(e) => onTextClick(e, note)}>{text ?? note}</KeyText>
            </div>
        )
    }
}
