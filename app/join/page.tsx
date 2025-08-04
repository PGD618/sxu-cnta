import { Users, Heart, Code, Rss } from 'lucide-react';
import QRCodeCard from '@/components/ui/QRCodeCard';

const qrCodes = [
    {
        icon: <Users className="w-8 h-8 text-emerald-400" />,
        title: "CNTA总群",
        description: "加入我们的QQ总群，获取最新活动资讯，与所有成员交流。",
        qrCodeUrl: "/images/QRcode/total.png",
        altText: "CNTA QQ总群二维码"
    },
    {
        icon: <Heart className="w-8 h-8 text-purple-400" />,
        title: "志愿队",
        description: "用技术传递温暖，参与电脑义诊、数字助老等志愿活动。",
        qrCodeUrl: "/images/QRcode/volunteer.png",
        altText: "志愿队QQ群二维码"
    },
    {
        icon: <Code className="w-8 h-8 text-cyan-400" />,
        title: "技术部",
        description: "与技术大牛一同成长，参与竞赛培训和前沿项目开发。",
        qrCodeUrl: "/images/QRcode/tech.png",
        altText: "技术部QQ群二维码"
    },
    {
        icon: <Rss className="w-8 h-8 text-green-400" />,
        title: "微信公众号",
        description: "关注我们的官方公众号，获取协会动态、技术干货和活动预告。",
        qrCodeUrl: "/images/QRcode/wechat.png",
        altText: "CNTA微信公众号二维码"
    }
];

export default function JoinPage() {
    return (
        <div className="relative z-10 min-h-screen text-white">
            <div className="container mx-auto px-4 pt-28 pb-12">
                <header className="text-center mb-20">
                    <h1 className="text-5xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-500 pb-4">
                        加入我们
                    </h1>
                    <p className="text-lg text-gray-400 max-w-3xl mx-auto mt-4">
                        无论你是技术小白还是代码大神，都欢迎你的加入！在这里，我们共同成长，用代码和热情创造无限可能。
                    </p>
                </header>

                {/* QR Codes Section */}
                <section>
                    <h2 className="text-4xl font-bold text-center mb-12">扫码加入我们的大家庭</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
                        {qrCodes.map((qr, index) => (
                            <QRCodeCard
                                key={index}
                                icon={qr.icon}
                                title={qr.title}
                                description={qr.description}
                                qrCodeUrl={qr.qrCodeUrl}
                                altText={qr.altText}
                            />
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
}