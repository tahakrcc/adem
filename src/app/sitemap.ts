import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    // LÜTFEN DİKKAT: Siteyi yayına aldığınızda bu adresi kendi alan adınızla (domain) değiştirin.
    // Örnek: 'https://www.akdalgicpompa.com'
    const baseUrl = 'https://malatyahidrofor.com';

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: `${baseUrl}/kvkk`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
        {
            url: `${baseUrl}/gizlilik-politikasi`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.3,
        },
    ];
}
