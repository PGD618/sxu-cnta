import { Shield, Cpu, Target, Bot, Server, Network, Code } from 'lucide-react';
import PageHeader from '@/components/ui/PageHeader';
import InfoCard from '@/components/ui/InfoCard';
import QRCodeCard from '@/components/ui/QRCodeCard';

export default function TechPage() {
    return (
        <div className="relative z-10 min-h-screen text-white">
            <div className="container mx-auto px-4 pt-28 pb-12">
                <PageHeader
                    title="技术部"
                    description="我们是技术的探索者和实践者，致力于在网络安全的海洋中航行，在前沿开发的浪潮中冲锋，在坚实的网络基建上构建未来。在这里，我们共同学习、挑战并成长。"
                    titleClassName="bg-gradient-to-r from-cyan-400 to-purple-500"
                />

                {/* Section 1: Tech Focus */}
                <section className="mb-20">
                    <h2 className="text-4xl font-bold text-center mb-12">技术基因</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <InfoCard icon={<Shield className="w-8 h-8 text-red-500" />} title="网络安全">
                            <p>CTF竞赛训练、漏洞挖掘与复现、企业级安全攻防实践。</p>
                            <div className="flex space-x-2 mt-4 opacity-60">
                                <Target size={20} />
                                <p>CTF</p>
                            </div>
                        </InfoCard>
                        <InfoCard icon={<Cpu className="w-8 h-8 text-green-500" />} title="前沿开发">
                            <p>探索Web3.0、Java后端、Python爬虫等前沿技术的应用与落地。</p>
                            <div className="flex space-x-2 mt-4 opacity-60">
                                <Bot size={20} />
                                <p>开发</p>
                            </div>
                        </InfoCard>
                        <InfoCard icon={<Server className="w-8 h-8 text-blue-500" />} title="基础设施">
                            <p>负责校园网络服务维护、Linux服务器集群管理与自动化运维。</p>
                            <div className="flex space-x-2 mt-4 opacity-60">
                                <Network size={20} />
                                <p>Linux</p>
                            </div>
                        </InfoCard>
                    </div>
                </section>

                {/* Section 2: 自有场地 */}
                <section className="mb-20">
                    <h2 className="text-4xl font-bold text-center mb-12">专属学习空间</h2>
                    <InfoCard title="专属学习空间">
                        <p className="text-lg text-gray-300 leading-relaxed">
                            技术部拥有专属的自习室，为成员们提供了一个稳定、高效的学习和交流环境。在这里，当你遇到技术难题时，可以随时向经验丰富的学长学姐请教，获得及时的指导和帮助。这个空间不仅是解决问题的场所，更是激发灵感、突破瓶颈的摇篮。
                        </p>
                    </InfoCard>
                </section>

                {/* Section 3: 网络安全竞赛 */}
                <section className="mb-20">
                    <h2 className="text-4xl font-bold text-center mb-12">竞赛舞台</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
                        <InfoCard title=""><p className="text-cyan-400 font-semibold">全国大学生信息安全竞赛 (CISCN)</p></InfoCard>
                        <InfoCard title=""><p className="text-cyan-400 font-semibold">春秋杯网络安全联赛</p></InfoCard>
                        <InfoCard title=""><p className="text-cyan-400 font-semibold">强网杯</p></InfoCard>
                        <InfoCard title=""><p className="text-cyan-400 font-semibold">蓝桥杯</p></InfoCard>
                    </div>
                </section>

                {/* Section 4: 历史荣誉 */}
                <section>
                    <h2 className="text-4xl font-bold text-center mb-12">荣誉殿堂</h2>
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
                </section>

                {/* Section 5: Join Us */}
                <section className="mt-20">
                    <h2 className="text-4xl font-bold text-center mb-12">加入我们，开启技术之旅</h2>
                    <QRCodeCard
                        icon={<Code className="w-8 h-8 text-emerald-400" />}
                        title="加入技术部"
                        description="扫描下方二维码，加入技术部交流群，与我们一起探索技术的无限可能。"
                        qrCodeUrl="/images/QRcode/tech.jpg"
                        altText="技术部QQ群二维码"
                    />
                </section>

            </div>
        </div>
    );
}