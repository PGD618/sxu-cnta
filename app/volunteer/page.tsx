import { Heart, Smartphone, Wrench, Users, Home, Award, Briefcase } from 'lucide-react';
import Carousel from '@/components/ui/Carousel';
import Image from 'next/image';

const InfoCard = ({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) => (
    <div className="bg-gray-900 p-8 rounded-lg border border-gray-700 hover:border-purple-400 transition-all duration-300 h-full flex flex-col">
        <div className="flex items-center mb-4">
            {icon}
            <h3 className="text-2xl font-bold ml-4 text-white">{title}</h3>
        </div>
        <p className="text-gray-400 flex-grow">{description}</p>
    </div>
);

export default function VolunteerPage() {
    const volunteerImages = [
        '/images/volunteer/photo01.jpg',
        '/images/volunteer/photo02.jpg',
        '/images/volunteer/photo03.jpg',
        '/images/volunteer/photo04.jpg',
        '/images/volunteer/photo05.jpg',
        '/images/volunteer/photo06.jpg',
        '/images/volunteer/photo07.jpg',
    ];

    return (
        <div className="relative z-10 min-h-screen text-white">
            <div className="container mx-auto px-4 pt-28 pb-12">
                <header className="text-center mb-20">
                    <h1 className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-500 pb-4">
                        志愿队
                    </h1>
                    <p className="text-lg text-gray-400 max-w-3xl mx-auto mt-4">
                        我们坚信技术应有温度。志愿队致力于将所学知识回馈社会，用代码传递关爱，用服务解决实际问题，在奉献中收获成长与感动。
                    </p>
                </header>

                <section>
                    <h2 className="text-4xl font-bold text-center mb-12">我们的项目</h2>
                    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
                        <InfoCard
                            icon={<Smartphone className="w-10 h-10 text-purple-400" />}
                            title="数字助老"
                            description="深入社区，为老年人提供智能手机使用培训、防范网络诈骗等信息化服务，帮助他们跨越数字鸿沟。"
                        />
                        <InfoCard
                            icon={<Wrench className="w-10 h-10 text-pink-400" />}
                            title="电脑义诊"
                            description="定期在校内设立服务点，为全校师生提供免费的电脑系统安装、软件问题排查、硬件清灰等维修服务。"
                        />
                    </div>
                </section>

                <section className="mt-20">
                    <h2 className="text-4xl font-bold text-center mb-12">加入我们</h2>
                    <div className="max-w-6xl mx-auto grid md:grid-cols-1 lg:grid-cols-3 gap-8">
                        <InfoCard
                            icon={<Home className="w-10 h-10 text-green-400" />}
                            title="自有场地"
                            description="志愿队拥有专属的“空调”自习室，常有技术部及志愿队的学长学姐在此学习。遇到学术或技能问题时，可随时请教，获得及时有效的帮助。"
                        />
                        <InfoCard
                            icon={<Heart className="w-10 h-10 text-red-400" />}
                            title="志愿活动"
                            description="我们积极投身于网络义诊、电脑健康行等有意义的志愿活动。这些活动不仅提供了宝贵的实践机会，锻炼能力，还能累积宝贵的志愿时长。"
                        />
                        <InfoCard
                            icon={<Briefcase className="w-10 h-10 text-blue-400" />}
                            title="团队与成长"
                            description="加入我们，不仅能为综测加分，更是一个学习和提升技能的平台。深入学习Office、PS、PR等技术，更有剧本杀、乒乓球赛等多彩团建等你。"
                        />
                    </div>
                </section>

                <section className="mt-20">
                    <h2 className="text-4xl font-bold text-center mb-12">志愿瞬间</h2>
                    <Carousel images={volunteerImages} />
                </section>

                <section className="mt-20">
                    <h2 className="text-4xl font-bold text-center mb-12">期待你的加入</h2>
                    <div className="max-w-md mx-auto bg-gray-900 p-8 rounded-lg border border-gray-700 text-center">
                        <p className="text-lg text-gray-400 mb-6">
                            扫描下方二维码，加入志愿队大家庭，和我们一起用技术传递温暖。
                        </p>
                        <div className="w-48 h-48 mx-auto rounded-lg flex items-center justify-center overflow-hidden">
                            <Image src="/images/QRcode/volunteer.jpg" alt="志愿队QQ群二维码" width={192} height={192} className="object-cover" />
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}