    import createNextIntlPlugin from 'next-intl/plugin';
    import path from 'path'; 
    
    const withNextIntl = createNextIntlPlugin();
    
    /** @type {import('next').NextConfig} */
    const nextConfig = {
        sassOptions: {
            includePaths: [path.join(process.cwd(), 'app', '[locale]')],
            additionalData: `@import "~@styles/variables.scss";`
        },
        images: {
            // Тук можете да дефинирате настройките за изображения
            domains: ['localhost:3000'], // Разрешени домейни за изображения
          },
        redirects: () => {
            return [
              {
                source: '/',
                destination: '/en/home', // Локал по подразбиране
                permanent: true,
              },
              {
                source: '/:locale/',
                destination: '/:locale/home',
                permanent: true,
              },
            ]
          }
    };
    
    export default withNextIntl(nextConfig);