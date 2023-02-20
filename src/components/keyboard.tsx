import * as Components from '.'

interface Props extends Partial<Components.PropsBase> {
    octave: number
}

export default (props: Props) => {
    return (
        <div className='flex'>
            <div>
                <Components.White text={`C${props.octave}`} note='C' />
            </div>
            <Components.Black note='C#' />
            <Components.White note='D' />
            <Components.Black note='D#' />
            <Components.White note='E' />
            <Components.White note='F' />
            <Components.Black note='F#' />
            <Components.White note='G' />
            <Components.Black note='G#' />
            <Components.White note='A' />
            <Components.Black note='A#' />
            <Components.White note='B' />
        </div>
    )
}
