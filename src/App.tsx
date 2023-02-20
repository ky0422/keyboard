import React from 'react'
import create from 'zustand'
import * as Components from './components'
import { Theme, ThemeContext } from './context/theme'
import { Fade } from 'react-awesome-reveal'

interface Props {
    inc: number
    toggleButton?: boolean
}

const useStore = create<Record<string, any>>((set) => ({
    count: 0,
    increment: (inc: number) => set((state) => ({ count: state.count + inc })),
    decrement: (dec: number) => set((state) => ({ count: state.count - dec })),
}))

const Button: React.FC<Props> = (props: Props) => {
    const { toggle, toggleTheme } = React.useContext(ThemeContext) as Theme
    const { increment: inc, decrement: dec } = useStore()

    const memoizedIncrement = React.useCallback(() => inc(props.inc), [inc])
    const memoizedDecrement = React.useCallback(() => dec(props.inc), [dec])

    return (
        <div className='inline-block bg-transparent'>
            <div>
                <Components.Button onClick={memoizedIncrement} fontSize={'text-5xl'}>
                    +
                </Components.Button>
                <Components.Button onClick={memoizedDecrement} fontSize={'text-5xl'}>
                    -
                </Components.Button>
            </div>
            {props.toggleButton && (
                <Components.Button onClick={toggleTheme} fontSize='text-3xl'>
                    {toggle ? '라이트' : '다크'}모드 전환
                </Components.Button>
            )}
        </div>
    )
}

const App: React.FC<Props> = (props: Props) => (
    <Fade delay={300}>
        <Components.Center>
            <Components.Text fontSize='text-9xl' stroke>
                {useStore().count}
            </Components.Text>

            <Button inc={props.inc} toggleButton={props.toggleButton} />
        </Components.Center>
    </Fade>
)

export default App
