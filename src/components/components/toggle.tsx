import { MouseEventHandler, PropsWithChildren } from 'react'

interface Props {
    onClick?: MouseEventHandler<HTMLElement>
    toggle?: boolean
    className?: string
}

export default ({ children, onClick, toggle, className }: PropsWithChildren<Props>) => (
    <div className={className}>
        <div className='relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in'>
            <label className='toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer'>
                <input
                    type='checkbox'
                    className='toggle-checkbox absolute block w-6 h-6 rounded-full bg-white appearance-none cursor-pointer'
                    defaultChecked={toggle}
                    onClick={onClick}
                />
            </label>
        </div>
        <label className='text-xs text-gray-900'>{children}</label>
    </div>
)
