import { PropsWithChildren } from 'react';
import { twMerge } from 'tailwind-merge';

export const HeroOrbit = ({ children, size, rotation, spinDuration, isSpin = false, }: PropsWithChildren<{ size: number, rotation: number, spinDuration?: string, isSpin?: boolean }>) => {
    return (
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 -z-20 ">
            <div className={twMerge(isSpin === true && 'animate-spin')} style={{ animationDuration: spinDuration }}>
                <div className="  size-[800px] flex items-start justify-start " style={{
                    width: size,
                    height: size,
                    transform: `rotate(${rotation}deg)`
                }}>
                    <div className={twMerge(isSpin === true && 'animate-spin')} style={{ animationDuration: spinDuration }}>
                        <div className="  inline-flex " style={{
                            transform: `rotate(-${rotation * -1}deg)`
                        }}>
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
