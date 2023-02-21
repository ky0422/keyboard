import { PropsWithChildren } from 'react'

export * as Keyboard from './keyboard'

export { default as Background } from './background'
export { default as Key } from './components/key'
export { default as KeyText, showNoteName } from './components/text'
export { default as Toggle } from './components/toggle'
export { default as Span } from './components/span'

export type PropsBase = PropsWithChildren<{ className: string }>
