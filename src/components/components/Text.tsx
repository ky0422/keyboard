interface Props {
    text: string
}

export default (props: Props) => {
    return <div className='text-[0px] lg:text-base text-stone-400 absolute bottom-1 left-[50%] translate-x-[-50%]'>{props.text}</div>
}
