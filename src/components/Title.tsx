import * as Components from './index'
import useWebAnimations, { bounceInLeft, bounceInRight, headShake } from '@wellyshen/use-web-animations'

export default () => {
    const { ref: titleRef, animate: titleAnimate } = useWebAnimations<HTMLParagraphElement>(bounceInLeft)
    const { ref: subtitleRef } = useWebAnimations<HTMLParagraphElement>(bounceInRight)

    const title = (
        <div ref={titleRef} onClick={() => titleAnimate(headShake)}>
            <Components.Text className='text-4xl sm:text-6xl' uppercase>
                ky0422
            </Components.Text>
        </div>
    )

    const [style, pr] = ['text-xl sm:text-2xl', 'pr-1.5']

    const subtitle = (
        <div className='pt-3' ref={subtitleRef}>
            <Components.Text className={`${style} ${pr}`} color='text-blue-500'>
                다람쥐
            </Components.Text>
            <Components.Text className={`${style} ${pr}`}>헌</Components.Text>
            <Components.Text className={style} color='text-red-500'>
                쳇바퀴
            </Components.Text>
            <Components.Text className={`${style} ${pr}`}>에 타고파</Components.Text>
        </div>
    )

    return (
        <div className='inline-block'>
            {title}
            {subtitle}
        </div>
    )
}
