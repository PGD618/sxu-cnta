'use client';

import React from 'react';
import Slider, { CustomArrowProps } from 'react-slick';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type CarouselProps = {
    images: string[];
};

const NextArrow = (props: CustomArrowProps) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} slick-arrow right-[-40px] w-12 h-12 flex items-center justify-center bg-gray-800/50 rounded-full hover:bg-gray-700/80 transition-all`}
            onClick={onClick}
        >
            <ChevronRight className="text-white" />
        </div>
    );
};

const PrevArrow = (props: CustomArrowProps) => {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} slick-arrow left-[-40px] w-12 h-12 flex items-center justify-center bg-gray-800/50 rounded-full hover:bg-gray-700/80 transition-all`}
            onClick={onClick}
        >
            <ChevronLeft className="text-white" />
        </div>
    );
};


const Carousel: React.FC<CarouselProps> = ({ images }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        centerMode: true,
        centerPadding: '150px', // This creates the "peek" effect
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    centerPadding: '40px'
                }
            }
        ]
    };

    return (
        <div className="w-full max-w-4xl mx-auto volunteer-carousel">
            <Slider {...settings}>
                {images.map((src, index) => (
                    <div key={index} className="px-4">
                        <div className="transform transition-transform duration-500 ease-in-out">
                            <Image
                                src={src}
                                alt={`Volunteer moment ${index + 1}`}
                                width={800}
                                height={500}
                                loading="lazy"
                                className="rounded-lg object-cover w-full"
                            />
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;