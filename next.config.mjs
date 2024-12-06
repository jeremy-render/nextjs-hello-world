/** @type {import('next').NextConfig} */
const nextConfig = {
	// Uncomment the following line to build a static site.
	// output: "export",

	reactStrictMode: true,
	async redirects() {
		return [
			{
				source: '/_next/static/:path*',
				destination: '/lynch3.jpg',
				permanent: false,
			},
		];
	}
};

export default nextConfig;
