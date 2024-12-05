/** @type {import('next').NextConfig} */
const nextConfig = {
	// Uncomment the following line to build a static site.
	// output: "export",

	reactStrictMode: true,
	// assetPrefix: process.env.DEPLOY_VERSION ? `/static/${process.env.DEPLOY_VERSION}` : '',
	// generateBuildId: async () => {
	//   	return process.env.DEPLOY_VERSION || 'default'; 
	// },
};

export default nextConfig;
