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
    const { className, onClick } = props;
    return (
        <div
            className={`${className} slick-arrow right-2 md:right-[-40px] w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-gray-800/50 rounded-full hover:bg-gray-700/80 transition-all z-10`}
            onClick={onClick}
        >
            <ChevronRight className="text-white w-6 h-6" />
        </div>
    );
};

const PrevArrow = (props: CustomArrowProps) => {
    const { className, onClick } = props;
    return (
        <div
            className={`${className} slick-arrow left-2 md:left-[-40px] w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-gray-800/50 rounded-full hover:bg-gray-700/80 transition-all z-10`}
            onClick={onClick}
        >
            <ChevronLeft className="text-white w-6 h-6" />
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
        centerMode: false,
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
        <div className="w-full max-w-sm mx-auto volunteer-carousel overflow-hidden">
            <Slider {...settings}>
                {images.map((src, index) => (
                    <div key={index} className="px-2">
                        <div className="transform transition-transform duration-500 ease-in-out">
                            <Image
                                src={src}
                                alt={`Volunteer moment ${index + 1}`}
                                width={536}
                                height={536}
                                className="rounded-lg object-cover w-full"
                                referrerPolicy="no-referrer"
                            />
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default Carousel;