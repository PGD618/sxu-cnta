import Link from 'next/link';
import { ArrowRight, Award, Briefcase, Code, Handshake, Heart, ShieldCheck, Star, Users } from 'lucide-react';

// 视觉建议：在标题旁添加二进制代码背景装饰
const BinaryBackground = ({ text }: { text: string }) => (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden z-0">
        <p className="font-mono text-center text-gray-800/80 text-sm whitespace-nowrap opacity-10">
            {text}
        </p>
    </div>
);

const InfoCard = ({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) => (
    <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 hover:border-cyan-400 transition-all duration-300">
        <div className="flex items-center mb-4">
            {icon}
            <h3 className="text-xl font-bold ml-3 text-white">{title}</h3>
        </div>
        <div className="text-gray-400">{children}</div>
    </div>
);

export default function AboutPage() {
    return (
        <div className="container mx-auto px-6 py-20 text-white">
            {/* Section 1: About CNTA */}
            <section className="relative text-center mb-24 py-16 overflow-hidden">
                <BinaryBackground text="01000011 01001110 01010100 01000001" />
                <div className="relative z-10">
                    <h1 className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-500 pb-4">
                        关于CNTA
                    </h1>
                    <div className="max-w-3xl mx-auto text-lg text-gray-300 mt-4 text-left space-y-6">
                        <div>
                            <h3 className="text-2xl font-bold text-cyan-400 mb-2">协会简介</h3>
                            <p>
                                计算机与网络技术协会（CNTA），成立于2015年，是隶属于现代教育技术学院的明星技术型学生社团，协助校区网络维护和维修。协会设有志愿队和技术部，开展专业知识学习和竞赛活动，注重将知识与实践相结合。管理校级志愿队，组织数字助老和电脑义诊等志愿活动，培养数字素养与技能。协会定期举办讲座、比赛观摩等活动，为成员提供学习和实践的平台。我们以"连接未来，创新无限"为宗旨，致力于搭建校内顶尖的计算机与网络安全技术交流平台，通过赛事和项目驱动，全方位培养成员的工程实践能力与技术创新思维。
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-cyan-400 mb-2">发展理念</h3>
                            <p>
                                协会致力于传播科技知识和网络安全意识，构建安全网络环境。促进成员技术交流和学习，鼓励分享经验，组织技术讲座和研讨会。提供实践机会和项目支持，鼓励探索新技术，追求创新。
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-cyan-400 mb-2">协会特色</h3>
                            <p>
                                协会有独立活动室，会员可自习和寻求帮助。注重网络安全知识的学习和竞赛参与，定期举办技术讲座和研讨会。鼓励会员参加志愿服务，成立数字素养与技能提升志愿者服务队，帮助大学生志愿者提高综合素质。促进成员团队合作和沟通技巧的提升。
                            </p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-cyan-400 mb-2">欢迎你的到来</h3>
                            <p>
                                我们欢迎对计算机和网络技术感兴趣的学生加入。通过参与协会活动，你将扩展专业知识、提高技术能力，并建立深厚友谊。加入我们，一起探索计算机与网络技术的无限可能。
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section 2: Our Team */}
            <section className="mb-24">
                <h2 className="text-4xl font-bold text-center mb-12">我们的团队</h2>
                <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                    <Link href="/tech" className="block p-8 rounded-lg bg-gray-900 border border-transparent hover:border-cyan-400 transition-all duration-300 group">
                        <div className="flex items-center mb-4">
                            <Code className="w-8 h-8 text-cyan-400" />
                            <h3 className="text-2xl font-bold ml-4">技术部</h3>
                        </div>
                        <p className="text-gray-400 mb-4">协会的技术核心，负责竞赛训练、项目开发和前沿技术探索。</p>
                        <span className="font-semibold text-cyan-400 flex items-center">
                            了解更多 <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                        </span>
                    </Link>
                    <Link href="/volunteer" className="block p-8 rounded-lg bg-gray-900 border border-transparent hover:border-purple-400 transition-all duration-300 group">
                        <div className="flex items-center mb-4">
                            <Heart className="w-8 h-8 text-purple-400" />
                            <h3 className="text-2xl font-bold ml-4">志愿队</h3>
                        </div>
                        <p className="text-gray-400 mb-4">用技术传递温度，参与数字助老、电脑义诊等公益活动。</p>
                        <span className="font-semibold text-purple-400 flex items-center">
                            了解更多 <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                        </span>
                    </Link>
                </div>
            </section>

            {/* Section 3: Why Choose Us? */}
            <section className="mb-24">
                <h2 className="text-4xl font-bold text-center mb-12">为什么选择我们？</h2>
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    <InfoCard icon={<Award className="w-8 h-8 text-yellow-400" />} title="竞赛支持">
                        <p>近三年，我们的成员在省级以上竞赛中斩获超过 <strong>20</strong> 项奖项，提供系统性的赛前培训和指导。</p>
                    </InfoCard>
                    <InfoCard icon={<Briefcase className="w-8 h-8 text-green-400" />} title="硬件资源">
                        <p>拥有专属自习室，配备专属服务器，为你的创意提供硬件保障。</p>
                    </InfoCard>
                </div>
            </section>

            {/* Section 4: Your Gains */}
            <section>
                <h2 className="text-4xl font-bold text-center mb-12">你的收获</h2>
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    <InfoCard icon={<Star className="w-8 h-8 text-pink-400" />} title="技能提升">
                        <ul className="list-disc list-inside space-y-2">
                            <li><strong>技术部：</strong> 从入门到竞赛级的系统化训练，掌握行业前沿技术。</li>
                            <li><strong>志愿队：</strong> 在实践中提升沟通协调能力，收获宝贵的公益履历。</li>
                        </ul>
                    </InfoCard>
                    <InfoCard icon={<Handshake className="w-8 h-8 text-blue-400" />} title="职业助力">
                        <ul className="list-disc list-inside space-y-2">
                            <li>优秀成员可获实习或护网的机会。</li>
                            <li>参与真实项目开发，为你的简历增添浓墨重彩的一笔。</li>
                        </ul>
                    </InfoCard>
                </div>
            </section>
        </div>
    );
}