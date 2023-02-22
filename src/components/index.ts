import { PropsWithChildren } from 'react'

export * as Keyboard from './keyboard'
export { default as Background } from './background'
export { default as Key, useVolumeStore } from './components/key'
export { default as KeyText, useNoteVisibility } from './components/text'
export { default as Toggle } from './components/toggle'
export { default as Span } from './components/span'
export { default as Range } from './components/range'

export type PropsBase = PropsWithChildren<{ className: string }>
