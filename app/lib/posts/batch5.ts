import type { Post } from '../blog';

// Batch 5: email, conversion websites, in-house vs agency, festivals, reputation, ROI.
export const batch5: Post[] = [
  {
    slug: 'email-marketing-guide',
    title: 'Email Marketing for Businesses: Build a List and Send Emails People Open',
    seoTitle: 'Email Marketing Guide: Build Your List & Boost Opens and Sales',
    description:
      'A practical email marketing guide: building a permission-based list, welcome and automated flows, newsletters, subject lines, deliverability, segmentation and measuring results.',
    excerpt:
      'Email is one of the few channels you fully own. Here is how to build a list, automate key emails and send messages people actually want to open.',
    category: 'Email Marketing',
    author: 'Click Mine Media',
    published: '2026-11-26',
    image: '/services/strategy.jpg',
    imageAlt: 'Person reading marketing emails on a laptop',
    readMinutes: 7,
    relatedService: 'strategy',
    body: [
      { type: 'callout', text: "**In short:** email marketing works best when you build a permission-based list with a genuine reason to subscribe, set up automated flows for key moments (welcome, abandoned cart, post-purchase), send regular emails that are useful rather than only promotional, segment by interest and behaviour, and protect deliverability." },
      { type: 'p', text: "Social platforms change their algorithms, ad costs rise and fall, but your email list belongs to you. For many businesses, email remains one of the most cost-effective channels for repeat sales and customer relationships." },

      { type: 'h2', text: '1. Build a permission-based list' },
      { type: 'ul', items: [
        'Offer something useful in exchange: a guide, checklist, discount or early access.',
        'Add sign-up forms to your website, checkout and social profiles.',
        'Collect emails at events and in-store, with clear consent.',
        'Never buy email lists; it harms deliverability and trust.',
      ] },

      { type: 'h2', text: '2. Set up automated flows' },
      { type: 'ol', items: [
        '**Welcome series:** introduce your brand, set expectations and share your best content or offer.',
        '**Abandoned cart or enquiry follow-up:** remind people what they left behind.',
        '**Post-purchase:** thank customers, share usage tips and ask for reviews.',
        '**Win-back:** re-engage customers who have not bought in a while.',
      ] },

      { type: 'h2', text: '3. Send useful regular emails' },
      { type: 'p', text: "Mix education, stories, product news and offers. A good rule is to give value more often than you ask for a sale. Keep a consistent schedule so subscribers know what to expect." },

      { type: 'h2', text: '4. Write subject lines people open' },
      { type: 'ul', items: [
        'Be clear and specific about what is inside.',
        'Keep it short enough to read on a phone.',
        'Use the preview text to add context.',
        'Avoid misleading or spammy wording.',
      ] },

      { type: 'h2', text: '5. Segment and personalise' },
      { type: 'p', text: "Group subscribers by interest, location, purchase history or engagement. Relevant emails earn more opens and fewer unsubscribes than one message sent to everyone." },

      { type: 'h2', text: '6. Protect deliverability' },
      { type: 'p', text: "Authenticate your sending domain (SPF, DKIM and DMARC), remove inactive subscribers periodically, make unsubscribing easy and avoid sudden spikes in volume. Major inbox providers such as Gmail publish [sender guidelines](https://support.google.com/a/answer/81126) that are worth following." },

      { type: 'h2', text: 'What to measure' },
      { type: 'ul', items: [
        'Click-through rate and conversions from each email.',
        'Revenue or enquiries from automated flows.',
        'Unsubscribe and spam complaint rates.',
        'List growth and engagement over time.',
      ] },
      { type: 'p', text: "Open rates are less reliable than they used to be because of privacy features in email apps, so focus on clicks and conversions." },

      { type: 'h2', text: 'Email and WhatsApp together' },
      { type: 'p', text: "In India, many businesses pair email with WhatsApp: email for detailed content and receipts, WhatsApp for quick updates and conversations. See our [WhatsApp marketing guide](/blog/whatsapp-marketing-guide)." },

      { type: 'h2', text: 'The bottom line' },
      { type: 'p', text: "Email rewards patience and respect. Build your list with permission, automate the important moments and send emails worth opening." },
      { type: 'p', text: "Want help setting up email flows? [Talk to us](/#contact) or explore our [growth strategy service](/services/growth-strategy)." },
    ],
    faqs: [
      { q: 'Is email marketing still effective?', a: 'Yes. Email remains one of the most cost-effective channels for nurturing leads, driving repeat purchases and building relationships, especially because you own your list.' },
      { q: 'How often should I send marketing emails?', a: 'Choose a frequency you can sustain with useful content, such as weekly or fortnightly, and watch unsubscribe rates to find the right balance.' },
      { q: 'Can I buy an email list?', a: 'You should not. Purchased lists usually contain people who never agreed to hear from you, which harms deliverability, brand reputation and may breach privacy rules.' },
      { q: 'What is the most important email to set up first?', a: 'A welcome series is usually the best starting point because new subscribers are most engaged right after signing up.' },
    ],
  },

  {
    slug: 'website-that-converts',
    title: 'How to Build a Website That Converts Visitors into Customers',
    seoTitle: 'Website Design That Converts: Turn Visitors into Customers',
    description:
      'Learn the elements of a high-converting business website: clear messaging, fast mobile performance, trust signals, strong calls to action, landing pages, forms and conversion tracking.',
    excerpt:
      'A beautiful website is not enough. Here are the building blocks that turn visitors into enquiries, bookings and sales.',
    category: 'Web Design',
    author: 'Click Mine Media',
    published: '2026-11-26',
    image: '/services/web.jpg',
    imageAlt: 'Web designer working on a conversion-focused website layout',
    readMinutes: 8,
    relatedService: 'web',
    body: [
      { type: 'callout', text: "**In short:** a website converts when visitors instantly understand what you offer and why it matters, the site loads fast on mobile, trust signals reduce doubt, every page has one clear next step, forms are short and you track conversions so you can keep improving." },
      { type: 'p', text: "Your website is often where marketing either pays off or fails. Ads, SEO and social media bring people in; your website decides whether they enquire, book or buy. Small improvements in conversion can make every rupee of marketing work harder." },

      { type: 'h2', text: '1. Make the message instantly clear' },
      { type: 'p', text: "Within a few seconds, visitors should know what you do, who it is for and what to do next. Use a specific headline, a short supporting line and a visible call to action above the fold. Avoid vague slogans." },

      { type: 'h2', text: '2. Prioritise speed and mobile' },
      { type: 'ul', items: [
        'Compress images and use modern formats.',
        'Avoid heavy sliders and unnecessary scripts.',
        'Design for thumbs first: large buttons and readable text.',
        'Test with Google’s [PageSpeed Insights](https://pagespeed.web.dev/).',
      ] },

      { type: 'h2', text: '3. Build trust' },
      { type: 'ul', items: [
        'Genuine reviews and testimonials.',
        'Client logos and case studies, shared with permission.',
        'Clear pricing or pricing guidance where possible.',
        'Team photos, address, contact details and policies.',
        'Security, certifications and guarantees where relevant.',
      ] },

      { type: 'h2', text: '4. One clear call to action per page' },
      { type: 'p', text: "Decide the single most important action for each page, such as book a call, get a quote or buy now, and make it obvious. Repeat it after key sections. Offer WhatsApp and click-to-call for visitors who prefer quick conversations." },

      { type: 'h2', text: '5. Use dedicated landing pages for campaigns' },
      { type: 'p', text: "Ads should lead to focused landing pages that match the ad’s promise, not your homepage. Remove distractions, repeat the offer and keep the form simple. This often improves cost per lead significantly." },

      { type: 'h2', text: '6. Keep forms short' },
      { type: 'p', text: "Ask only for what you need to follow up. Every extra field can reduce completions. You can always collect more details in the first conversation." },

      { type: 'h2', text: '7. Track and test' },
      { type: 'p', text: "Set up conversion tracking for forms, calls, WhatsApp clicks and purchases. Use analytics and heatmaps to see where visitors drop off, then test changes to headlines, layouts and calls to action." },

      { type: 'h2', text: 'Common mistakes' },
      { type: 'ul', items: [
        'Clever but unclear headlines.',
        'Slow pages loaded with large images and videos.',
        'No clear next step, or too many competing ones.',
        'Contact details hidden in the footer.',
        'No conversion tracking.',
      ] },

      { type: 'h2', text: 'The bottom line' },
      { type: 'p', text: "A website that converts is clear, fast, trustworthy and focused on action. Treat it as your best salesperson and keep improving it with real data." },
      { type: 'p', text: "Need a website built to convert? See our [website design and development service](/services/website-design) or [talk to us](/#contact)." },
    ],
    faqs: [
      { q: 'What is a good website conversion rate?', a: 'It varies widely by industry, traffic source and offer. Instead of chasing a universal benchmark, track your own rate and aim to improve it steadily.' },
      { q: 'Does website speed affect conversions?', a: 'Yes. Slow pages frustrate visitors, especially on mobile, and many will leave before the page loads. Speed also affects user experience signals in search.' },
      { q: 'Should I use a landing page or my homepage for ads?', a: 'A dedicated landing page that matches the ad usually converts better than a general homepage because it focuses on one offer and one action.' },
      { q: 'How often should I update my website?', a: 'Review key pages regularly, update content and offers as your business changes, and run small tests continuously based on analytics.' },
    ],
  },

  {
    slug: 'in-house-vs-agency-marketing',
    title: 'In-House Marketing Team vs Digital Marketing Agency: Which Is Right for You?',
    seoTitle: 'In-House Marketing Team vs Digital Marketing Agency: Pros & Cons',
    description:
      'Compare building an in-house marketing team with hiring a digital marketing agency: cost, skills, speed, control and when a hybrid model works best for small and growing businesses.',
    excerpt:
      'Hire a marketing team or outsource to an agency? Here is an honest comparison of cost, skills, speed and control, plus when a hybrid model wins.',
    category: 'Agency Guide',
    author: 'Click Mine Media',
    published: '2026-11-26',
    image: '/services/strategy.jpg',
    imageAlt: 'Marketing team collaborating in a modern office',
    readMinutes: 7,
    relatedService: 'strategy',
    body: [
      { type: 'callout', text: "**In short:** an in-house team offers deep brand knowledge and control but takes time and money to build across many skills. An agency gives access to a range of specialists, tools and experience quickly. Many growing businesses do best with a hybrid: an in-house marketing lead working with an agency for specialist execution." },
      { type: 'p', text: "As a business grows, marketing usually moves from the founder’s to-do list to a dedicated function. The big question is whether to hire people internally or work with a digital marketing agency. Both can work; the right choice depends on your stage, budget and needs." },

      { type: 'h2', text: 'Advantages of an in-house team' },
      { type: 'ul', items: [
        '**Deep knowledge** of your product, customers and culture.',
        '**Full focus** on your business.',
        '**Faster day-to-day coordination** with sales and leadership.',
        '**Long-term capability** built inside the company.',
      ] },

      { type: 'h2', text: 'Challenges of an in-house team' },
      { type: 'ul', items: [
        'Modern marketing needs many skills: strategy, paid ads, SEO, design, video, copy, analytics. Few people do all well.',
        'Hiring, training and retaining talent takes time and money.',
        'Tools and software add recurring costs.',
        'Small teams can become isolated from what works across other businesses.',
      ] },

      { type: 'h2', text: 'Advantages of an agency' },
      { type: 'ul', items: [
        '**Access to specialists** across channels without hiring each one.',
        '**Speed:** campaigns can start quickly with an experienced team.',
        '**Cross-industry experience** and current best practices.',
        '**Tools and processes** already in place.',
        '**Flexibility** to scale scope up or down.',
      ] },

      { type: 'h2', text: 'Challenges of an agency' },
      { type: 'ul', items: [
        'Agencies need time to understand your business deeply.',
        'You share their attention with other clients.',
        'Communication and approvals need clear processes.',
        'Quality varies, so choosing the right partner matters. See [how to choose an agency](/blog/choose-digital-marketing-agency-mumbai).',
      ] },

      { type: 'h2', text: 'The hybrid model' },
      { type: 'p', text: "Many businesses hire one strong in-house marketing manager who owns strategy, brand and coordination, and partners with an agency for specialist execution such as performance marketing, SEO, video or design. This combines internal knowledge with external expertise." },

      { type: 'h2', text: 'How to decide' },
      { type: 'ol', items: [
        'List the skills you need over the next year.',
        'Estimate the full cost of hiring for each, including salaries, tools and management time.',
        'Compare that with agency proposals for the same scope.',
        'Consider how quickly you need results.',
        'Decide which capabilities are core to keep in-house long term.',
      ] },

      { type: 'h2', text: 'The bottom line' },
      { type: 'p', text: "There is no universal answer. Early-stage and small businesses often benefit from an agency’s breadth. Larger companies build internal teams for core functions and use agencies for specialist depth. Choose the model that gives you the skills you need, at the speed you need, for a cost that makes sense." },
      { type: 'p', text: "Considering an agency partner? [Talk to us](/#contact) about how we work alongside in-house teams." },
    ],
    faqs: [
      { q: 'Is it cheaper to hire an agency or an in-house team?', a: 'It depends on scope. For a wide range of skills, an agency is often more cost-effective than hiring several specialists. For a narrow, constant workload, an in-house hire can be efficient.' },
      { q: 'Can an agency work with my in-house team?', a: 'Yes. Many agencies collaborate with internal marketers, handling specialist execution while the in-house team owns strategy and brand.' },
      { q: 'When should a startup hire its first marketer?', a: 'Often once there is a clear product and audience and the founder can no longer give marketing consistent attention. Many startups use an agency or freelancers before that.' },
      { q: 'What should stay in-house?', a: 'Brand ownership, customer insight and overall strategy usually benefit from being close to the business, even if execution is outsourced.' },
    ],
  },

  {
    slug: 'festival-marketing-campaigns-india',
    title: 'Festival Marketing in India: How to Plan Diwali and Festive Season Campaigns',
    seoTitle: 'Festival Marketing in India: Plan Diwali & Festive Campaigns',
    description:
      'How Indian businesses can plan festival marketing campaigns for Diwali, Navratri, Ganesh Chaturthi, Eid, Christmas and more: timelines, creative ideas, ads, offers and measurement.',
    excerpt:
      'Festive seasons drive huge demand and fierce competition. Here is how to plan Diwali and other festival campaigns that stand out and sell.',
    category: 'Campaign Planning',
    author: 'Click Mine Media',
    published: '2026-11-26',
    image: '/services/branding.jpg',
    imageAlt: 'Festive lights and decorations representing Diwali marketing',
    readMinutes: 7,
    relatedService: 'branding',
    body: [
      { type: 'callout', text: "**In short:** festival marketing works when you plan early, build an emotional and culturally respectful idea, prepare creative and stock in advance, warm up audiences before peak days, increase budgets when demand peaks and measure results by festival so next year is even better." },
      { type: 'p', text: "India’s calendar is full of festivals, and each brings shopping, gifting, travel and celebration. For many businesses, the festive season, especially around Diwali, accounts for a large share of annual sales. It also means advertising becomes more crowded and often more expensive." },

      { type: 'h2', text: '1. Map the festival calendar for your audience' },
      { type: 'p', text: "Key moments differ by region and audience: Ganesh Chaturthi in Maharashtra, Durga Puja in Bengal, Onam in Kerala, Pongal in Tamil Nadu, Navratri and Diwali across much of India, plus Eid, Christmas, Raksha Bandhan and regional new years. Pick the ones that matter most for your customers." },

      { type: 'h2', text: '2. Plan early' },
      { type: 'ul', items: [
        'Finalise offers, stock and logistics well in advance.',
        'Produce creative before the season rush.',
        'Set up and test campaigns, tracking and landing pages early.',
        'Brief creators and partners ahead of time.',
      ] },

      { type: 'h2', text: '3. Build a meaningful campaign idea' },
      { type: 'p', text: "The best festive campaigns connect your brand to the emotions of the festival: family, gratitude, new beginnings, giving. Be culturally respectful and authentic. A strong idea can be expressed across Reels, ads, packaging, store displays and WhatsApp." },

      { type: 'h2', text: '4. Warm up, then convert' },
      { type: 'p', text: "Start with awareness and engagement content in the weeks before the festival to build audiences you can retarget. As peak shopping days approach, shift budget towards conversion campaigns, offers and urgency." },

      { type: 'h2', text: '5. Festive creative ideas' },
      { type: 'ul', items: [
        'Gift guides by budget or recipient.',
        'Limited-edition festive packaging or collections.',
        'Countdown offers and early-bird access for loyal customers.',
        'Behind-the-scenes preparation videos.',
        'Regional-language greetings and campaigns. See our [regional language marketing guide](/blog/regional-language-marketing-india).',
        'Corporate gifting offers for B2B audiences.',
      ] },

      { type: 'h2', text: '6. Expect higher ad costs' },
      { type: 'p', text: "Competition for ad space often increases during major festivals. Strong creative, well-built audiences from your warm-up phase and careful budget pacing help keep costs under control." },

      { type: 'h2', text: '7. Measure and learn' },
      { type: 'ul', items: [
        'Sales and leads by campaign and channel.',
        'Cost per acquisition compared with normal months.',
        'Offer redemptions and average order value.',
        'New versus returning customers.',
      ] },
      { type: 'p', text: "Document what worked and start planning next year’s festive season with real data." },

      { type: 'h2', text: 'The bottom line' },
      { type: 'p', text: "Festive seasons reward businesses that plan ahead, respect the spirit of each celebration and execute consistently across channels." },
      { type: 'p', text: "Planning a festive campaign? See our [branding and creative service](/services/branding) or [talk to us](/#contact)." },
    ],
    faqs: [
      { q: 'When should I start planning Diwali marketing?', a: 'Ideally a couple of months ahead, so offers, stock, creative, campaigns and tracking are ready before competition for attention peaks.' },
      { q: 'Do ad costs increase during festivals?', a: 'They often do, because many businesses advertise at the same time. Warming up audiences early and using strong creative can help manage costs.' },
      { q: 'Should every business run festival campaigns?', a: 'Not every festival fits every brand. Choose the festivals that matter to your customers and where your product genuinely fits the occasion.' },
      { q: 'How can B2B companies use festivals?', a: 'Corporate gifting, client appreciation messages, festive greetings and year-end offers are common ways for B2B businesses to engage during festive seasons.' },
    ],
  },

  {
    slug: 'online-reputation-management',
    title: 'Online Reputation Management: How to Earn, Monitor and Respond to Reviews',
    seoTitle: 'Online Reputation Management: Reviews, Monitoring & Responses',
    description:
      'An online reputation management guide for businesses: collecting genuine reviews, responding to negative feedback, monitoring mentions, handling crises and building trust over time.',
    excerpt:
      'Your reputation is what people find when they search your name. Here is how to collect reviews, respond well and handle negative feedback calmly.',
    category: 'Reputation',
    author: 'Click Mine Media',
    published: '2026-11-26',
    image: '/services/branding.jpg',
    imageAlt: 'Customer leaving a review for a business online',
    readMinutes: 7,
    relatedService: 'branding',
    body: [
      { type: 'callout', text: "**In short:** online reputation management means actively earning genuine reviews, responding to all feedback professionally, monitoring what people say about you, fixing the real problems behind complaints and building positive content that shows who you are. It is ongoing, not a one-time clean-up." },
      { type: 'p', text: "Before people call, visit or buy, they often search your business name. Ratings on Google, reviews on industry platforms, social comments and news mentions shape their first impression. A strong reputation makes every other marketing effort more effective." },

      { type: 'h2', text: '1. Earn genuine reviews consistently' },
      { type: 'ul', items: [
        'Ask satisfied customers at the right moment, such as after a successful delivery or appointment.',
        'Make it easy with a direct link, QR code or WhatsApp message.',
        'Ask everyone, not only customers you expect to be positive.',
        'Never buy reviews or write fake ones; platforms remove them and penalise businesses.',
      ] },

      { type: 'h2', text: '2. Respond to every review' },
      { type: 'p', text: "Thank positive reviewers specifically. For negative reviews, respond calmly and quickly: acknowledge the experience, apologise where appropriate, avoid arguing in public and offer to resolve the issue privately. Future customers judge you as much by your response as by the complaint." },

      { type: 'h2', text: '3. Monitor mentions' },
      { type: 'p', text: "Set up alerts for your business name, check Google, social media and industry platforms regularly, and keep an eye on comments and messages. Early responses can stop small issues from growing." },

      { type: 'h2', text: '4. Fix the root causes' },
      { type: 'p', text: "Recurring complaints, such as slow delivery or rude service, are business problems, not marketing problems. Share feedback with your team and fix them. Then mention improvements when you respond." },

      { type: 'h2', text: '5. Build positive visibility' },
      { type: 'p', text: "Publish helpful content, keep social profiles active, share customer stories with permission and earn coverage in local or industry media. Positive, accurate content helps people see the full picture." },

      { type: 'h2', text: '6. Prepare for a crisis' },
      { type: 'ul', items: [
        'Decide who responds and how approvals work.',
        'Respond quickly with facts; avoid speculation.',
        'Take responsibility where you are at fault.',
        'Update people as the situation develops.',
      ] },

      { type: 'h2', text: 'Removing false or abusive reviews' },
      { type: 'p', text: "Platforms like Google allow you to report reviews that violate their policies, such as spam, conflicts of interest or offensive content. Google explains the process in its [review policy guide](https://support.google.com/business/answer/4596773). Genuine negative reviews generally cannot be removed, so respond constructively instead." },

      { type: 'h2', text: 'The bottom line' },
      { type: 'p', text: "Reputation is built through consistent good experiences, honest communication and visible responsiveness. Treat every review as a chance to show future customers how you work." },
      { type: 'p', text: "Want help managing your online reputation? See our [branding service](/services/branding) or [contact us](/#contact). Also see our [local SEO guide](/blog/local-seo-google-business-profile)." },
    ],
    faqs: [
      { q: 'Can I delete negative Google reviews?', a: 'You cannot delete genuine reviews yourself. You can report reviews that violate Google’s policies, such as spam or offensive content, and respond professionally to others.' },
      { q: 'How should I reply to a negative review?', a: 'Respond quickly and calmly, acknowledge the experience, apologise where appropriate, avoid sharing private details and offer to resolve the issue offline.' },
      { q: 'How do I get more positive reviews?', a: 'Deliver good experiences, then ask customers at the right moment with an easy link or QR code. Consistent asking matters more than one-off pushes.' },
      { q: 'What is online reputation management?', a: 'It is the ongoing process of earning, monitoring and responding to what people say about your business online, and improving the experiences behind that feedback.' },
    ],
  },

  {
    slug: 'measure-marketing-roi',
    title: 'How to Measure Digital Marketing ROI: Metrics Every Business Owner Should Track',
    seoTitle: 'How to Measure Digital Marketing ROI: Key Metrics Explained',
    description:
      'Learn how to measure digital marketing ROI: setting goals, tracking conversions, attribution, CAC, ROAS, LTV, dashboards and the vanity metrics to stop obsessing over.',
    excerpt:
      'Are your marketing rupees actually working? Here is how to set up tracking, which metrics matter and how to calculate real return on investment.',
    category: 'Analytics',
    author: 'Click Mine Media',
    published: '2026-11-26',
    image: '/services/strategy.jpg',
    imageAlt: 'Business dashboard with charts tracking marketing ROI',
    readMinutes: 8,
    relatedService: 'strategy',
    body: [
      { type: 'callout', text: "**In short:** to measure marketing ROI, define what a conversion is worth, track every important action (forms, calls, WhatsApp chats, purchases), connect marketing data to sales outcomes, and focus on business metrics such as customer acquisition cost, return on ad spend and lifetime value rather than likes and impressions." },
      { type: 'p', text: "Every business owner wants to know the same thing: is my marketing working? Without proper measurement, decisions are based on gut feeling or vanity metrics. With it, you can confidently invest more in what works and stop what does not." },

      { type: 'h2', text: '1. Start with business goals' },
      { type: 'p', text: "Define what success means: qualified leads, online sales, store visits, app installs or bookings. Then estimate what each is worth. If you know your average order value or the value of a new client, you can judge what you can afford to spend to win one." },

      { type: 'h2', text: '2. Track every important action' },
      { type: 'ul', items: [
        'Form submissions and quote requests.',
        'Phone calls and WhatsApp clicks or chats.',
        'Purchases and revenue.',
        'Bookings and appointments.',
      ] },
      { type: 'p', text: "Use Google Analytics, the Google tag, the Meta Pixel and Conversions API, and UTM parameters on links so you can see which source drove each action." },

      { type: 'h2', text: '3. Connect marketing to sales outcomes' },
      { type: 'p', text: "Leads are not revenue. Use a CRM or even a well-maintained spreadsheet to record which leads became customers and how much they spent. Feeding this back to ad platforms helps them optimise for quality." },

      { type: 'h2', text: 'Key metrics to track' },
      { type: 'ul', items: [
        '**ROI:** (revenue from marketing minus marketing cost) divided by marketing cost.',
        '**ROAS:** revenue from ads divided by ad spend.',
        '**CAC:** total marketing and sales cost divided by new customers.',
        '**CPL:** cost per lead, alongside lead-to-customer conversion rate.',
        '**LTV:** average revenue a customer brings over time.',
        '**Conversion rate:** visitors who take the desired action.',
      ] },

      { type: 'h2', text: 'Understand attribution' },
      { type: 'p', text: "Customers often interact with several channels before buying: they see an Instagram ad, search on Google later and finally click an email. Attribution models assign credit differently. No model is perfect; look at trends across channels rather than relying on a single number, and compare platform data with your actual sales." },

      { type: 'h2', text: 'Stop obsessing over vanity metrics' },
      { type: 'p', text: "Followers, likes, impressions and even clicks are useful signals, but they are not results. A campaign with fewer clicks and more qualified enquiries is usually the better campaign." },

      { type: 'h2', text: 'Build a simple monthly dashboard' },
      { type: 'ul', items: [
        'Spend by channel.',
        'Leads or sales by channel.',
        'Cost per lead or acquisition by channel.',
        'Revenue and ROAS where trackable.',
        'Key actions planned for next month.',
      ] },

      { type: 'h2', text: 'The bottom line' },
      { type: 'p', text: "Measuring marketing ROI is not about perfect data; it is about consistent, honest tracking that connects spending to business outcomes. Once you can see what works, growing becomes a series of informed decisions." },
      { type: 'p', text: "Want clear reporting on your marketing? See our [growth strategy service](/services/growth-strategy) or [talk to us](/#contact). Related: [what is performance marketing](/blog/performance-marketing-guide)." },
    ],
    faqs: [
      { q: 'How do you calculate marketing ROI?', a: 'A simple formula is (revenue attributed to marketing minus marketing cost) divided by marketing cost. For example, if you spend one unit and earn three units of revenue attributable to it, the ROI is two times the cost.' },
      { q: 'What is the difference between ROI and ROAS?', a: 'ROAS compares revenue to ad spend only. ROI considers all marketing costs, such as agency fees, tools and production, and often profit rather than revenue.' },
      { q: 'How can I track phone call leads?', a: 'Use call tracking numbers, click-to-call conversion tracking on your website and ads, and ask new customers how they found you.' },
      { q: 'Which metrics should small businesses focus on?', a: 'Focus on leads or sales, cost per lead or acquisition and conversion to paying customers. These connect marketing directly to business results.' },
    ],
  },
];
