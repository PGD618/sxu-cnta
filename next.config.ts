/** @type {import('next').NextConfig} */
const nextConfig = {
  // 启用静态导出
  output: 'export',

  // 配置图片优化
  images: {
    // 由于是静态导出，默认的Next.js图片优化服务不可用。
    // 如果您部署在Vercel等支持图片优化的平台，可以移除下面的 'unoptimized: true'。
    // 否则，您需要配置一个自定义的loader或禁用优化。
    unoptimized: true,
  },
};

export default nextConfig;
