import { Shield, Cpu, Code, Users, Target, Bot, Server, Network } from 'lucide-react';
import Image from 'next/image';

const TechCard = ({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) => (
    <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-cyan-400 transition-all duration-300 h-full">
        <div className="flex items-center mb-4">
            {icon}
            <h3 className="text-xl font-bold ml-3 text-white">{title}</h3>
        </div>
        <div className="text-gray-400">{children}</div>
    </div>
);

export default function TechPage() {
    return (
        <div className="relative z-10 min-h-screen text-white">
            <div className="container mx-auto px-4 pt-28 pb-12">
                <header className="text-center mb-20">
                    <h1 className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 pb-4">
                        技术部
                    </h1>
                    <p className="text-lg text-gray-400 max-w-3xl mx-auto mt-4">
                        我们是技术的探索者和实践者，致力于在网络安全的海洋中航行，在前沿开发的浪潮中冲锋，在坚实的网络基建上构建未来。在这里，我们共同学习、挑战并成长。
                    </p>
                </header>

                {/* Section 1: Tech Focus */}
                <section className="mb-20">
                    <h2 className="text-4xl font-bold text-center mb-12">技术基因</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <TechCard icon={<Shield className="w-8 h-8 text-red-500" />} title="网络安全">
                            <p>CTF竞赛训练、漏洞挖掘与复现、企业级安全攻防实践。</p>
                            <div className="flex space-x-2 mt-4 opacity-60">
                                <Target size={20} />
                                <p>CTF</p>
                            </div>
                        </TechCard>
                        <TechCard icon={<Cpu className="w-8 h-8 text-green-500" />} title="前沿开发">
                            <p>探索Web3.0、Java后端、Python爬虫等前沿技术的应用与落地。</p>
                            <div className="flex space-x-2 mt-4 opacity-60">
                                <Bot size={20} />
                                <p>开发</p>
                            </div>
                        </TechCard>
                        <TechCard icon={<Server className="w-8 h-8 text-blue-500" />} title="基础设施">
                            <p>负责校园网络服务维护、Linux服务器集群管理与自动化运维。</p>
                            <div className="flex space-x-2 mt-4 opacity-60">
                                <Network size={20} />
                                <p>Linux</p>
                            </div>
                        </TechCard>
                    </div>
                </section>

                {/* Section 2: 自有场地 */}
                <section className="mb-20">
                    <h2 className="text-4xl font-bold text-center mb-12">专属学习空间</h2>
                    <div className="max-w-4xl mx-auto bg-gray-800/50 p-8 rounded-lg border border-gray-700">
                        <p className="text-lg text-gray-300 leading-relaxed">
                            技术部拥有专属的自习室，为成员们提供了一个稳定、高效的学习和交流环境。在这里，当你遇到技术难题时，可以随时向经验丰富的学长学姐请教，获得及时的指导和帮助。这个空间不仅是解决问题的场所，更是激发灵感、突破瓶颈的摇篮。
                        </p>
                    </div>
                </section>

                {/* Section 3: 网络安全竞赛 */}
                <section className="mb-20">
                    <h2 className="text-4xl font-bold text-center mb-12">竞赛舞台</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                            <p className="font-semibold text-cyan-400">全国大学生信息安全竞赛 (CISCN)</p>
                        </div>
                        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                            <p className="font-semibold text-cyan-400">春秋杯网络安全联赛</p>
                        </div>
                        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                            <p className="font-semibold text-cyan-400">强网杯</p>
                        </div>
                        <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
                            <p className="font-semibold text-cyan-400">蓝桥杯</p>
                        </div>
                    </div>
                </section>

                {/* Section 4: 历史荣誉 */}
                <section>
                    <h2 className="text-4xl font-bold text-center mb-12">荣誉殿堂</h2>
                    <div className="text-center max-w-4xl mx-auto">
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
                    </div>
                </section>

                {/* Section 5: Join Us */}
                <section className="mt-20">
                    <h2 className="text-4xl font-bold text-center mb-12">加入我们，开启技术之旅</h2>
                    <div className="max-w-md mx-auto bg-gray-800/50 p-8 rounded-lg border border-gray-700 text-center">
                        <p className="text-lg text-gray-300 mb-6">
                            扫描下方二维码，加入技术部交流群，与我们一起探索技术的无限可能。
                        </p>
                        <div className="w-48 h-48 mx-auto rounded-lg flex items-center justify-center overflow-hidden">
                            <Image src="/images/QRcode/tech.jpg" alt="技术部QQ群二维码" width={192} height={192} className="object-cover" />
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}