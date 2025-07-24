"use client";

import React from 'react';
import Image from 'next/image';
import TypeWriter from './TypeWriter';

const competitions = [
    { id: 1, name: 'Real World CTF' },
    { id: 2, name: 'DEF CON CTF' },
    { id: 3, name: 'PlaidCTF' },
    { id: 4, name: 'Google CTF' },
    { id: 5, name: '0CTF/TCTF' },
    { id: 6, name: 'HITCON CTF' },
    { id: 7, name: 'RuCTF' },
    { id: 8, name: 'Insomni\'hack' },
    { id: 9, name: 'CCTF' },
];

const CheckIcon = () => (
    <svg
        className="w-6 h-6 text-green-400 mr-3 flex-shrink-0"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
);

const TechDepartment = () => {
    const [openAccordion, setOpenAccordion] = React.useState<string | null>('item-1');

    const accordionItems = [
        { id: 'item-1', title: '学习路线与课程资料', content: '提供从入门到进阶的完整学习路径，以及丰富的线上课程和内部学习资料。' },
        { id: 'item-2', title: '赛题演练与竞赛指导', content: '定期组织CTF赛题演练，由经验丰富的学长学姐提供解题思路和竞赛指导。' },
        { id: 'item-3', title: '24小时自习室支持', content: '协会拥有专属的24小时自习室，提供优良的学习和团队协作环境。' },
    ];

    return (
        <section className="tech-section">
            <div className="tech-container">
                <div className="ascii-watermark" aria-hidden="true">0xCNTA</div>

                <div className="tech-content-grid">
                    {/* Left Side: Accordion for mobile, regular list for desktop */}
                    <div className="tech-accordion-container">
                        <div className="h-16 mb-4">
                            <TypeWriter text="网安的交流学习" />
                        </div>
                        <div className="accordion">
                            {accordionItems.map((item) => (
                                <div key={item.id} className="accordion-item">
                                    <button
                                        className="accordion-title"
                                        onClick={() => setOpenAccordion(openAccordion === item.id ? null : item.id)}
                                    >
                                        <span>{item.title}</span>
                                        <span className={`accordion-icon ${openAccordion === item.id ? 'open' : ''}`}></span>
                                    </button>
                                    <div className={`accordion-content ${openAccordion === item.id ? 'open' : ''}`}>
                                        <p>{item.content}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Image */}
                    <div className="tech-image-container">
                        <Image
                            src="/images/tech-department.jpg"
                            alt="CNTA Team Photo"
                            width={500}
                            height={500}
                            className="rounded-lg object-cover"
                        />
                    </div>
                </div>

                {/* Bottom: Competitions Scrollbar */}
                <div className="mt-16">
                    <div className="w-full overflow-x-auto pb-6 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-cyan-400 scrollbar-track-gray-800">
                        <div className="flex space-x-6">
                            {competitions.map((comp) => (
                                <div
                                    key={comp.id}
                                    className="snap-center flex-shrink-0 w-72 h-36 bg-gray-800/50 backdrop-blur-sm rounded-xl flex items-center justify-center text-center p-4 
                             border border-transparent hover:border-cyan-400/50 transition-all duration-300
                             relative overflow-hidden group/item"
                                >
                                    <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl blur opacity-0 group-hover/item:opacity-75 transition-opacity duration-300"></div>
                                    <span className="relative text-xl font-semibold text-gray-200">{comp.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TechDepartment;