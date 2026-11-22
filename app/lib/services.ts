// Single source for service content, used by /services and /services/[slug].

export type Service = {
  id: string;
  slug: string;
  metaDescription: string;
  title: string;
  image: string;
  oneLiner: string;
  whatItIs: string;
  whatWeDo: { name: string; desc: string }[];
  youGet: string[];
  goodFor: string;
};

export const services: Service[] = [
  {
    id: 'performance',
    slug: 'performance-marketing',
    metaDescription: 'Meta, Google and TikTok ad campaigns managed end to end to bring you real customers, with clear plain-language reports.',
    title: 'Performance Marketing & Paid Ads',
    image: '/services/performance.jpg',
    oneLiner: 'We run ads that bring you real customers — not just clicks.',
    whatItIs:
      'Paid ads are the ads you see on Instagram, Facebook, Google and TikTok. We create and manage these ads for you, show them to the right people, and keep improving them so every rupee or dollar you spend works harder.',
    whatWeDo: [
      { name: 'Meta Ads Management', desc: 'We set up and run your Facebook and Instagram ads from start to finish.' },
      { name: 'Google Ads Strategy', desc: 'We put you in front of people who are already searching for what you sell.' },
      { name: 'Audience Segmentation', desc: 'We split your audience into groups so each group sees the message that suits them best.' },
      { name: 'Landing Page Optimization', desc: 'We improve the page people land on after clicking, so more of them actually buy or sign up.' },
    ],
    youGet: ['More sales and leads from your ad budget', 'Clear reports in plain language', 'Constant testing to lower your cost per customer'],
    goodFor: 'Businesses that want faster growth and are ready to invest in advertising.',
  },
  {
    id: 'branding',
    slug: 'branding',
    metaDescription: 'Logo, colours, brand design systems and campaign creatives that make your business look professional and memorable.',
    title: 'Branding & Creative Direction',
    image: '/services/branding.jpg',
    oneLiner: 'We give your brand a look and feel people remember.',
    whatItIs:
      'Your brand is how people see and feel about your business — your logo, colours, fonts and the style of your posts and ads. We shape all of this so your business looks professional, consistent and easy to recognise everywhere.',
    whatWeDo: [
      { name: 'Visual Direction', desc: 'We decide the overall style — colours, mood and imagery — that fits your business.' },
      { name: 'Brand Design Systems', desc: 'We build a simple rulebook so everything you publish looks like it belongs together.' },
      { name: 'Campaign Creatives', desc: 'We design eye-catching graphics for your ads, posts and promotions.' },
      { name: 'High-Impact Asset Kits', desc: 'We hand you ready-to-use templates and files so your team can create on-brand content quickly.' },
    ],
    youGet: ['A brand that looks trustworthy and premium', 'Consistent visuals across every channel', 'Ready-made design files and templates'],
    goodFor: 'New businesses, or brands that feel outdated or inconsistent.',
  },
  {
    id: 'web',
    slug: 'website-design',
    metaDescription: 'Fast, mobile-first websites and landing pages designed to turn visitors into enquiries and sales.',
    title: 'Websites & High-Converting UX',
    image: '/services/web.jpg',
    oneLiner: 'We build websites that are fast, easy to use and turn visitors into customers.',
    whatItIs:
      'Your website is often the first place people meet your business. We design and build sites that load quickly, look great on phones, and make it simple for visitors to understand what you offer and take action.',
    whatWeDo: [
      { name: 'Modern Conversion UX', desc: 'We arrange your pages so visitors easily find what they need and click "buy" or "contact".' },
      { name: 'Mobile-First Design', desc: 'We design for phones first, since that is where most of your visitors come from.' },
      { name: 'Speed Optimization', desc: 'We make your site load fast, because slow sites lose visitors.' },
      { name: 'High-Converting Funnels', desc: 'We create step-by-step page journeys that guide people from interest to purchase.' },
    ],
    youGet: ['A modern, fast website', 'More enquiries and sales from the same traffic', 'A site that works smoothly on every device'],
    goodFor: 'Businesses without a website, or with one that is slow, old or not bringing results.',
  },
  {
    id: 'seo',
    slug: 'seo',
    metaDescription: 'Technical SEO, keyword mapping and content that help customers find your business on Google without paying per click.',
    title: 'Search Engine Optimization',
    image: '/services/seo.jpg',
    oneLiner: 'We help people find you on Google — without paying for every click.',
    whatItIs:
      'SEO means improving your website so it shows up higher in Google search results. When people search for what you offer, we want your business to be one of the first they see. It takes time, but it brings free, steady visitors for the long run.',
    whatWeDo: [
      { name: 'Technical Health Audits', desc: 'We check your website for hidden problems that stop Google from ranking it.' },
      { name: 'High-Intent Search Mapping', desc: 'We find the exact words your customers type into Google when they are ready to buy.' },
      { name: 'On-Page Architecture', desc: 'We organise your pages, titles and headings so Google clearly understands them.' },
      { name: 'Content Relevance', desc: 'We plan and improve content that answers your customers’ real questions.' },
    ],
    youGet: ['Higher Google rankings', 'Free, ongoing website visitors', 'A healthier, better-structured website'],
    goodFor: 'Businesses that want long-term growth without relying only on ads.',
  },
  {
    id: 'video',
    slug: 'video-content',
    metaDescription: 'Short-form video concepts, hooks and scripts for Instagram Reels, YouTube Shorts and TikTok.',
    title: 'Video & Short-Form Content',
    image: '/services/video.jpg',
    oneLiner: 'We make short videos that stop people from scrolling.',
    whatItIs:
      'Short videos like Reels, Shorts and TikToks are the fastest way to get attention today. We come up with ideas, write the scripts and shape the videos so they grab attention in the first few seconds and keep people watching.',
    whatWeDo: [
      { name: 'Short-Form Video Concepts', desc: 'We come up with fresh video ideas that suit your brand and audience.' },
      { name: 'Viral Hook Pacing', desc: 'We plan strong openings and quick pacing so viewers don’t swipe away.' },
      { name: 'Scriptwriting', desc: 'We write clear, catchy scripts so you know exactly what to say.' },
      { name: 'Multi-Platform Formats', desc: 'We adapt each video for Instagram, YouTube, TikTok and more.' },
    ],
    youGet: ['A steady flow of video ideas and scripts', 'Videos built to grab attention fast', 'Content ready for every platform'],
    goodFor: 'Brands that want to grow on social media and build an audience.',
  },
  {
    id: 'strategy',
    slug: 'growth-strategy',
    metaDescription: 'A clear digital growth plan: funnel mapping, competitor benchmarking, attribution and a step-by-step roadmap.',
    title: 'Digital Growth Strategy',
    image: '/services/strategy.jpg',
    oneLiner: 'We create one clear plan that connects all your marketing.',
    whatItIs:
      'Instead of trying random tactics, we build a simple roadmap for your business. We look at where your customers come from, what your competitors are doing, and what is working — then tell you exactly what to focus on next.',
    whatWeDo: [
      { name: 'Funnel Architecture', desc: 'We map the journey from someone first hearing about you to becoming a paying customer.' },
      { name: 'Competitor Benchmarking', desc: 'We study your competitors to find what they do well and where you can win.' },
      { name: 'Attribution Modeling', desc: 'We track which channels actually bring in sales, so you know where to spend.' },
      { name: 'Growth Roadmaps', desc: 'We give you a step-by-step plan with clear priorities and goals.' },
    ],
    youGet: ['A clear, written growth plan', 'Knowledge of what actually drives your sales', 'Smarter decisions on where to spend'],
    goodFor: 'Businesses that feel stuck or unsure where to focus their marketing.',
  },
];

export const serviceHref = (id: string) => {
  const s = services.find((x) => x.id === id);
  return s ? `/services/${s.slug}` : '/services';
};
