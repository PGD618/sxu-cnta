import React from 'react';

interface InfoCardProps {
    icon?: React.ReactNode;
    title: string;
    children: React.ReactNode;
    className?: string;
}

const InfoCard = ({ icon, title, children, className }: InfoCardProps) => {
    return (
        <div className={`bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-cyan-400 transition-all duration-300 h-full ${className}`}>
            <div className="flex items-center mb-4">
                {icon}
                <h3 className={`text-xl font-bold text-white ${icon ? 'ml-3' : ''}`}>{title}</h3>
            </div>
            <div className="text-gray-400">{children}</div>
        </div>
    );
};

export default InfoCard;