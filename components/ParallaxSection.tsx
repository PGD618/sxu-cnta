"use client";
import React from 'react';
import { useParallax } from 'react-scroll-parallax';

const ParallaxSection = () => {
    const { ref: backgroundRef } = useParallax<HTMLDivElement>({
        speed: -50,
        onProgressChange: (progress) => {
            if (backgroundRef.current) {
                backgroundRef.current.style.filter = `blur(${20 * (1 - progress)}px)`;
            }
        },
    });

    const target = React.useRef<HTMLDivElement>(null);
    return (
        <div ref={target} className="relative h-[200vh] text-white">
            {/* Background - Removed to show global particles */}
            <div ref={backgroundRef} className="absolute inset-0 z-0">
                {/* The original background image has been removed. */}
                <div className="absolute inset-0 bg-black/20" />
            </div>

            {/* Content */}
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
                <div ref={useParallax<HTMLDivElement>({ opacity: [0, 1], translateY: [50, 0], easing: 'easeOut' }).ref} className="w-full">
                    <h2 className="text-5xl md:text-7xl font-extrabold text-center">
                        与我们一起成长
                    </h2>
                </div>
                <div ref={useParallax<HTMLDivElement>({ opacity: [0, 1], translateY: [50, 0], easing: 'easeOut' }).ref} className="w-full">
                    <p className="mt-4 text-lg md:text-xl text-center max-w-2xl mx-auto">
                        在技术的浪潮中，我们不仅是旁观者，更是创造者。加入我们，探索、学习、构建，共同塑造未来。
                    </p>
                </div>

                {/* Logo */}
                <div
                    ref={
                        useParallax<HTMLDivElement>({
                            targetElement: target.current ?? undefined,
                            rotate: [0, 360],
                            scale: [0.5, 1],
                            opacity: [0, 1],
                            easing: 'easeInOut',
                        }).ref
                    }
                    className="flex justify-center mt-16"
                >
                    <img
                        src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original.svg"
                        alt="Logo"
                        className="w-32 h-32"
                    />
                </div>
            </div>
        </div>
    );
};

export default ParallaxSection;