import React, { RefObject } from 'react'
import VantaBirds from 'vanta/dist/vanta.birds.min'
import { Theme, ThemeContext } from '../../context/theme'

const birds = (birdsRef: RefObject<HTMLDivElement>) =>
    birdsRef.current &&
    VantaBirds({
        el: birdsRef.current,
        backgroundAlpha: 0,
        quantity: 3,
        speedLimit: 3,
        alignment: 10000,
        cohesion: 0,
    })

export default () => {
    const { toggle } = React.useContext(ThemeContext) as Theme
    const birdsRef = React.useRef<HTMLDivElement>(null)

    React.useEffect(() => void birds(birdsRef), [])

    return <div className={`fixed w-[100vw] h-[100vh] ${toggle ? 'bg-background' : 'bg-background-light'}`} ref={birdsRef} />
}
