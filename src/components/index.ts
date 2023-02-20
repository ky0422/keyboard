import { PropsWithChildren } from 'react'

export { default as Text } from './components/Text'
export { default as Button } from './components/Button'
export { default as Center } from './components/Center'
export { default as Background } from './components/Background'

export { default as Title } from './Title'

export type PropsBase = PropsWithChildren<{ className: string }>
