import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    // LÜTFEN DİKKAT: Siteyi yayına aldığınızda bu adresi kendi alan adınızla (domain) değiştirin.
    // Örnek: 'https://www.akdalgicpompa.com'
    const baseUrl = 'https://malatyahidrofor.com';

    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: '/private/',
        },
        sitemap: `${baseUrl}/sitemap.xml`,
    };
}
