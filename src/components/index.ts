import { PropsWithChildren } from 'react'

export * as Keyboard from './keyboard'

export { default as Background } from './background'
export { default as Key } from './components/key'
export { default as KeyText } from './components/text'

export type PropsBase = PropsWithChildren<{ className: string }>
