"use client";

import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const VolunteerCard = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const photos = [
        // 在这里放置照片的URL
        "https://via.placeholder.com/300x400?text=活动照片1",
        "https://via.placeholder.com/300x400?text=活动照片2",
        "https://via.placeholder.com/300x400?text=活动照片3",
        "https://via.placeholder.com/300x400?text=活动照片4",
        "https://via.placeholder.com/300x400?text=活动照片5",
    ];

    const handleJoinClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        const button = e.currentTarget;
        button.classList.add('animate-send');
        setTimeout(() => {
            window.location.href = "mailto:your-email@example.com";
            button.classList.remove('animate-send');
        }, 1000);
    };

    return (
        <div className="volunteer-card-container">
            <div className="low-poly-grid"></div>
            <div className="card-content">
                <div className="badge"></div>
                <h1>数字素养与技能提升志愿者服务队</h1>
                <ul className="benefits-list">
                    <li>❄️ 空调自习室，舒适学习环境</li>
                    <li>👨‍🏫 技术大牛带队，专业指导</li>
                    <li>🏆 参与竞赛项目，提升实战能力</li>
                    <li>🤝 结识志同道合的伙伴，共同成长</li>
                </ul>
                <div className="photo-wall">
                    <h2>我们的足迹</h2>
                    <Slider {...settings}>
                        {photos.map((photo, index) => (
                            <div key={index} className="polaroid">
                                <img src={photo} alt={`Activity photo ${index + 1}`} />
                            </div>
                        ))}
                    </Slider>
                </div>
                <button className="join-button" onClick={handleJoinClick}>
                    <span className="button-text">加入我们</span>
                    <span className="paper-plane">✈️</span>
                </button>
            </div>
            <style jsx>{`
        .volunteer-card-container {
          position: relative;
          width: 100%;
          max-width: 800px;
          margin: 2rem auto;
          background: #fff;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
          color: #333;
          padding: 2rem;
        }
        .low-poly-grid {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image:
            linear-gradient(135deg, rgba(255, 255, 255, 0.1) 25%, transparent 25%),
            linear-gradient(225deg, rgba(255, 255, 255, 0.1) 25%, transparent 25%),
            linear-gradient(45deg, rgba(255, 255, 255, 0.1) 25%, transparent 25%),
            linear-gradient(315deg, rgba(255, 255, 255, 0.1) 25%, #f3f4f6 25%);
          background-size: 40px 40px;
          animation: move-grid 10s linear infinite;
        }
        @keyframes move-grid {
          0% { background-position: 0 0; }
          100% { background-position: 40px 40px; }
        }
        .card-content {
          position: relative;
          z-index: 1;
        }
        .badge {
          position: absolute;
          top: -10px;
          left: -10px;
          width: 80px;
          height: 80px;
          background: #e53e3e;
          clip-path: polygon(0 0, 100% 0, 100% 50%, 50% 100%, 0 100%);
        }
        h1 {
          font-size: 2rem;
          font-weight: bold;
          text-align: center;
          margin-bottom: 1.5rem;
          color: #1a202c;
        }
        .benefits-list {
          list-style: none;
          padding: 0;
          margin-bottom: 2rem;
        }
        .benefits-list li {
          background: rgba(249, 250, 251, 0.8);
          padding: 0.75rem 1rem;
          border-radius: 8px;
          margin-bottom: 0.5rem;
          box-shadow: 0 2px 4px rgba(0,0,0,0.05);
        }
        .photo-wall h2 {
          text-align: center;
          font-size: 1.5rem;
          margin-bottom: 1rem;
          color: #2d3748;
        }
        .polaroid {
          padding: 10px;
          background: white;
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
          transform: rotate(-2deg);
          transition: transform 0.3s ease;
          margin: 0 10px;
        }
        .polaroid:nth-child(2n) {
          transform: rotate(3deg);
        }
        .polaroid:hover {
          transform: scale(1.05) rotate(0deg);
          z-index: 10;
        }
        .polaroid img {
          width: 100%;
          display: block;
        }
        .join-button {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 200px;
          height: 50px;
          margin: 2rem auto 0;
          background: #4299e1;
          color: white;
          border: none;
          border-radius: 25px;
          font-size: 1.2rem;
          cursor: pointer;
          position: relative;
          overflow: hidden;
          transition: background 0.3s ease;
        }
        .join-button:hover {
          background: #3182ce;
        }
        .button-text {
          transition: transform 0.5s ease;
        }
        .paper-plane {
          position: absolute;
          font-size: 1.5rem;
          transform: translate(150px, 50px) rotate(0deg);
          transition: transform 0.5s ease;
        }
        .join-button.animate-send .button-text {
          transform: translateY(-100px);
        }
        .join-button.animate-send .paper-plane {
          transform: translate(0, 0) rotate(45deg);
        }
        @keyframes send-animation {
          0% {
            transform: translateY(0) translateX(0) rotate(0);
          }
          50% {
            transform: translateY(-150px) translateX(50px) rotate(45deg);
          }
          100% {
            transform: translateY(-300px) translateX(100px) rotate(90deg);
            opacity: 0;
          }
        }
        .join-button.animate-send .paper-plane {
          animation: send-animation 1s forwards;
        }
      `}</style>
        </div>
    );
};

export default VolunteerCard;