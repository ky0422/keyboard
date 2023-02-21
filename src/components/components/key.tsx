import { KeyText, PropsBase, Keyboard } from '..'

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

const onWhiteClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    replaceClass(e.target as HTMLElement, 'bg-background-light', 'bg-gray-200')
    playNote((e.target as HTMLElement).dataset.note as string).then(() => replaceClass(e.target as HTMLElement, 'bg-gray-200', 'bg-background-light'))
}

const onBlackClick = (e: React.MouseEvent<HTMLElement, MouseEvent>) => {
    replaceClass(e.target as HTMLElement, 'bg-black', 'bg-gray-700')
    playNote((e.target as HTMLElement).dataset.note as string).then(() => replaceClass(e.target as HTMLElement, 'bg-gray-700', 'bg-black'))
}

const onTextClick = (e: React.MouseEvent<HTMLElement, MouseEvent>, note: string) => {
    e.stopPropagation()
    ;(document.getElementById(`${note}Key`) as HTMLDivElement).click()
}

export default ({ type, note, text }: Props) => {
    if (type === Keyboard.KeyType.White) {
        return (
            <div id={`${note}Key`} data-note={note} className='key var-width-4vw bg-background-light border-[1.5px] border-black border-solid' onClick={onWhiteClick}>
                <KeyText onClick={(e) => onTextClick(e, note)}>{text ?? note}</KeyText>
            </div>
        )
    } else {
        return (
            <div id={`${note}Key`} data-note={note} className='key var-width-2-5vw bg-black black' onClick={onBlackClick}>
                <KeyText onClick={(e) => onTextClick(e, note)}>{text ?? note}</KeyText>
            </div>
        )
    }
}
