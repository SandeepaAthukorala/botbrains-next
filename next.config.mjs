/** @type {import('next').NextConfig} */
const nextConfig = {
    // Enable React strict mode for better error detection
    reactStrictMode: true,

    // Configure custom headers for Google OAuth and Firebase
    async headers() {
        return [
            {
                source: '/:path*',
                headers: [
                    {
                        key: 'Cross-Origin-Opener-Policy',
                        value: 'unsafe-none',
                    },
                    {
                        key: 'Cross-Origin-Embedder-Policy',
                        value: 'unsafe-none',
                    },
                    {
                        key: 'Content-Security-Policy',
                        value: "default-src 'self' 'unsafe-inline' 'unsafe-eval' data: blob: https://*.google.com https://*.gstatic.com https://*.googleapis.com https://*.googleusercontent.com https://*.firebaseapp.com https://*.firebase.com; script-src 'self' 'unsafe-inline' 'unsafe-eval' blob: https://*.google.com https://*.gstatic.com https://*.googleapis.com https://*.firebaseapp.com https://*.firebase.com; style-src 'self' 'unsafe-inline' https://*.googleapis.com",
                    },
                ],
            },
        ];
    },

    // Turbopack configuration (empty to suppress webpack config warning)
    turbopack: {},

    // Webpack configuration for buffer polyfill (needed for some libraries)
    webpack: (config, { isServer }) => {
        if (!isServer) {
            config.resolve.fallback = {
                ...config.resolve.fallback,
                buffer: require.resolve('buffer/'),
            };
        }
        return config;
    },

    // Experimental features
    experimental: {
        optimizePackageImports: ['lucide-react'],
    },
};

export default nextConfig;
