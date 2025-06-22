/** @type {import('next').NextConfig} */




/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack(config) {
        // Enable WebAssembly support
        config.experiments = { 
            asyncWebAssembly: true,
            layers: true, // Optional: improves caching
        };

        // Important: Return the modified config
        return config;
    },
};

export default nextConfig;
