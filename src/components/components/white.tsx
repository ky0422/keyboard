import { KeyProps, KeyText } from '..'

export default (props: KeyProps) => {
    return (
        <div data-note={props.note} className='key var-width-4vw bg-background-light border-x-stone-700 border-solid border'>
            <KeyText text={props.text ?? props.note} />
        </div>
    )
}
