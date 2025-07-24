import React from 'react';
import { twMerge } from 'tailwind-merge';

interface CyberpunkDividerProps {
    className?: string;
}

const CyberpunkDivider: React.FC<CyberpunkDividerProps> = ({ className }) => {
    return (
        <div className={twMerge("w-full h-px bg-gradient-to-r from-transparent via-[var(--primary)] to-transparent my-8", className)} />
    );
};

export default CyberpunkDivider;