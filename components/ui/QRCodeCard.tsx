import Image from 'next/image';
import React from 'react';

interface QRCodeCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    qrCodeUrl: string;
    altText: string;
}

const QRCodeCard: React.FC<QRCodeCardProps> = ({ icon, title, description, qrCodeUrl, altText }) => {
    return (
        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-emerald-400 transition-all duration-300 flex flex-col items-center text-center h-full">
            <div className="flex items-center mb-4">
                {icon}
                <h3 className="text-xl font-bold ml-3 text-white">{title}</h3>
            </div>
            <p className="text-gray-400 mb-6 flex-grow">{description}</p>
            <div className="w-48 h-48 mx-auto rounded-lg flex items-center justify-center overflow-hidden bg-white p-2">
                <Image src={qrCodeUrl} alt={altText} width={180} height={180} className="object-contain" referrerPolicy="no-referrer" />
            </div>
        </div>
    );
};

export default QRCodeCard;