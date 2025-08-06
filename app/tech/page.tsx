"use client";
import { useState, ReactNode } from 'react';
import Image from 'next/image';
import { Shield, Cpu, Target, Bot, Server, Network, Code } from 'lucide-react';
import PageHeader from '@/components/ui/PageHeader';
import InfoCard from '@/components/ui/InfoCard';
import QRCodeCard from '@/components/ui/QRCodeCard';
import Carousel from '@/components/ui/Carousel';

const techImages = [
    '/images/tech/photo01.jpg', '/images/tech/photo02.png', '/images/tech/photo03.png',
    '/images/tech/photo04.png',
];

const entropyCupImages = [
    '/images/tech/photo10.jpg', '/images/tech/photo11.jpg', '/images/tech/photo12.jpg',
    '/images/tech/photo13.jpg', '/images/tech/photo14.jpg', '/images/tech/photo15.jpg',
    '/images/tech/photo16.jpg', '/images/tech/photo17.jpg',
];

const trainingImages = [
    '/images/tech/photo18.png', '/images/tech/photo19.png', '/images/tech/photo20.png',
    '/images/tech/photo21.png', '/images/tech/photo22.png', '/images/tech/photo23.png',
];

const knowledgeBaseImages = [
    '/images/tech/photo24.png', '/images/tech/photo25.png', '/images/tech/photo26.png',
    '/images/tech/photo27.png', '/images/tech/photo28.png', '/images/tech/photo29.png',
    '/images/tech/photo30.png',
];

const trainingSessionImages = [
    '/images/tech/photo31.png', '/images/tech/photo32.png', '/images/tech/photo33.png',
    '/images/tech/photo34.png', '/images/tech/photo35.png',
];

