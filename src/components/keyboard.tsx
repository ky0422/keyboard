import * as Components from '.'
import Key from './components/key'

interface Props extends Components.PropsBase {
    octave: number
}

export interface Key {
    type: KeyType
    note: string
}

export enum KeyType {
    White,
    Black,
}

export default ({ octave }: Props) => {
    const keys: Array<Key> = [
        { type: KeyType.White, note: 'C' },
        { type: KeyType.Black, note: 'C#' },
        { type: KeyType.White, note: 'D' },
        { type: KeyType.Black, note: 'D#' },
        { type: KeyType.White, note: 'E' },
        { type: KeyType.White, note: 'F' },
        { type: KeyType.Black, note: 'F#' },
        { type: KeyType.White, note: 'G' },
        { type: KeyType.Black, note: 'G#' },
        { type: KeyType.White, note: 'A' },
        { type: KeyType.Black, note: 'A#' },
        { type: KeyType.White, note: 'B' },
    ]

    return (
        <div className='flex py-4'>
            {keys.map((key, index) => {
                const note = key.note == 'C' ? `${key.note}${octave}` : `${key.note}`
                return <Key key={index} type={key.type} note={`${key.note}${octave}`} text={note} />
            })}
        </div>
    )
}
