'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import './GlobalEffects.css';

const GlobalEffects = () => {
    const transitionRef = useRef<HTMLDivElement>(null);
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const pathname = usePathname();
    const previousPathname = useRef(pathname);

    // 1. 初始化和资源加载
    useEffect(() => {
        // 懒加载音频资源
        if (typeof window !== 'undefined') {
            audioRef.current = new Audio('https://cdn.pixabay.com/download/audio/2022/03/15/audio_23c93d516c.mp3');
            audioRef.current.volume = 0.3;
        }

        // 2. 控制台彩蛋
        const showEasterEgg = () => {
            const asciiArt = `
  ____ _   _ ____   _    
 / ___| \\ | |  _ \\ / \\   
| |   |  \\| | |_) / _ \\  
| |___| |\\  |  _ < / ___ \\ 
 \\____|_| \\_|_| \\_/_/   \\_\\
      `;
            const message = '计算机与网络技术协会 - 技术驱动未来';
            console.log(`%c${asciiArt}`, 'color: #00ffff; font-weight: bold;');
            console.log(`%c${message}`, 'color: #00ff00; font-size: 14px;');
        };

        // 使用 requestIdleCallback 确保在浏览器空闲时执行
        if ('requestIdleCallback' in window) {
            requestIdleCallback(showEasterEgg);
        } else {
            setTimeout(showEasterEgg, 500);
        }

    }, []);

    // 3. 页面过渡效果
    useEffect(() => {
        if (pathname !== previousPathname.current) {
            const transitionElement = transitionRef.current;
            if (transitionElement) {
                transitionElement.classList.add('active');
                setTimeout(() => {
                    transitionElement.classList.remove('active');
                }, 1200); // 动画时长
            }
            previousPathname.current = pathname;
        }
    }, [pathname]);

    // 4. 音频反馈 & 粒子效果
    useEffect(() => {
        const clickHandler = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.closest('a, button, [role="button"]')) {
                audioRef.current?.play().catch(err => console.error("Audio playback failed:", err));

                // 粒子效果
                createParticles(e.clientX, e.clientY);
            }
        };

        const createParticles = (x: number, y: number) => {
            const isMobile = window.innerWidth <= 768;
            const particleCount = isMobile ? 7 : 15; // Reduce particle count on mobile

            for (let i = 0; i < particleCount; i++) {
                const particle = document.createElement('div');
                particle.classList.add('particle');
                document.body.appendChild(particle);

                const size = Math.floor(Math.random() * 6 + 3);
                particle.style.width = `${size}px`;
                particle.style.height = `${size}px`;
                particle.style.background = `hsl(${Math.random() * 360}, 90%, 70%)`;

                const destinationX = (Math.random() - 0.5) * 300;
                const destinationY = (Math.random() - 0.5) * 300;

                const animation = particle.animate([
                    { transform: `translate(${x}px, ${y}px) scale(1)`, opacity: 1 },
                    { transform: `translate(${x + destinationX}px, ${y + destinationY}px) scale(0)`, opacity: 0 }
                ], {
                    duration: 500 + Math.random() * 1000,
                    easing: 'cubic-bezier(0.17, 0.84, 0.44, 1)',
                    delay: Math.random() * 200
                });

                animation.onfinish = () => {
                    particle.remove();
                };
            }
        };

        document.addEventListener('click', clickHandler);

        return () => {
            document.removeEventListener('click', clickHandler);
        };
    }, []);

    return (
        <>
            <div ref={transitionRef} className="page-transition">
                <div className="hexagon-grid"></div>
            </div>
        </>
    );
};

export default GlobalEffects;