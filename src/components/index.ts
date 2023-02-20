import { PropsWithChildren } from 'react'
export { default as White } from './components/white'
export { default as Black } from './components/black'
export { default as KeyText } from './components/text'
export { default as Keyboard } from './keyboard'

export type PropsBase = PropsWithChildren<{ className: string }>

export interface KeyProps extends Partial<PropsBase> {
    note: string,
    text?: string
}
