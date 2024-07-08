    import createNextIntlPlugin from 'next-intl/plugin';
    import path from 'path'; 
    
    const withNextIntl = createNextIntlPlugin();
    
    /** @type {import('next').NextConfig} */
    const nextConfig = {
        sassOptions: {
            includePaths: [path.join(process.cwd(), 'app', '[locale]')],
            additionalData: `@import "~@styles/variables.scss";`
          }
    };
    
    export default withNextIntl(nextConfig);