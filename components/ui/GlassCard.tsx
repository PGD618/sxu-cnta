import React from 'react';
import { twMerge } from 'tailwind-merge';

interface GlassCardProps {
    children: React.ReactNode;
    className?: string;
}

const GlassCard: React.FC<GlassCardProps> = ({ children, className }) => {
    return (
        <div
            className={twMerge(
                'neon-border-card', // Use the new global neon border style
                'p-6', // Keep padding
                'transition-all duration-300 ease-in-out hover:scale-105', // Keep transform effects
                className
            )}
        >
            {children}
        </div>
    );
};

export default GlassCard;