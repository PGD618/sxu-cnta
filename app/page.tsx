import Link from 'next/link';
import GlassCard from '@/components/ui/GlassCard';
import TypeWriter from '@/components/TypeWriter';
import CyberpunkDivider from '@/components/ui/CyberpunkDivider';

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
            <Link href="/about" className="px-8 py-3 bg-gray-200/10 text-[var(--foreground)] font-semibold rounded-lg shadow-md hover:bg-gray-200/20 transition-transform transform hover:scale-105">
              了解我们
            </Link>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="relative z-10 py-20">
        <CyberpunkDivider />
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-4 animate-fadeIn" style={{ animationDelay: '0.4s' }}>
          <GlassCard>
            <h3 className="text-xl font-bold text-[var(--primary)]">项目孵化</h3>
            <p className="mt-2 text-[var(--foreground)]/80">
              提供资源和指导，将你的创意变为现实。
            </p>
          </GlassCard>
          <GlassCard>
            <h3 className="text-xl font-bold text-[var(--primary)]">技术工坊</h3>
            <p className="mt-2 text-[var(--foreground)]/80">
              学习最新技术，与优秀学长面对面交流。
            </p>
          </GlassCard>
          <GlassCard>
            <h3 className="text-xl font-bold text-[var(--primary)]">社团活动</h3>
            <p className="mt-2 text-[var(--foreground)]/80">
              参与技术分享会，结交志同道合的伙伴。
            </p>
          </GlassCard>
        </div>
        <CyberpunkDivider className="my-16" />
      </div>
    </>
  );
}
