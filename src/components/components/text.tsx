import { MouseEventHandler, PropsWithChildren } from 'react'

interface Props {
    onClick?: MouseEventHandler<HTMLElement>
}

export default ({ children, onClick }: PropsWithChildren<Props>) => (
    <div className='text-[0px] lg:text-base text-stone-400 absolute bottom-1 left-[50%] translate-x-[-50%] bg-transparent' onClick={onClick}>
        {children}
    </div>
)
