import React from 'react'
import { Theme, ThemeContext } from '../../context/theme'

interface Props {
    className?: string
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
    options?: {
        min?: number
        max?: number
        defaultValue?: number
    }
}

export default ({ className, onChange, children, options }: React.PropsWithChildren<Props>) => {
    const { toggle } = React.useContext(ThemeContext) as Theme

    return (
        <div className={className}>
            <div className='relative inline-block mr-2 align-middle select-none transition duration-200 ease-in'>
                <label className='block overflow-hidden h-6'>
                    <input
                        type='range'
                        max={options?.max ?? 100}
                        min={options?.min ?? 0}
                        defaultValue={options?.defaultValue ?? 50}
                        className={`range w-full h-6 rounded-full appearance-none cursor-pointer text-gray-200 ${
                            toggle ? 'range-bg-dark bg-gray-700' : 'range-bg-light bg-gray-300'
                        }`}
                        onChange={onChange}
                    />
                </label>
            </div>
            <label className='text-xs'>{children}</label>
        </div>
    )
}
