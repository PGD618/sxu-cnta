import React from 'react';

interface PageHeaderProps {
    title: string;
    description: string;
    titleClassName?: string;
}

const PageHeader = ({ title, description, titleClassName }: PageHeaderProps) => {
    return (
        <header className="text-center mb-20">
            <h1 className={`text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent pb-4 ${titleClassName}`}>
                {title}
            </h1>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto mt-4">
                {description}
            </p>
        </header>
    );
};

export default PageHeader;