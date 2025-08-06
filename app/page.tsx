import Link from 'next/link';
import GlassCard from '@/components/ui/GlassCard';
import TypeWriter from '@/components/TypeWriter';
import CyberpunkDivider from '@/components/ui/CyberpunkDivider';
import PageHeader from '@/components/ui/PageHeader';
import { ArrowRight, Award, Briefcase, Code, Handshake, Heart, Star, Home } from 'lucide-react';
import InfoCard from '@/components/ui/InfoCard';
import Carousel from '@/components/ui/Carousel';

// 视觉建议：在标题旁添加二进制代码背景装饰
const BinaryBackground = ({ text }: { text: string }) => (
  <div className="absolute inset-0 flex items-center justify-center overflow-hidden z-0">
    <p className="font-mono text-center text-gray-800/80 text-sm whitespace-nowrap opacity-10">
      {text}
    </p>
  </div>
);

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative z-10 flex flex-col items-center justify-center h-screen text-center px-4">
        <div className="max-w-3xl animate-fadeIn" style={{ animationDelay: '0.2s' }}>
          <h1 className="text-4xl md:text-6xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[var(--primary)] to-[var(--secondary)] pb-4">
            欢迎来到计算机与网络技术协会
          </h1>
          <div className="mt-8 text-lg md:text-xl text-[var(--foreground)]/80">
            <TypeWriter text="在这里，与最优秀的头脑一起学习、创造和成长。" speed={50} />
          </div>
          <div className="mt-8 flex justify-center gap-4">
            <Link href="/join" className="px-8 py-3 bg-[var(--primary)] text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-transform transform hover:scale-105 btn-glow">
              加入我们
            </Link>
            <a href="#about-cnta" className="px-8 py-3 bg-white text-black font-semibold rounded-lg shadow-lg hover:bg-gray-200 transition-all transform hover:scale-105 btn-glow-white">
              了解我们
            </a>
          </div>
        </div>
      </div>

      <main className="container mx-auto px-4">
        {/* About Section */}
        <section id="about-cnta" className="relative text-center mb-24 py-16 overflow-hidden scroll-mt-16">
          <BinaryBackground text="01000011 01001110 01010100 01000001" />
          <div className="relative z-10">
            <PageHeader
              title="关于CNTA"
              description=""
              titleClassName="bg-gradient-to-r from-cyan-400 to-purple-500"
            />
            <div className="max-w-3xl mx-auto px-6 text-lg text-gray-300 mt-4 text-left space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-cyan-400 mb-2">协会简介</h3>
                <p>
                  计算机与网络技术协会（CNTA），成立于2015年，是隶属于现代教育技术学院的明星技术型学生社团，协助校区网络维护和维修。协会设有志愿队和技术部，开展专业知识学习和竞赛活动，注重将知识与实践相结合。管理校级志愿队，组织数字助老和电脑义诊等志愿活动，培养数字素养与技能。协会定期举办讲座、比赛观摩等活动，为成员提供学习和实践的平台。我们以&quot;连接未来，创新无限&quot;为宗旨，致力于搭建校内顶尖的计算机与网络安全技术交流平台，通过赛事和项目驱动，全方位培养成员的工程实践能力与技术创新思维。
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
          <h2 className="text-4xl font-bold text-center mb-12 text-white">我们的团队</h2>
          <div className="grid md:grid-cols-2 gap-8 w-full max-w-4xl mx-auto">
            <Link href="/tech" className="block group">
              <InfoCard
                icon={<Code className="w-8 h-8 text-cyan-400" />}
                title="技术部"
                className="h-full"
              >
                <p className="text-gray-400 mb-4">协会的技术核心，负责竞赛训练、项目开发和前沿技术探索。</p>
                <span className="font-semibold text-cyan-400 flex items-center">
                  了解更多 <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </span>
              </InfoCard>
            </Link>
            <Link href="/volunteer" className="block group">
              <InfoCard
                icon={<Heart className="w-8 h-8 text-purple-400" />}
                title="志愿队"
                className="h-full"
              >
                <p className="text-gray-400 mb-4">用技术传递温度，参与数字助老、电脑义诊等公益活动。</p>
                <span className="font-semibold text-purple-400 flex items-center">
                  了解更多 <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </span>
              </InfoCard>
            </Link>
          </div>
        </section>

        {/* Section 3: Why Choose Us? */}
        <section className="mb-24">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">为什么选择我们？</h2>
          <div className="grid md:grid-cols-2 gap-8 w-full max-w-5xl mx-auto">
            <InfoCard icon={<Award className="w-8 h-8 text-yellow-400" />} title="竞赛支持">
              <p className="text-gray-300">近三年，我们的成员在省级以上竞赛中斩获超过 <strong>20</strong> 项奖项，提供系统性的赛前培训和指导。</p>
            </InfoCard>
            <InfoCard icon={<Briefcase className="w-8 h-8 text-green-400" />} title="硬件资源">
              <p className="text-gray-300">拥有专属自习室，配备专属服务器，为你的创意提供硬件保障。</p>
            </InfoCard>
          </div>
        </section>

        {/* Section: Study Room */}
        <section className="mb-24">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">独立自习室</h2>
          <div className="grid md:grid-cols-2 gap-8 w-full mx-auto items-center">
            <InfoCard icon={<Home className="w-8 h-8 text-teal-400" />} title="专属学习空间">
              <p className="text-gray-300">
                我们拥有专属的自习室，为成员们提供了一个稳定、高效的学习和交流环境。在这里，当你遇到技术难题时，可以随时向经验丰富的学长学姐请教，获得及时的指导和帮助。这个空间不仅是解决问题的场所，更是激发灵感、突破瓶颈的摇篮。
              </p>
            </InfoCard>
            <Carousel images={['https://i0.hdslb.com/bfs/new_dyn/31b15b367f3509bbe4b1418f4fb21e592066498480.png@536w_536h_1c_1s.webp',
              'https://i0.hdslb.com/bfs/new_dyn/e6ffd88cb3cc419142402479aa3b46772066498480.png@536w_536h_1c_1s.webp',
              'https://i0.hdslb.com/bfs/new_dyn/9601c7867840df1e765392349b0a6b172066498480.png@536w_536h_1c_1s.webp',
              'https://i0.hdslb.com/bfs/new_dyn/47b5ec17af027ff983621d869099dc702066498480.png@536w_536h_1c_1s.webp']} />
          </div>
        </section>

        {/* Section 4: Your Gains */}
        <section className="mb-24">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">你的收获</h2>
          <div className="grid md:grid-cols-2 gap-8 w-full max-w-5xl mx-auto">
            <InfoCard icon={<Star className="w-8 h-8 text-pink-400" />} title="技能提升">
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li><strong>技术部：</strong> 从入门到竞赛级的系统化训练，掌握行业前沿技术。</li>
                <li><strong>志愿队：</strong> 在实践中提升沟通协调能力，收获宝贵的公益履历。</li>
              </ul>
            </InfoCard>
            <InfoCard icon={<Handshake className="w-8 h-8 text-blue-400" />} title="职业助力">
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>优秀成员可获实习或护网的机会。</li>
                <li>参与真实项目开发，为你的简历增添浓墨重彩的一笔。</li>
              </ul>
            </InfoCard>
          </div>
        </section>

        {/* Content Section */}
        <div className="relative z-10 py-20">
          <CyberpunkDivider />
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto animate-fadeIn" style={{ animationDelay: '0.4s' }}>
            <GlassCard>
              <h3 className="text-xl font-bold text-blue-400" style={{ textShadow: '0 0 8px rgba(59, 130, 246, 0.8)' }}>项目孵化</h3>
              <p className="mt-2 text-[var(--foreground)]/80">
                提供资源和指导，将你的创意变为现实。
              </p>
            </GlassCard>
            <GlassCard>
              <h3 className="text-xl font-bold text-blue-400" style={{ textShadow: '0 0 8px rgba(59, 130, 246, 0.8)' }}>技术工坊</h3>
              <p className="mt-2 text-[var(--foreground)]/80">
                学习最新技术，与优秀学长面对面交流。
              </p>
            </GlassCard>
            <GlassCard>
              <h3 className="text-xl font-bold text-blue-400" style={{ textShadow: '0 0 8px rgba(59, 130, 246, 0.8)' }}>社团活动</h3>
              <p className="mt-2 text-[var(--foreground)]/80">
                参与技术分享会，结交志同道合的伙伴。
              </p>
            </GlassCard>
          </div>
          <CyberpunkDivider className="my-16" />
        </div>
      </main>
    </>
  );
}
