import PageHeader from '@/components/ui/PageHeader';
import Image from 'next/image';
import { Heart } from 'lucide-react';
import QRCodeCard from '@/components/ui/QRCodeCard';
import Carousel from '@/components/ui/Carousel';

// 定义一个可重用的 Section 组件，用于统一样式
const Section = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <section className="mb-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
            {title}
        </h2>
        <div className="max-w-4xl mx-auto text-lg text-gray-300 space-y-6">
            {children}
        </div>
    </section>
);

// 定义一个可重用的图片网格组件
const ImageGrid = ({ images }: { images: string[] }) => (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
        {images.map((src, index) => (
            <div key={index} className="relative aspect-video rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
                <Image src={src} alt={`志愿队活动照片 ${index + 1}`} layout="fill" objectFit="cover" loading="lazy" referrerPolicy="no-referrer" />
            </div>
        ))}
    </div>
);

export default function VolunteerPage() {
    const images = [
        'https://i0.hdslb.com/bfs/new_dyn/cd5a5e64800afb959130de81582f70e42066498480.jpg',
        'https://i0.hdslb.com/bfs/new_dyn/8a837cc697ce763d8b3e2ff9b89ebdc32066498480.jpg@536w_536h_1c_1s.webp',
        'https://i0.hdslb.com/bfs/new_dyn/c6c228a52d6c913dec4b14e92ad2c66e2066498480.jpg@536w_536h_1c_1s.webp',
        'https://i0.hdslb.com/bfs/new_dyn/5ba30d85a7c6ed76910c8b364ad308dc2066498480.jpg@536w_536h_1c_1s.webp',
        'https://i0.hdslb.com/bfs/new_dyn/cd219db570431bd18ce99129100b67f82066498480.jpg@536w_536h_1c_1s.webp',
        'https://i0.hdslb.com/bfs/new_dyn/89b9669e62be0f0c7cb0df8dda1138f52066498480.jpg@536w_536h_1c_1s.webp',
        'https://i0.hdslb.com/bfs/new_dyn/13816b2ad9cd04caa61f66e649f38a6a2066498480.jpg@536w_536h_1c_1s.webp',
        'https://i0.hdslb.com/bfs/new_dyn/abab426fec7c9bd5072a5add75b61d0c2066498480.jpg@536w_536h_1c_1s.webp',
        'https://i0.hdslb.com/bfs/new_dyn/4c68c032c18a91ed01bc9dc07abf392d2066498480.jpg@536w_536h_1c_1s.webp',
        'https://i0.hdslb.com/bfs/new_dyn/d47670a53e9e0f0ea629dbd02577e75e2066498480.jpg@536w_536h_1c_1s.webp',
        'https://i0.hdslb.com/bfs/new_dyn/3cd2b3656c69e5234e80245864cfdc982066498480.jpg@536w_536h_1c_1s.webp',
        'https://i0.hdslb.com/bfs/new_dyn/f624736744878c4b6e401617fce98ddc2066498480.jpg@536w_536h_1c_1s.webp',
    ];

    const clinicImages = [
        'https://i0.hdslb.com/bfs/new_dyn/81d81639d325f218b814b0b966edebbb2066498480.png@536w_536h_1c_1s.webp',
        'https://i0.hdslb.com/bfs/new_dyn/2aba81919b0d2473303d6e3e77c4859a2066498480.png@536w_536h_1c_1s.webp',
        'https://i0.hdslb.com/bfs/new_dyn/63f045b80e065dc39caaa0311f90e1d62066498480.png@536w_536h_1c_1s.webp',
        'https://i0.hdslb.com/bfs/new_dyn/ad9008c18a9a2cb0ff65272198d0f6122066498480.png@536w_536h_1c_1s.webp',
        'https://i0.hdslb.com/bfs/new_dyn/89f3afeaa0a3c3f0fc2416b17fc503f72066498480.png@536w_536h_1c_1s.webp',
        'https://i0.hdslb.com/bfs/new_dyn/aed9884226b56873dcd271105e6cca9a2066498480.png@536w_536h_1c_1s.webp',
        'https://i0.hdslb.com/bfs/new_dyn/49503fe69f4a95b1ed03e2faa0acff392066498480.png@536w_536h_1c_1s.webp',
        'https://i0.hdslb.com/bfs/new_dyn/66b2435566a8ba8a34c0962e3323656e2066498480.png@536w_536h_1c_1s.webp',
    ];

    const carouselImages = [
        ...images.slice(1, 8), // photo02 to photo08
        'https://i0.hdslb.com/bfs/new_dyn/0535c327e8e353151208616f381465a52066498480.jpg@536w_536h_1c_1s.webp',
        'https://i0.hdslb.com/bfs/new_dyn/608f00315c92b43f918c1756d20a37282066498480.jpg@536w_536h_1c_1s.webp',
    ];
    const familyImages = images.slice(8, 12); // photo09 to photo12

    return (
        <div className="relative z-10 min-h-screen text-white">
            <div className="container mx-auto px-4 pt-28 pb-12">
                <PageHeader
                    title="志愿队"
                    description="我们坚信技术应有温度。志愿队致力于将所学知识回馈社会，用代码传递关爱，用服务解决实际问题，在奉献中收获成长与感动。"
                    titleClassName="bg-gradient-to-r from-purple-400 to-pink-500"
                />

                {/* 一、志愿队是什么 */}
                <Section title="一、志愿队是什么：我们的身份与使命">
                    <p>
                        数字素养与技能提升志愿者服务队是校级志愿服务组织，是学校推进数字校园建设、提升师生数字素养的重要力量。我们以 “普及数字技能，助力校园发展” 为宗旨，在校园中扮演着 “数字技能传播者”“志愿服务践行者” 和 “师生需求联结者” 的多重角色。无论是帮助老师解决办公软件难题，还是教退休教职工使用智能手机，亦或是开展数字安全知识讲座，都能看到我们活跃的身影。在这里，每一份付出都在为建设更智能、更温暖的校园添砖加瓦。
                    </p>
                    <div className="relative w-full rounded-lg overflow-hidden shadow-2xl mt-8 flex justify-center items-center" style={{ maxHeight: '70vh' }}>
                        <Image src={images[0]} alt="志愿队集体照" width={1280} height={720} className="w-auto h-auto object-contain max-w-full max-h-full" loading="lazy" referrerPolicy="no-referrer" />
                    </div>
                </Section>

                {/* 二、志愿队做什么 */}
                <Section title="二、志愿队做什么：部门职责与成长收获">
                    <p className="text-center text-xl mb-12">
                        志愿队下设项目部和活动部两大核心部门，两个部门协同合作，共同保障志愿活动的高效开展，无论你加入哪个部门，都能在实践中收获专属成长。
                    </p>
                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-gray-800/50 p-6 rounded-lg border border-purple-500/30">
                            <h3 className="text-2xl font-bold text-purple-400 mb-4">项目部：活动的 “智慧大脑”</h3>
                            <p>如果你擅长逻辑规划、热爱创意策划，项目部将是你的绝佳舞台。项目部的核心职责是活动全流程的策划与统筹，包括前期调研、撰写详细活动策划案、制定活动流程与应急预案、对接校内各部门资源等。在项目部，你将深度参与活动从 0 到 1 的诞生过程：从构思 “老年人智能设备培训班” 的课程体系，到设计 “数字安全进校园” 讲座的互动环节，每一个创意都有落地的可能。</p>
                            <p className="mt-4">加入项目部，你能收获的远不止策划经验。你将系统学习活动策划方法论，掌握如何精准定位需求、合理分配资源、规避潜在风险；在与各部门沟通协调的过程中，沟通能力和组织协调能力会得到显著提升；通过反复打磨策划案，你的逻辑思维和细节把控能力也将不断增强；通过运营微信公众号等宣传平台，你还能掌握推文撰写、图片编辑和新媒体运营等实用技能。</p>
                        </div>
                        <div className="bg-gray-800/50 p-6 rounded-lg border border-pink-500/30">
                            <h3 className="text-2xl font-bold text-pink-400 mb-4">活动部：现场的 “执行能手”</h3>
                            <p>如果你热衷人际交流、擅长落地执行，活动部会让你大展身手。活动部主要负责活动的现场组织，具体包括招募和培训志愿者、布置活动场地、把控活动现场流程、收集活动反馈等。从活动前的志愿者培训，到活动中的秩序维护，再到活动后的成果展示，活动部是确保活动顺利开展的 “幕前功臣”。</p>
                            <p className="mt-4">在活动部，你将在实践中快速成长。你将学习志愿者管理技巧，学会如何激发团队活力、协调分工合作；在应对活动现场的突发状况时，你的应急处理能力和应变能力会得到锻炼；更重要的是，你将在与师生的直接互动中，收获满满的成就感和幸福感，每一次看到参与者满意的笑容，都是对付出的最佳回报。</p>
                        </div>
                    </div>
                </Section>

                {/* 三、志愿队往期工作回顾 */}
                <Section title="三、志愿队往期工作回顾：一场活动的完整旅程">
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl font-bold text-cyan-400 mb-2">前期：项目部 “申报 + 定调”</h3>
                            <p>挖掘校园数字需求，撰写规范志愿申报文件，对接学校、社区等平台，为志愿活动 “拿门票”；</p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-cyan-400 mb-2">中期：活动部 “执行 + 落地”</h3>
                            <p>招募培训志愿者，如：教大家怎么高效教学数字技能、怎么和服务对象共情沟通等，筹备物资，布置场地；</p>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-cyan-400 mb-2">后期：项目部 “宣传 + 沉淀”</h3>
                            <p>用推文记录志愿故事，运营公众号账号，让更多人看见数字志愿的价值。</p>
                        </div>
                    </div>
                    <Carousel images={carouselImages} />
                </Section>

                {/* 电脑义诊活动 */}
                <Section title="电脑义诊——为你的数字生活保驾护航！">
                    <div className="text-center mb-8">
                        <p className="text-xl italic">你的电脑卡顿、蓝屏、中毒？别急，义诊来帮你！</p>
                        <p className="mt-4">现代教育技术学院联合计算机与网络技术协会、数字素养与技能提升志愿者服务队，推出 ​免费电脑义诊服务，为全校师生解决各类电脑问题！</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        <div>
                            <h3 className="text-2xl font-bold text-cyan-400 mb-4">​<span className="mr-2">🔧</span>服务内容​</h3>
                            <ul className="list-disc list-inside space-y-2 pl-4 text-gray-300">
                                <li>系统重装 & 优化</li>
                                <li>电脑清灰 & 硬件检测</li>
                                <li>病毒查杀 & 软件修复</li>
                                <li>网络问题排查</li>
                                <li>一对一技术咨询</li>
                            </ul>
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-cyan-400 mb-4"><span className="mr-2">⏰</span>​服务时间​</h3>
                            <ul className="space-y-2 pl-4">
                                <li><strong className="font-semibold text-pink-400">​教师专属​：</strong>每周三下午（办公室上门服务）</li>
                                <li><strong className="font-semibold text-purple-400">​学生专场​：</strong>每周四晚（思创楼B203集中义诊）</li>
                            </ul>
                            <p className="mt-4 text-sm text-gray-400 pl-4">活动持续至第16周，抓紧时间哦！</p>
                        </div>
                    </div>

                    <div className="mt-16 text-center space-y-4">
                        <p className="text-2xl font-bold">​我们的目标​</p>
                        <p className="text-xl">打造专业、高效的电脑义诊品牌，用技术温暖校园！</p>
                        <p className="text-3xl font-extrabold mt-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">​电脑不给力？义诊来助力！​​</p>
                        <div className="flex justify-center items-center space-x-4 text-lg font-semibold tracking-widest">
                            <span>​免费</span>
                            <span className="text-gray-500">·</span>
                            <span>专业</span>
                            <span className="text-gray-500">·</span>
                            <span>高效​</span>
                        </div>
                        <p className="mt-2 text-gray-400"><span className="mr-2">📍</span>东山校区思创楼B座B203</p>
                    </div>

                    <div className="mt-12">
                        <Carousel images={clinicImages} />
                    </div>

                    <p className="text-center mt-12 text-sm text-gray-500">— ​现代教育技术学院 & 计算机与网络技术协会 联合呈现 —</p>
                </Section>

                {/* 四、相亲相爱一家人 */}
                <Section title="四、相亲相爱一家人">
                    <div className="text-center italic space-y-4 text-gray-400">
                        <p>我们一起头脑风暴，碰撞出创新策划的火花，打磨出最贴合校园的数字志愿方案，用创意为服务注入活力，收获思维拓展的惊喜。</p>
                        <p>我们一起制作 “超有料” 的推文，把志愿活动里的温暖、成长、收获，变成生动的文字与画面，享受创作带来的成就感。</p>
                        <p>我们一起为活动奔走，在台前，是耐心教学的 “数字导师”，在幕后，是默默筹备的 “后勤管家”，活动的每一处细节，都有我们共同的身影。</p>
                        <p>我们一起出游，在自然里放松，在欢笑中加深情谊，把日常的默契，延续到旅途的每一步。</p>
                        <p>我们一起在节日团建，互赠礼物，分享喜悦，让每个值得纪念的日子，都满是温馨。</p>
                        <p>每一次相聚都幸福，志愿队的每个瞬间都值得珍藏。</p>
                        <p>我们记得成员的生日，记得活动的里程碑，用专属的仪式，把美好瞬间铭记。</p>
                        <p>我们是朋友，是伙伴，更是家人。</p>
                        <p>在数字素养提升的志愿路上，在这个温暖的大家庭，创造了无数关于成长、关于爱的难忘片段，像一部永远在续写的故事集，志愿队的故事，由每一个热爱志愿、拥抱数字的我们，一笔一划，温情书写…</p>
                    </div>
                    <ImageGrid images={familyImages} />
                </Section>

                {/* Join Us Section */}
                <section className="mt-20">
                    <h2 className="text-4xl font-bold text-center mb-12">期待你的加入</h2>
                    <QRCodeCard
                        icon={<Heart className="w-8 h-8 text-emerald-400" />}
                        title="加入志愿队"
                        description="扫描下方二维码，加入志愿队大家庭，和我们一起用技术传递温暖。"
                        qrCodeUrl="https://i0.hdslb.com/bfs/new_dyn/1fdf34425e5bb3b23854a5b34bddc3ef2066498480.png@536w_536h_1c_1s.webp"
                        altText="志愿队QQ群二维码"
                    />
                </section>
            </div>
        </div>
    );
}