var weddingDummyData = {
  service: 'Weddings',
  serviceDetails: [
    {
      id: 1,
      serviceName: 'Gold',
      serviceImg:
        'https://images.squarespace-cdn.com/content/v1/58b78ae1e6f2e114e848131b/b06e0778-9bfc-4a83-ad67-59e32cbe704a/The-Rockleigh-Indian-American-Wedding-Cassi-Claire_01.jpg',
      priceRange: [1300],
      details: [
        '8 hours of wedding day coverage with a second shooter',
        '1.5 hour engagement, bridal, or formal session',
        'Editing & online delivery of all images',
        'flash drive of all images',
        'Canvas print'
      ]
    },
    {
      id: 2,
      serviceName: 'Silver',
      serviceImg:
        'https://images.squarespace-cdn.com/content/v1/58b78ae1e6f2e114e848131b/b06e0778-9bfc-4a83-ad67-59e32cbe704a/The-Rockleigh-Indian-American-Wedding-Cassi-Claire_01.jpg',
      priceRange: [1100],
      details: [
        '6 hours of wedding day coverage with a second shooter',
        '1.5 hour engagement, bridal, or formal session',
        'Editing & online delivery of all images',
        'flash drive of all images'
      ]
    },
    {
      id: 1,
      serviceName: 'Gold',
      serviceImg:
        'https://images.squarespace-cdn.com/content/v1/58b78ae1e6f2e114e848131b/b06e0778-9bfc-4a83-ad67-59e32cbe704a/The-Rockleigh-Indian-American-Wedding-Cassi-Claire_01.jpg',
      priceRange: [900],
      details: [
        '4 hours of wedding day coverage with a second shooter',
        '1 hour engagement, bridal, or formal session',
        'Editing & online delivery of all images',
        'flash drive of all images'
      ]
    }
  ],
  gallery: [
    {
      title: 'Photo 5',
      src: 'https://cdn.britannica.com/79/213479-138-CA2C079A/Life-on-the-Plains-Illinois-Frank-Sadorus-photography.jpg?w=800&h=450&c=crop'
    },
    {
      title: 'Photo 3',
      src: 'https://www.befunky.com/images/prismic/5ddfea42-7377-4bef-9ac4-f3bd407d52ab_landing-photo-to-cartoon-img5.jpeg?auto=avif,webp&format=jpg&width=863'
    },
    {
      title: 'Photo 6',
      src: 'https://images.unsplash.com/photo-1544465544-1b71aee9dfa3?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHBob3RvfGVufDB8fDB8fHww'
    }
  ]
};

export const useServiceInfo = () =>
  useState('service-info', () => [
    {
      id: 1,
      serviceName: 'Weddings',
      serviceImg:
        'https://images.squarespace-cdn.com/content/v1/58b78ae1e6f2e114e848131b/b06e0778-9bfc-4a83-ad67-59e32cbe704a/The-Rockleigh-Indian-American-Wedding-Cassi-Claire_01.jpg',
      priceRange: [900, 1100, 1300],
      hasMultiplePackages: true,
      isServiceDisplay: true,
      details: ['Proposals', 'Engagements']
    },
    {
      id: 2,
      serviceName: 'Maternity',
      serviceImg:
        'https://images.squarespace-cdn.com/content/v1/58b78ae1e6f2e114e848131b/b06e0778-9bfc-4a83-ad67-59e32cbe704a/The-Rockleigh-Indian-American-Wedding-Cassi-Claire_01.jpg',
      priceRange: [120],
      hasMultiplePackages: false,
      isServiceDisplay: true,
      details: ['45-60 Minutes', '30+ Edited Photos']
    },
    {
      id: 3,
      serviceName: 'Head Shots',
      serviceImg:
        'https://images.squarespace-cdn.com/content/v1/58b78ae1e6f2e114e848131b/b06e0778-9bfc-4a83-ad67-59e32cbe704a/The-Rockleigh-Indian-American-Wedding-Cassi-Claire_01.jpg',
      priceRange: [65, 120],
      hasMultiplePackages: true,
      isServiceDisplay: true,
      details: ['Professional Head Shots', 'Online Photo Gallery']
    }
  ]);

export const useWeddingInfo = () => useState('wedding-info', () => weddingDummyData);
