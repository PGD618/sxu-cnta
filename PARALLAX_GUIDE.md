# 首页视差效果开发指南

本文档详细说明了为协会首页创建的滚动视差效果的实现细节，包括组件代码、关键参数和移动端适配方案。

## 1. 最终组件代码 (`components/ParallaxSection.tsx`)

```tsx
'use client';

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
      {/* Background */}
      <div ref={backgroundRef} className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1504610926078-a1611f544f37?q=80&w=2070&auto=format&fit=crop"
          alt="Abstract background"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">
        <div ref={useParallax<HTMLDivElement>({ translateX: [-100, 0] }).ref} className="w-full">
          <h2 className="text-5xl md:text-7xl font-extrabold text-center">
            与我们一起成长
          </h2>
        </div>
        <div ref={useParallax<HTMLDivElement>({ translateX: [100, 0] }).ref} className="w-full">
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
```

## 2. 关键参数说明

`react-scroll-parallax` 的 `useParallax` 钩子接受一个配置对象，以下是本次开发中使用的关键参数：

-   `speed` (number): 控制元素滚动的相对速度。正值使元素滚动得比页面快，负值则使其滚动得更慢。例如，`-50` 使背景以页面滚动速度的一半向相反方向移动，创造出深度感。
-   `translateX` / `translateY` (array[number, number]): 定义元素在水平或垂直方向上的位移动画。数组的第一个值是起始位置，第二个值是结束位置。单位是 `%`。例如 `[-100, 0]` 使元素从左侧 100% 的位置移动到原始位置。
-   `rotate` (array[number, number]): 定义元素的旋转动画，单位是度 (`deg`)。例如 `[0, 360]` 使元素顺时针旋转一周。
-   `scale` (array[number, number]): 定义元素的缩放动画。例如 `[0.5, 1]` 使元素从 50% 的大小放大到原始大小。
-   `opacity` (array[number, number]): 定义元素的透明度动画。范围是 `0` (完全透明) 到 `1` (完全不透明)。
-   `easing` (string | array): 定义动画的缓动函数，使动画过渡更自然。可以是预设的字符串（如 `'easeInOut'`）或自定义的 cubic-bezier 曲线。
-   `onProgressChange` (function): 一个回调函数，当元素的滚动进度发生变化时触发。它接收一个 `progress` 参数（从 0 到 1），可用于实现复杂的自定义动画，如本例中的背景模糊效果。
-   `targetElement` (HTMLElement): 将动画的触发和进度计算绑定到指定的 DOM 元素，而不是默认的父容器。这对于精确控制动画的起止点非常有用。

## 3. 移动端适配方案

复杂的视差效果在移动设备上可能会导致性能问题或不佳的视觉体验。以下是推荐的适配方案：

### 方案一：禁用动画 (推荐)

对于小屏幕设备，完全禁用视差效果是保证性能和用户体验最稳妥的方法。

1.  **创建一个 `useMediaQuery` 钩子:**
    ```tsx
    // hooks/useMediaQuery.ts
    import { useState, useEffect } from 'react';

    export const useMediaQuery = (query: string) => {
      const [matches, setMatches] = useState(false);

      useEffect(() => {
        const media = window.matchMedia(query);
        if (media.matches !== matches) {
          setMatches(media.matches);
        }
        const listener = () => setMatches(media.matches);
        window.addEventListener('resize', listener);
        return () => window.removeEventListener('resize', listener);
      }, [matches, query]);

      return matches;
    };
    ```

2.  **在组件中根据屏幕宽度禁用 `Parallax`:**
    ```tsx
    // components/ParallaxSection.tsx
    import { useMediaQuery } from '@/hooks/useMediaQuery';
    
    const ParallaxSection = () => {
      const isMobile = useMediaQuery('(max-width: 768px)');
      
      const { ref } = useParallax({
        speed: -50,
        disabled: isMobile, // 在移动端禁用
        // ...其他参数
      });
      
      // ...
    }
    ```
    你也可以在 `ParallaxProvider` 级别全局禁用：
    ```tsx
    // app/layout.tsx
    <ParallaxProvider disabled={isMobile}>
      {children}
    </ParallaxProvider>
    ```

### 方案二：调整动画参数

如果你仍希望在移动端保留部分效果，可以动态调整动画参数，使其更柔和。

```tsx
// components/ParallaxSection.tsx
const isMobile = useMediaQuery('(max-width: 768px)');

const { ref } = useParallax({
  speed: isMobile ? -10 : -50, // 移动端减小速度
  scale: isMobile ? [1, 1] : [0.5, 1], // 移动端禁用缩放
  // ...
});
```

### 方案三：CSS 媒体查询

对于布局和样式的调整，继续使用 Tailwind CSS 的响应式断点是最直接有效的方法。例如，可以为移动设备提供不同的字体大小或边距。

```html
<h2 class="text-4xl md:text-7xl font-extrabold text-center">
  与我们一起成长
</h2>
```
在这个例子中，默认字体大小为 `text-4xl`，在 `md` (768px) 及以上的屏幕上，字体大小变为 `text-7xl`。