export default function TechPage() {

    const sectionsContent = {
        "技术基因": (
            <div className="grid md:grid-cols-3 gap-8">
                <InfoCard icon={<Shield className="w-8 h-8 text-red-500" />} title="网络安全">
                    <p>CTF竞赛训练、漏洞挖掘与复现、企业级安全攻防实践。</p>
                    <div className="flex space-x-2 mt-4 opacity-60"><Target size={20} /><p>CTF</p></div>
                </InfoCard>
                <InfoCard icon={<Cpu className="w-8 h-8 text-green-500" />} title="前沿开发">
                    <p>探索Web前端、Java后端等前沿技术的应用与落地。</p>
                    <div className="flex space-x-2 mt-4 opacity-60"><Bot size={20} /><p>开发</p></div>
                </InfoCard>
                <InfoCard icon={<Server className="w-8 h-8 text-blue-500" />} title="基础设施">
                    <p>负责校园网络服务维护、Linux服务器集群管理与自动化运维。</p>
                    <div className="flex space-x-2 mt-4 opacity-60"><Network size={20} /><p>Linux</p></div>
                </InfoCard>
            </div>
        ),
        "团队风采": <Carousel images={techImages} />,
        "知识库": (
            <InfoCard title="CNTA Wiki">
                <p className="text-lg text-gray-400 mb-6 text-center">
                    CNTA Wiki 是一个面向社团全体成员的知识库，由技术部精心搭建与维护。它不仅是技术知识的沉淀池，更是我们共同学习、分享与成长的见证。在这里，你可以找到从入门到进阶的各类学习资料、项目文档、以及历届技术沙龙的精华回顾。
                </p>
                <Carousel images={knowledgeBaseImages} />
            </InfoCard>
        ),
        "培训活动": (
            <InfoCard title="技术培训与知识分享">
                <p className="text-lg text-gray-400 mb-6 text-center">
                    我们定期举办技术沙龙、专题讲座和实战工作坊，内容涵盖网络安全、软件开发、服务器运维等多个领域，旨在为同学们提供一个学习和交流的平台，共同成长。
                </p>
                <Carousel images={trainingImages} />
            </InfoCard>
        ),
        "训练平台": (
            <InfoCard title="从零开始，系统化学习">
                <p className="text-lg text-gray-400 mb-6 text-center">
                    我们为新成员提供了系统化的训练平台，内容从计算机基础、网络协议到前后端开发、网络安全入门，无论基础如何，都能找到适合自己的学习节奏。通过项目驱动的实践，你将逐步构建解决复杂问题的能力，并在团队协作中快速成长。
                </p>
                <Carousel images={trainingSessionImages} />
            </InfoCard>
        ),
        "竞赛舞台": (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                <InfoCard title=""><p className="text-cyan-400 font-semibold text-center">全国大学生信息安全竞赛 (CISCN)</p></InfoCard>
                <InfoCard title=""><p className="text-cyan-400 font-semibold text-center">春秋杯网络安全联赛</p></InfoCard>
                <InfoCard title=""><p className="text-cyan-400 font-semibold text-center">强网杯</p></InfoCard>
                <InfoCard title=""><p className="text-cyan-400 font-semibold text-center">蓝桥杯</p></InfoCard>
            </div>
        ),
        "近期战绩：“一如计网”战队": (
            <InfoCard title='第三届"熵密杯"密码安全挑战赛卓越表现'>
                <div className="flex flex-col md:flex-row gap-8 items-start">
                    <div className="space-y-6 text-lg text-gray-300 leading-relaxed md:w-1/2">
                        <div>
                            <h3 className="text-2xl font-semibold text-cyan-400 mb-2">国家级奖项</h3>
                            <p>从全国205支战队中脱颖而出，斩获山西省高校第一名、全省所有参赛队伍第二名。</p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold text-cyan-400 mb-2">顶尖对手较量</h3>
                            <p>与清华大学、中山大学等密码学强校同台竞技，展现专业实力。</p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold text-cyan-400 mb-2">技术亮点</h3>
                            <ul className="list-disc list-inside space-y-1 pl-4">
                                <li>密码算法深度解析能力</li>
                                <li>加密协议漏洞精准挖掘</li>
                                <li>密钥攻防场景策略部署</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold text-cyan-400 mb-2">学院支持与培养体系</h3>
                            <p>现代教育技术学院通过学科竞赛提升学生创新能力，计算机与网络技术协会提供技术培训与实战平台。</p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold text-cyan-400 mb-2">精神内核</h3>
                            <p className="italic">{'"热爱如一，创新不止" —— "一如计网"战队名诠释了团队对网络安全技术的执着追求和在数字世界持续突破的青春力量。'}</p>
                        </div>
                    </div>
                    <div className="md:w-1/2 flex justify-center items-center">
                        <Image
                            src="/images/tech/photo09.png"
                            alt="“熵密杯”奖状"
                            width={500}
                            height={300}
                            loading="lazy"
                            className="rounded-lg shadow-2xl max-w-full"
                        />
                    </div>
                </div>
            </InfoCard>
        ),
        "“熵密杯”风采": <Carousel images={entropyCupImages} />,
        "荣誉殿堂": (
            <InfoCard title="荣誉殿堂">
                <p className="text-lg text-gray-400 mb-6">
                    我们在各大竞赛中屡获殊荣，这不仅是技术的证明，更是团队协作与不懈努力的结晶。部分荣誉包括：
                </p>
                <ul className="list-disc list-inside text-left mx-auto max-w-2xl text-gray-300 space-y-2 mb-8">
                    <li>华北五省“信达杯”本科组二等奖、三等奖</li>
                    <li>“熵密杯”密码安全挑战赛优胜奖</li>
                    <li>“蓝桥杯”全国总决赛三等奖、优秀奖，省级一、二、三等奖若干</li>
                    <li>“华为ICT”省三等奖</li>
                    <li>CISCN区域赛三等奖</li>
                    <li>校级竞赛奖项若干（互联网+、正大杯等）</li>
                </ul>
                <p className="text-lg text-gray-400">
                    我们不只有网络安全...(*￣０￣)ノ
                </p>
            </InfoCard>
        ),
    };

    return (
        <div className="relative z-10 min-h-screen text-white">
            <div className="container mx-auto px-4 pt-28 pb-12">
                <PageHeader
                    title="技术部"
                    description="我们是技术的探索者和实践者，致力于在网络安全的海洋中航行，在前沿开发的浪潮中冲锋，在坚实的网络基建上构建未来。在这里，我们共同学习、挑战并成长。"
                    titleClassName="bg-gradient-to-r from-cyan-400 to-purple-500"
                />

                {/* Content View */}
                <div className="">
                    {Object.entries(sectionsContent).map(([title, content]) => (
                        <section key={title} className="mb-20">
                            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">{title}</h2>
                            {content}
                        </section>
                    ))}
                </div>

                {/* Join Us Section - visible on all screen sizes */}
                <section className="mt-20">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">加入我们，开启技术之旅</h2>
                    <QRCodeCard
                        icon={<Code className="w-8 h-8 text-emerald-400" />}
                        title="加入技术部"
                        description="扫描下方二维码，加入技术部交流群，与我们一起探索技术的无限可能。"
                        qrCodeUrl="/images/QRcode/tech.png"
                        altText="技术部QQ群二维码"
                    />
                </section>
            </div>
        </div>
    );
}