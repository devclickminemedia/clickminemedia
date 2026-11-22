// Blog posts. To add a post, append an object to `posts`.
// Inline text supports [link text](/path) and **bold**.

export type Block =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'ol' | 'ul'; items: string[] }
  | { type: 'callout'; text: string };

export type Post = {
  slug: string;
  title: string; // H1
  seoTitle: string;
  description: string;
  excerpt: string;
  category: string;
  author: string;
  published: string; // YYYY-MM-DD
  updated?: string;
  image: string;
  imageAlt: string;
  readMinutes: number;
  relatedService?: string; // id from lib/services.ts
  body: Block[];
  faqs?: { q: string; a: string }[];
};

export const posts: Post[] = [
  {
    slug: 'branding-and-brand-awareness',
    title: 'Branding and Brand Awareness: How to Build a Strong Brand in the Digital Age',
    seoTitle: 'Branding and Brand Awareness: A Business Guide',
    description:
      'Learn how branding and brand awareness help businesses build recognition, earn customer trust, improve digital visibility, and grow with effective marketing strategies.',
    excerpt:
      'Why customers choose brands they recognise and trust, and seven practical strategies to build awareness for your business.',
    category: 'Branding',
    author: 'Click Mine Media',
    published: '2026-11-22',
    image: '/services/branding.jpg',
    imageAlt: 'Branding and brand awareness strategies for growing businesses',
    readMinutes: 8,
    relatedService: 'branding',
    body: [
      { type: 'callout', text: '**In short:** branding shapes how people perceive your business: your identity, message, visuals and the experience you offer. Brand awareness is how easily people recognise or recall you when they need what you sell. Strong brands build both through consistency, useful content and the right channels.' },
      { type: 'p', text: 'Imagine two businesses selling similar products at almost the same price. Both offer good quality, but customers consistently choose one over the other. Why?' },
      { type: 'p', text: 'The answer may go beyond the product itself. Customers often choose brands they recognise, trust, and connect with emotionally.' },
      { type: 'p', text: 'This is where branding and brand awareness become important. In a competitive digital market, businesses need more than a logo or a social media account. They need a clear identity, a consistent message, and a strategy that helps customers remember them.' },
      { type: 'p', text: 'Whether you run a startup, a small business, or an established company, investing in branding can help you communicate your value and build stronger relationships with your audience.' },

      { type: 'h2', text: 'What is branding and brand awareness?' },
      { type: 'p', text: '**Branding** is the process of shaping how people perceive a business. It includes your brand identity, messaging, visual design, tone of voice, values, and the experience customers have when interacting with your business.' },
      { type: 'p', text: '**Brand awareness** refers to how familiar people are with your brand and how easily they recognise or recall it when they need a product or service.' },

      { type: 'h2', text: 'Why is branding important for businesses?' },
      { type: 'h3', text: '1. Builds trust and credibility' },
      { type: 'p', text: 'Customers are more likely to consider a business when its communication, website, and visual identity appear professional and consistent. A clear brand message also helps people understand what your business offers.' },
      { type: 'h3', text: '2. Helps your business stand out' },
      { type: 'p', text: 'A strong brand communicates what makes your business different. Your unique value might be your expertise, customer experience, service quality, approach, or understanding of a particular audience.' },
      { type: 'h3', text: '3. Creates brand recognition' },
      { type: 'p', text: 'When customers repeatedly encounter consistent branding across your website, social media, advertisements, and other touchpoints, they have more opportunities to recognise and remember your business.' },
      { type: 'h3', text: '4. Builds emotional connections' },
      { type: 'p', text: 'People do not always make purchasing decisions based on price alone. A relatable story, shared values, and helpful customer experiences can create a stronger connection between a brand and its audience.' },
      { type: 'h3', text: '5. Supports long-term business growth' },
      { type: 'p', text: 'Brand awareness can introduce your business to new audiences, while a strong brand identity can help reinforce trust during the customer decision-making process. These activities support growth when combined with a valuable offering and effective marketing.' },

      { type: 'h2', text: '7 effective strategies to build brand awareness' },
      { type: 'h3', text: '1. Define your brand identity' },
      { type: 'p', text: 'Start by answering three questions: Who are you? Who do you serve? Why should customers choose you? Develop a consistent visual identity, including your logo, colours, typography, imagery, and design style. Establish a tone of voice that reflects your brand personality. Your identity should remain recognisable across your website, social media profiles, advertisements, presentations, and marketing materials.' },
      { type: 'h3', text: '2. Create a strong digital presence' },
      { type: 'p', text: 'Your website and social media profiles often help potential customers form their first impression of your business. Make sure your [website](/services/website-design) explains your services clearly, works well on mobile devices, loads efficiently, and provides simple ways to contact you. Keep your social media profiles consistent with your website.' },
      { type: 'h3', text: '3. Use content marketing to educate your audience' },
      { type: 'p', text: 'Useful content helps your business demonstrate knowledge and answer customer questions before they decide to purchase. Consider publishing educational blog posts, short videos, informative carousels, customer stories, project showcases, and behind-the-scenes content. Focus on solving real problems rather than promoting your services in every post.' },
      { type: 'h3', text: '4. Develop a consistent social media strategy' },
      { type: 'p', text: "Posting frequently is not enough if your content lacks direction. Choose content pillars that reflect your audience's needs, such as education, inspiration, expertise, customer experiences, and service explanations. Track which topics generate meaningful engagement, profile visits, website clicks, and enquiries." },
      { type: 'h3', text: '5. Use SEO to increase brand visibility' },
      { type: 'p', text: "[Search engine optimisation](/services/seo) helps your website become discoverable when people search for relevant topics, products, or services. Start with keyword research and organise your website around clear topics. Publish original, useful articles, write descriptive page titles and headings, add relevant internal links, and optimise images with descriptive alternative text. Google's [SEO Starter Guide](https://developers.google.com/search/docs/fundamentals/seo-starter-guide) is a good place to begin. SEO should help the right audience discover your expertise, not just increase website traffic." },
      { type: 'h3', text: '6. Use paid advertising strategically' },
      { type: 'p', text: 'Paid campaigns on platforms such as Google, Instagram, Facebook, and LinkedIn can introduce your brand to relevant audiences. Choose campaign objectives based on your goal. Reach and video-view campaigns can support awareness, while website traffic and lead-generation campaigns can help move interested prospects towards an enquiry. Test different creative concepts, audience segments, and messages.' },
      { type: 'h3', text: '7. Measure and improve brand awareness' },
      { type: 'p', text: 'Brand awareness should be evaluated using several indicators rather than one metric. Useful measurements include reach, impressions, branded searches, direct traffic, engagement, brand recall and recognition, and qualified enquiries. Establish a baseline, review performance over time, and use the findings to improve your strategy.' },

      { type: 'h2', text: 'Branding vs marketing: what is the difference?' },
      { type: 'p', text: '**Branding** establishes your identity, positioning, values, and the perception you want to create.' },
      { type: 'p', text: '**Marketing** communicates your offering to the right audience through channels such as SEO, social media, paid advertising, and content marketing.' },
      { type: 'p', text: 'For example, a consistent visual identity and clear brand promise are part of branding. A targeted advertising campaign promoting that business to potential customers is marketing. A strong marketing strategy works more effectively when it communicates a clear and recognisable brand.' },

      { type: 'h2', text: 'How can small businesses build brand awareness on a budget?' },
      { type: 'p', text: 'Small businesses do not necessarily need a large advertising budget to begin building brand awareness. They need consistency, a clear audience, and content that offers value. Practical steps:' },
      { type: 'ol', items: [
        'Optimise your website and social media profiles.',
        "Publish useful content around your customers' most common questions.",
        'Build relationships with relevant communities and complementary businesses.',
        'Encourage genuine customer feedback and showcase authentic testimonials with permission.',
        'Repurpose useful content into blogs, short videos, and social media posts.',
        'Review analytics regularly and invest more effort in channels that produce meaningful results.',
      ] },

      { type: 'h2', text: 'The role of digital branding in business growth' },
      { type: 'p', text: 'Today, customers may encounter a business through search engines, social media, online advertisements, referrals, or its website. Each interaction contributes to their understanding of the brand. Digital branding connects these touchpoints through a consistent identity, relevant messaging, and a clear customer experience.' },
      { type: 'p', text: 'When combined with a well-planned content strategy, search visibility, and appropriate advertising, digital branding can help businesses strengthen recognition and communicate their value more effectively.' },

      { type: 'h2', text: 'How Click Mine Media can help build your brand' },
      { type: 'p', text: 'Building a memorable brand requires more than attractive designs. It requires a clear strategy that connects your business identity with the needs of your audience.' },
      { type: 'p', text: 'Click Mine Media (CMM) helps businesses strengthen their digital presence through services such as [branding and creative direction](/services/branding), [website development](/services/website-design), social media management, [SEO](/services/seo), [performance marketing](/services/performance-marketing), and [digital growth strategy](/services/growth-strategy).' },
      { type: 'p', text: 'Whether you are launching a new business or improving an existing brand, a coordinated digital strategy can help you present your business consistently and reach the right audience.' },

      { type: 'h2', text: 'Conclusion' },
      { type: 'p', text: 'Branding and brand awareness are not one-time activities. They develop through consistent communication, a recognisable identity, useful content, and positive customer experiences.' },
      { type: 'p', text: 'For businesses looking to grow in a competitive digital environment, the goal is not simply to be seen. It is to be recognised, understood, and remembered by the right audience.' },
      { type: 'p', text: 'With a clear brand strategy and a focused digital presence, your business can build a stronger foundation for long-term growth.' },
    ],
    faqs: [
      { q: 'What is the difference between branding and brand awareness?', a: "Branding shapes a business's identity and the way people perceive it. Brand awareness measures how familiar people are with the business and how easily they recognise or recall it." },
      { q: 'Why is brand awareness important for small businesses?', a: 'Brand awareness helps small businesses introduce themselves to potential customers, become more recognisable, and build familiarity. It works best when supported by a useful offering and a consistent customer experience.' },
      { q: 'How can I increase brand awareness online?', a: 'You can increase online brand awareness through consistent social media content, SEO, useful blog posts, video marketing, paid advertising, partnerships, and a clear website experience.' },
      { q: 'How long does it take to build brand awareness?', a: 'The timeline depends on your audience, competition, budget, marketing channels, and consistency. Brand awareness is an ongoing process, so businesses should monitor performance over time rather than expect a guaranteed result within a fixed period.' },
      { q: 'How do you measure brand awareness?', a: 'Common methods include brand surveys, recall and recognition tests, branded search trends, reach, impressions, relevant engagement, website analytics, and qualified enquiries.' },
      { q: 'Does branding help with SEO?', a: 'Branding and SEO support each other in different ways. SEO helps people discover relevant pages, while consistent branding can improve recognition and trust. A well-branded website should still provide useful content, clear navigation, and technically accessible pages.' },
      { q: 'Can a small business build brand awareness without paid ads?', a: 'Yes. Businesses can start with organic social media, SEO, educational content, partnerships, community participation, and customer referrals. Paid advertising can complement these efforts when budget and business objectives justify it.' },
    ],
  },
];

export const sortedPosts = () => [...posts].sort((a, b) => b.published.localeCompare(a.published));

export const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' });
