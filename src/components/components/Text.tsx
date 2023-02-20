import { PropsWithChildren } from 'react'

export default ({ children }: PropsWithChildren) => {
    return <div className='text-[0px] lg:text-base text-stone-400 absolute bottom-1 left-[50%] translate-x-[-50%]'>{children}</div>
}
