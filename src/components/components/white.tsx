import { KeyProps, KeyText } from '..'

export default (props: KeyProps) => {
    return (
        <div data-note={props.note} className='key var-width-4vw bg-background-light border-[1.5px] border-black border-solid'>
            <KeyText>{props.text ?? props.note}</KeyText>
        </div>
    )
}
