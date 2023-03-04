import React from 'react'
import { MouseEventHandler, PropsWithChildren } from 'react'
import { Theme, ThemeContext } from '../../context/theme'
import { PropsBase } from '..'

interface Props extends PropsBase {
    onClick?: MouseEventHandler<HTMLElement>
    toggle?: boolean
}

export default ({ children, onClick, toggle, className }: PropsWithChildren<Props>) => {
    const { toggle: themeToggle } = React.useContext(ThemeContext) as Theme
    return (
        <div className={className}>
            <div className='relative inline-block w-10 mr-2 align-middle select-none'>
                <label className={`block overflow-hidden h-6 rounded-full cursor-pointer ${themeToggle ? 'bg-gray-700 toggle-label-dark' : 'bg-gray-300 toggle-label'}`}>
                    <input
                        type='checkbox'
                        className={`absolute block w-6 h-6 rounded-full appearance-none cursor-pointer ${
                            themeToggle ? 'bg-gray-300 toggle-checkbox-dark' : 'bg-white toggle-checkbox'
                        }`}
                        defaultChecked={toggle}
                        onClick={onClick}
                    />
                </label>
            </div>
            <label className='text-xs'>{children}</label>
        </div>
    )
}
