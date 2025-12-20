export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'GluteMaxxing',
    url: 'https://glutemaxxing.app',
    logo: 'https://glutemaxxing.app/icon.png',
    description:
      'AI-powered glute development app with personalized 28-day workout programs and progress tracking.',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'support@glutemaxxing.app',
    },
    sameAs: [
      // Add social media URLs when available
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema() {
  const faqs = [
    {
      question: 'Is GluteMaxxing free?',
      answer:
        'We offer a free version with core features and optional paid upgrades for advanced programs. Pricing and terms are clearly displayed in the app stores.',
    },
    {
      question: 'Is this medical advice?',
      answer:
        'No. GluteMaxxing provides general fitness information only. It is not medical advice. Always consult a qualified health professional before starting any new exercise program.',
    },
    {
      question: 'Who is this app for?',
      answer:
        "GluteMaxxing is intended for adults who want to improve glute and lower body strength and are generally healthy. It's suitable for all fitness levels from beginners to advanced athletes.",
    },
    {
      question: 'What data do you collect?',
      answer:
        'We collect account information, usage data, and device data to provide and improve the service. Please review our Privacy Policy for complete details on data handling.',
    },
    {
      question: 'Will my photos be public?',
      answer:
        'Progress photos are private by default. Share features use abstract graphics and statistics rather than raw photos to protect your privacy.',
    },
    {
      question: 'Can I use this on multiple devices?',
      answer:
        'Yes. Your account syncs across all your devices, so your workouts, progress, and settings are always up to date wherever you train.',
    },
    {
      question: 'What if I have technical issues?',
      answer:
        'Our support team is here to help. Visit the Contact section or email support@glutemaxxing.app for assistance.',
    },
    {
      question: 'How do I cancel my subscription?',
      answer:
        'You can manage your subscription directly through the app stores (Apple App Store or Google Play). Cancellations take effect at the end of your current billing period.',
    },
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://glutemaxxing.app',
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
