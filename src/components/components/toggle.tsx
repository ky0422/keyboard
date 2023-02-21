import { MouseEventHandler, PropsWithChildren } from 'react'

interface Props {
    onClick?: MouseEventHandler<HTMLElement>
    toggle?: boolean
}

export default ({ children, onClick, toggle }: PropsWithChildren<Props>) => (
    <div>
        <div className='relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in'>
            <input
                type='checkbox'
                name='toggle'
                id='toggle'
                className='toggle-checkbox absolute block w-6 h-6 rounded-full bg-white appearance-none cursor-pointer'
                onClick={onClick}
                defaultChecked={toggle}
            />
            <label htmlFor='toggle' className='toggle-label block overflow-hidden h-6 rounded-full bg-gray-300 cursor-pointer'></label>
        </div>
        <label htmlFor='toggle' className='text-xs text-gray-900'>
            {children}
        </label>
    </div>
)
