// FAQ content. `service` matches an id in lib/services.ts (null = general questions).
// In an answer, each string is a paragraph; strings starting with "- " render as a bullet list.

export type Faq = { q: string; a: string[] };
export type FaqSection = { id: string; title: string; service: string | null; items: Faq[] };

export const faqSections: FaqSection[] = [
  {
    id: 'general',
    title: 'General questions',
    service: null,
    items: [
      { q: 'What does Click Mine Media do?', a: ['Click Mine Media is a digital marketing, branding and creative agency helping businesses build their online presence and grow through strategic marketing, compelling content and digital experiences.'] },
      { q: 'What types of businesses do you work with?', a: ["We work with startups, small businesses, growing brands and established companies across different industries. Our services are tailored to each business's objectives, audience and budget."] },
      { q: 'Can I hire Click Mine Media for just one service?', a: ['Absolutely! You can work with us for an individual service such as Meta Ads, Google Ads, branding, website development or SEO. You can also combine multiple services into a customised marketing plan.'] },
      { q: 'How do I get started?', a: ["Getting started is simple. Contact us through our website or WhatsApp, share your business requirements and schedule an initial discussion. We'll understand your objectives and recommend an appropriate solution."] },
      { q: 'How much do digital marketing services cost?', a: ['Pricing depends on the services required, project complexity, campaign objectives and engagement duration. We provide customised quotations based on your requirements and budget.'] },
      { q: 'How long does it take to see results from digital marketing?', a: ['The timeline depends on the marketing channels and objectives. Paid advertising can generate initial traffic and enquiries relatively quickly, while SEO and organic growth generally require sustained effort over several months.'] },
      { q: 'Do you guarantee marketing results?', a: ['No agency can responsibly guarantee a specific number of leads, sales or search rankings. We focus on strategic execution, continuous optimisation and transparent performance measurement to improve the likelihood of achieving your business goals.'] },
      { q: 'Will I have access to my marketing accounts and project assets?', a: ['Yes. We believe in transparency and appropriate client ownership. Advertising accounts, website access, creative source files and other deliverables will be managed and handed over according to the agreed project scope.'] },
      { q: 'Can you work with our existing marketing team?', a: ['Yes. We can collaborate with your internal marketing team, designers, developers or sales department to support your existing operations and marketing objectives.'] },
      { q: 'Do you work with businesses remotely?', a: ['Yes. We can collaborate remotely through online meetings, email, messaging platforms and shared project workflows.'] },
    ],
  },
  {
    id: 'performance-marketing',
    title: 'Performance marketing & paid advertising',
    service: 'performance',
    items: [
      { q: 'What is performance marketing?', a: ['Performance marketing is a digital advertising approach focused on measurable actions such as clicks, enquiries, registrations, purchases and conversions. It allows businesses to evaluate campaign performance and make informed decisions about their advertising investments.'] },
      { q: 'What advertising platforms do you work with?', a: ['We primarily work with Google Ads and Meta Ads, including Facebook and Instagram advertising. Platform selection depends on your target audience, industry and campaign objectives.'] },
      { q: 'What is the difference between Google Ads and Meta Ads?', a: ["Google Ads primarily reaches people based on their search intent, interests and browsing behaviour across Google's advertising network. Meta Ads help businesses reach audiences through interest-based, behavioural and other targeting options across Facebook and Instagram.", 'Google Ads can capture existing demand, while Meta Ads can help generate awareness and create demand. Both can work together as part of an integrated strategy.'] },
      { q: 'Can paid advertising help a small business with a limited budget?', a: ["Yes. Small businesses can use paid advertising effectively with carefully selected audiences, relevant keywords, focused campaign objectives and controlled budgets. The strategy should be aligned with the business's available resources and expected customer acquisition costs."] },
      { q: 'How much should I spend on Google or Meta Ads?', a: ['Your advertising budget depends on your industry, competition, audience size, objectives and expected acquisition costs. We recommend determining a realistic starting budget after understanding your business and campaign requirements.'] },
      { q: 'Is the advertising budget included in your management fee?', a: ['No. Advertising spend and campaign management fees are separate costs unless specifically agreed otherwise. The advertising budget is paid towards the respective advertising platforms, while our management fee covers the agreed marketing services.'] },
      { q: 'How long does it take to see results from paid advertising?', a: ['Campaigns can start generating impressions, clicks and enquiries soon after launch. However, meaningful performance evaluation requires sufficient data and ongoing optimisation. Results depend on your offer, competition, targeting, creatives, website and budget.'] },
      { q: 'Do you create ad creatives for advertising campaigns?', a: ['Yes. Depending on the selected package, we can develop advertising concepts, static creatives, copy, headlines, video assets and campaign variations designed for different audiences and advertising placements.'] },
      { q: 'How do you measure the performance of advertising campaigns?', a: ['We track relevant metrics such as impressions, reach, clicks, click-through rate, cost per click, leads, cost per lead, conversions and return on ad spend where reliable revenue tracking is available.'] },
      { q: 'What is A/B testing in advertising?', a: ['A/B testing involves comparing different versions of an advertisement, headline, creative, audience or landing page to understand which variation performs better. We use campaign data to identify opportunities for improvement.'] },
      { q: 'Can you help generate leads for my business?', a: ['Yes. We can develop lead-generation campaigns using relevant advertising platforms, audience targeting, compelling creatives and suitable landing pages or enquiry forms.'] },
      { q: 'Do you manage existing advertising accounts?', a: ['Yes. We can review existing Meta or Google Ads accounts, evaluate campaign performance, identify improvement opportunities and manage future campaigns based on the agreed scope.'] },
    ],
  },
  {
    id: 'branding',
    title: 'Branding, creative direction & social media',
    service: 'branding',
    items: [
      { q: 'What is the difference between branding and logo design?', a: ["A logo is one component of a brand's visual identity. Branding is broader and includes positioning, personality, messaging, typography, colours, visual direction and the overall experience people associate with a business."] },
      { q: 'What is included in your branding services?', a: ['Depending on the selected scope, branding services can include logo design, visual identity development, colour palettes, typography, brand guidelines, graphic assets, social media templates and creative direction.'] },
      { q: 'Why does my business need professional branding?', a: ['Professional branding helps your business establish recognition, communicate its values, build credibility and create a consistent identity across digital and offline platforms.'] },
      { q: 'Can you redesign or refresh my existing brand?', a: ['Yes. We can evaluate your existing identity and develop a refreshed visual direction that improves consistency, presentation and relevance while retaining the brand elements you want to preserve.'] },
      { q: 'Do you create social media creatives and marketing materials?', a: ['Yes. We create social media posts, promotional graphics, campaign creatives, carousels, advertisements and other digital marketing assets according to your brand requirements.'] },
      { q: 'Can you maintain consistent branding across different platforms?', a: ['Yes. We establish visual guidelines covering colours, typography, imagery, layouts and communication style so that your brand maintains a recognisable identity across its digital touchpoints.'] },
      { q: 'Do you provide brand guidelines after completing a project?', a: ['Yes, where included in the agreed scope. Brand guidelines can document logo usage, colours, typography, visual elements and other identity standards to maintain consistency.'] },
      { q: 'Do you offer ongoing social media management?', a: ['Social media management can be included as an ongoing engagement, depending on the agreed services. This may include content planning, creative development, captions, scheduling and account management.'] },
      { q: 'Can you manage multiple social media platforms?', a: ['Yes. Platform selection depends on your audience and business objectives. We can plan content and creative assets for relevant channels such as Instagram, Facebook and LinkedIn.'] },
      { q: 'Can social media marketing generate enquiries and sales?', a: ['Yes. Social media can contribute to brand discovery, customer engagement, website visits and lead generation. Results depend on the quality of the content, audience relevance, offer and overall marketing strategy.'] },
      { q: 'Can you guarantee that my social media content will go viral?', a: ['No. Virality depends on several unpredictable factors, including audience behaviour, content relevance, timing and platform distribution. We focus on creating engaging, relevant content that improves your opportunities for reach and interaction.'] },
    ],
  },
  {
    id: 'website-design',
    title: 'Website design & development',
    service: 'web',
    items: [
      { q: 'What types of websites do you develop?', a: ['We develop business websites, corporate websites, landing pages, portfolio websites and e-commerce websites. The recommended solution depends on your business requirements and functionality.'] },
      { q: 'Why should I invest in a professionally designed website?', a: ['A professionally designed website helps establish credibility, communicate your offerings, improve the customer experience and create a platform where potential customers can discover and interact with your business.'] },
      { q: 'Will my website work on mobile devices?', a: ['Yes. We develop responsive websites designed to adapt to different screen sizes, including smartphones, tablets and desktop computers.'] },
      { q: 'How long does it take to develop a website?', a: ['The timeline depends on the number of pages, design complexity, functionality, content availability and integrations. A straightforward business website generally requires less time than a custom e-commerce platform or complex web application.'] },
      { q: 'What is your website development process?', a: ['Our process typically includes requirement discovery, planning, website structure, UI/UX design, development, content integration, testing and deployment. Each stage is aligned with the approved project scope.'] },
      { q: 'How much does website development cost?', a: ['Website development costs depend on the project scope, number of pages, design requirements, functionality and integrations. We provide a project-specific quotation after understanding your requirements.'] },
      { q: 'Can you redesign my existing website?', a: ['Yes. We can redesign existing websites to improve their appearance, navigation, usability, responsiveness and overall user experience while considering the existing content and SEO structure.'] },
      { q: 'Will I be able to update my website myself?', a: ['Yes, where the selected platform includes an appropriate content management system or editing interface. We can provide guidance on managing website content and routine updates.'] },
      { q: 'Will my website be SEO-friendly?', a: ['We follow SEO-conscious development practices such as proper heading structures, responsive layouts, clean URLs, appropriate metadata and optimised images. However, website development alone does not guarantee search rankings.'] },
      { q: 'Can you develop an e-commerce website?', a: ['Yes. E-commerce development can include product catalogues, product pages, shopping carts, checkout functionality and payment gateway integrations, depending on the project requirements.'] },
      { q: 'Do you provide website maintenance after launch?', a: ['Website maintenance can be arranged as a separate or ongoing engagement. It may include software updates, backups, security checks, content updates and technical support, depending on the agreed scope.'] },
      { q: 'Will I own my website after the project is completed?', a: ['Project ownership, source-code handover, domain access, hosting access and third-party licences are defined in the project agreement. Our goal is to provide the agreed deliverables and appropriate access after completion.'] },
    ],
  },
  {
    id: 'seo',
    title: 'Search engine optimization (SEO)',
    service: 'seo',
    items: [
      { q: 'What is SEO and why does my business need it?', a: ["Search Engine Optimization (SEO) is the process of improving a website's visibility in organic search results. It helps businesses attract relevant visitors who are actively searching for their products, services or information."] },
      { q: "How do you determine my website's SEO requirements?", a: ["We begin by understanding your business objectives, audience and competition. We then review the website's technical health, existing search visibility, content, keyword targeting and backlink profile to identify opportunities for improvement."] },
      { q: 'What is keyword research?', a: ['Keyword research involves identifying the search terms people use when looking for products, services or information. We evaluate relevance, search intent and competition to select keywords aligned with your business objectives.'] },
      { q: 'What are the main types of SEO?', a: ['SEO generally includes three major areas:', '- On-page SEO: Optimising website content, headings, metadata and internal links.', '- Technical SEO: Improving crawling, indexing, site structure, performance and technical accessibility.', '- Off-page SEO: Building website authority through relevant external references, mentions and quality backlinks.'] },
      { q: 'How long does SEO take to show results?', a: ['SEO is a long-term process. Some technical improvements may show early effects, but meaningful organic growth often takes approximately three to six months or longer, depending on competition, website condition, content quality and domain authority.'] },
      { q: 'Can you guarantee first-page rankings on Google?', a: ['No. Search engine rankings depend on numerous factors, including competition, search algorithms, website quality and search intent. We follow SEO best practices and work towards improving visibility without guaranteeing specific rankings.'] },
      { q: 'How do you select the right SEO keywords?', a: ["We analyse your products and services, target audience, search intent, keyword relevance and competition. The selected keywords are mapped to suitable website pages to improve their relevance to users' searches."] },
      { q: 'What tools do you use for SEO?', a: ['SEO tools may include Google Search Console, Google Analytics, Google Keyword Planner, SEMrush, Ahrefs and other relevant platforms. Tool selection depends on the requirements of the project.'] },
      { q: 'How do you measure SEO performance?', a: ['We monitor organic traffic, keyword visibility, impressions, clicks, click-through rates, indexed pages, technical health, relevant conversions and other metrics aligned with your business objectives.'] },
      { q: 'Is SEO a one-time service?', a: ['SEO requires ongoing attention because search competition, website content, technology and search algorithms continue to evolve. An initial optimisation project can establish a foundation, while continued work helps maintain and improve performance.'] },
      { q: 'What is local SEO?', a: ["Local SEO improves your business's visibility in location-based searches. It can include Google Business Profile optimisation, local keyword targeting, business information consistency, local content and relevant local citations."] },
      { q: 'What is the difference between SEO and Google Ads?', a: ['SEO focuses on improving unpaid organic search visibility over time. Google Ads uses paid advertising to display sponsored placements and can generate traffic while campaigns are active. Both approaches can complement each other.'] },
      { q: 'What is Answer Engine Optimization (AEO) and Generative Engine Optimization (GEO)?', a: ["AEO focuses on structuring information so that search and answer platforms can provide direct answers using your content. GEO focuses on improving your brand's visibility and citation potential in AI-generated responses. Both complement traditional SEO, although their methods and measurement differ."] },
    ],
  },
  {
    id: 'video-content',
    title: 'Video editing & short-form content',
    service: 'video',
    items: [
      { q: 'What types of videos do you create?', a: ['Depending on the project, we work on Instagram Reels, YouTube Shorts, promotional videos, product videos, brand videos, advertising videos, explainers and other short-form content.'] },
      { q: 'Can you edit videos for Instagram Reels and YouTube Shorts?', a: ['Yes. We can edit vertical short-form videos with appropriate pacing, transitions, captions, sound design, graphics and platform-specific formatting.'] },
      { q: 'Do you provide scripting and content ideas?', a: ['Yes. Concept development and scriptwriting can be included in the agreed scope. We can help develop content ideas, opening hooks, messaging and storyboards based on your objectives.'] },
      { q: 'How long does it take to edit a video?', a: ['Turnaround depends on video length, complexity, source footage, animation requirements and revision rounds. Simple edits generally take less time than advanced motion graphics or complex promotional videos.'] },
      { q: 'How much does video editing cost?', a: ['Pricing depends on video duration, editing complexity, animation, graphics, sound design and the number of revisions. We provide quotations based on the project requirements.'] },
      { q: 'What do you need from me to start editing?', a: ['We generally require source footage, project references, brand assets, the intended platform, key messaging and any specific editing instructions. If we are developing the concept, we can also establish the creative direction together.'] },
      { q: 'Can you add subtitles, motion graphics and animations?', a: ['Yes. These can be included depending on the project requirements. Services may include subtitles, motion graphics, transitions, visual effects, sound design and colour correction.'] },
      { q: 'Can you create multiple versions of the same video?', a: ['Yes. We can adapt video content into different aspect ratios, durations and formats suitable for platforms such as Instagram, Facebook and YouTube.'] },
      { q: 'Do you provide video shooting and production?', a: ['Video shooting and on-location production can be discussed separately depending on the project, location, equipment and production requirements. Editing and other post-production services can be scoped independently.'] },
    ],
  },
  {
    id: 'growth-strategy',
    title: 'Digital growth strategy',
    service: 'strategy',
    items: [
      { q: 'What is a digital growth strategy?', a: ['A digital growth strategy is a structured plan that connects your business objectives with marketing channels, audience targeting, content, customer journeys and measurable performance indicators.'] },
      { q: 'Why does my business need a digital growth strategy?', a: ['Without a clear strategy, businesses may invest in disconnected marketing activities without understanding their contribution to growth. A structured plan helps prioritise channels, allocate resources and work towards defined objectives.'] },
      { q: 'What does your growth strategy service include?', a: ['Depending on the engagement, it can include business and competitor analysis, audience research, digital presence audits, marketing channel recommendations, customer journey planning, campaign direction and performance measurement frameworks.'] },
      { q: 'How do you develop a growth strategy for a business?', a: ['We begin by understanding your business model, products or services, customers and growth objectives. We evaluate your existing digital presence, identify opportunities and prepare a strategy with recommended channels, priorities and measurable goals.'] },
      { q: 'Which marketing channels should my business use?', a: ['The right channels depend on your industry, audience, budget and objectives. Depending on the business, these may include Google Ads, Meta Ads, SEO, social media, video content and website optimisation.'] },
      { q: 'Can you develop a growth strategy for a new business or startup?', a: ['Yes. A new business can benefit from a strategy that establishes its positioning, identifies its target audience, selects relevant marketing channels and builds a foundation for customer acquisition.'] },
      { q: 'Does a growth strategy include campaign execution?', a: ['A strategy engagement can be limited to research, planning and recommendations, or it can be combined with implementation through our marketing and creative services. The exact scope is agreed before work begins.'] },
      { q: 'How do you measure the success of a growth strategy?', a: ['We establish relevant performance indicators based on business objectives. These may include qualified leads, customer acquisition cost, conversion rate, website traffic, revenue contribution and return on advertising spend.'] },
      { q: 'How often should a digital growth strategy be reviewed?', a: ['A strategy should be reviewed regularly as campaign results, audience behaviour, business priorities and market conditions change. The review frequency depends on the engagement and the pace of your marketing activities.'] },
    ],
  },
];

export const faqsForService = (serviceId: string) => faqSections.find((s) => s.service === serviceId);

/** schema.org FAQPage markup so Google can show the questions in search results. */
export const faqJsonLd = (items: Faq[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a.map((p) => p.replace(/^- /, '• ')).join('\n') },
  })),
});
