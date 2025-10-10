/** @type {import('next').NextConfig} */
const nextConfig = {
  // 이미지 최적화 안 쓸 거면 이거 유지해도 OK
  // images: { unoptimized: true },

  // ✅ 빌드 중 ESLint 무시
  eslint: {
    ignoreDuringBuilds: true,
  },

  // ✅ 빌드 중 타입체크 무시
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
