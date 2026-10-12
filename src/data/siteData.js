const IMG = 'https://aquasevaservice.com/wp-content/uploads';

export const site = {
  url: 'https://aquasevasaleandservice.com', // final website address (no trailing slash)
  name: 'Aqua Seva Service',
  tagline: 'Pure Water, Pure Life',
  phone: '+91-8698565561',
  phoneRaw: '918698565561',
  email: 'aquasevaservicecontact@gmail.com',
  address: ['Shop No. 4 Chitamani Chowk Spine Road', 'Chinchwad – Pune : 411033', 'Maharashtra'],
  marquee:
    'Aqua Seva Service is RO Water Purifier Sell, Repair, AMC, Installation & Service Provider in all cities of all states of India, e.g. Pune, Chinchwad, Dhule and more. Certified Company.',
  social: { facebook: '#', x: '#', instagram: '#' },
  // Paste your Google Business review link here (https://g.page/r/.../review) to show a "Review us on Google" button.
  googleReviewUrl: '',
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=Chitamani+Chowk+Spine+Road+Chinchwad+Pune+411033',
};

export const images = {
  logo: `${IMG}/2026/06/Aqua-Seva.jpeg`,
  favicon: `${IMG}/2026/06/Aqua_Seva_Service_logo-300x300.png`,
  homeHero: `${IMG}/2026/06/Aqua-Seva-Service-Home-1024x493.jpg`,
  install: `${IMG}/2026/06/Aqua-Seva-RO-Installation.png`,
  install1: `${IMG}/2026/06/Aqua-Seva-RO-Installation-1.png`,
  service1: `${IMG}/2026/06/Service-1.png`,
  repair: `${IMG}/2026/06/Aqua-Seva-RO-Repair.png`,
  homeService: `${IMG}/2026/06/Aqua-Seva-Water-Purifier-Service-1024x576.jpg`,
  aboutHero: `${IMG}/2026/06/Aqua-Seva-Service-About.png`,
  milestones: `${IMG}/2026/06/Aqua-Seva-Mile-Stones.jpg`,
  amc: `${IMG}/2026/06/Aqua-RO-AMC.png`,
  serviceHero: `${IMG}/2026/06/Aqua-Seva.jpg`,
  whyChoose: `${IMG}/2026/06/aqua-seva-service-1.jpg`,
  serviceMain: `${IMG}/2026/06/Aqua-Seva-Water-Purifier-Service.png`,
  office: `${IMG}/2026/06/Aqua-Seva-Office-1024x484.jpg`,
  callUs: `${IMG}/2026/07/RO-Service-Call-Us.jpg`,
};

export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/service', label: 'Service' },
  { to: '/tools', label: 'RO Tools' },
  { to: '/blog', label: 'Blog' },
  { to: '/enquiry', label: 'Enquiry' },
  { to: '/contact', label: 'Contact' },
];

export const footerLinks = [...navLinks, { to: '/privacy-policy', label: 'Privacy Policy' }];

// Milestones (from the About page of the live site – please confirm the labels)
export const stats = [
  { value: 9000, suffix: '+', label: 'RO Service & Repair' },
  { value: 8800, suffix: '+', label: 'Happy Customers' },
  { value: 10, suffix: '+', label: 'Years of Experience' },
  { value: 8, suffix: '', label: 'Expert Technicians' },
];

export const homeServices = [
  {
    icon: 'bi-wrench-adjustable',
    title: 'Water Purifier Service',
    enq: 'service',
    img: images.service1,
    price: '₹299',
    priceNote: 'Service charge',
    points: ['Cleaning of machine & filters', 'Complete water purifier checkup', 'Water quality test (TDS)', 'Filter / spare parts as per rate card'],
  },
  {
    icon: 'bi-tools',
    title: 'Water Purifier Repair',
    enq: 'repair',
    img: images.repair,
    price: '₹299',
    priceNote: 'Visit & diagnosis included',
    points: ['Visit & diagnosis charges included', 'Spare part rate as per rate card', 'Chip / control box repair charged extra', 'Doorstep repair, all brands'],
  },
  {
    icon: 'bi-droplet-half',
    title: 'Water Purifier Installation',
    enq: 'install',
    img: images.install1,
    price: '₹499',
    priceNote: 'Starting from',
    points: ['Fixing of purifier stand on wall', 'Inlet water assembly connection', 'Electricity supply connection', 'Free TDS test every time'],
  },
];

export const features = [
  { icon: 'bi-award', title: 'Best Service', text: 'Expert RO water purifier service in Chinchwad – Pune.' },
  { icon: 'bi-headset', title: 'Support 24/7', text: 'A dedicated team to solve all your water purifier issues, any hour of the day.' },
  { icon: 'bi-lightning-charge', title: 'Same Day Service', text: 'Same day AMC, repair and maintenance of RO systems in Chinchwad – Pune.' },
  { icon: 'bi-chat-dots', title: 'Honest Consulting', text: 'We tell you what actually needs changing, and what does not.' },
  { icon: 'bi-kanban', title: 'Every Job Matters', text: 'Our technicians treat each job as a major project, because your drinking water is.' },
  { icon: 'bi-patch-check', title: 'Genuine Spare Parts', text: 'We prefer genuine branded spare parts only, for lasting performance.' },
  { icon: 'bi-currency-rupee', title: 'Low Cost RO Service', text: 'Services at about 20% lower price than the market, with transparent pricing.' },
  { icon: 'bi-shield-check', title: 'After-Service Warranty', text: 'Get 100% after-service warranty on our work.' },
];

export const steps = [
  { icon: 'bi-telephone-inbound', title: 'Book a Call', text: 'Call or WhatsApp us on +91-8698565561. We note your issue and fix a convenient time.' },
  { icon: 'bi-truck', title: 'Technician Visits', text: 'A trained technician reaches your doorstep, usually the same day.' },
  { icon: 'bi-clipboard2-pulse', title: 'Diagnosis & Estimate', text: 'We check the machine, test your water (TDS) and give a clear estimate before any work.' },
  { icon: 'bi-check2-circle', title: 'Repair with Warranty', text: 'Once approved, we repair or service with professional tools and genuine parts.' },
];

export const stages = [
  { icon: 'bi-layers', title: 'Sediment Filter', text: 'Traps sand, dust and rust particles before they reach the membrane.' },
  { icon: 'bi-cloud-haze2', title: 'Pre-Carbon Filter', text: 'Removes chlorine, odour and organic matter from raw water.' },
  { icon: 'bi-funnel', title: 'RO Membrane', text: 'The heart of the system. Reduces dissolved salts, heavy metals and TDS.' },
  { icon: 'bi-brightness-high', title: 'UV / UF Stage', text: 'Neutralises bacteria and viruses that may remain after filtration.' },
  { icon: 'bi-droplet', title: 'Post-Carbon & Mineral', text: 'Polishes taste and restores essential minerals for better flavour.' },
];

export const brands = [
  'Kent', 'Aquaguard', 'Pureit', 'Livpure', 'Blue Star', 'Havells', 'AO Smith',
  'Tata Swach', 'Whirlpool', 'Zero B', 'Faber', 'Eureka Forbes', 'Local & Commercial RO',
];

export const areas = ['Chinchwad', 'Pimpri', 'Akurdi', 'Nigdi', 'Wakad', 'Thergaon', 'Kalewadi', 'Pune', 'Jalgaon', 'Dhule'];

export const faqs = [
  { q: 'How much does RO water purifier service cost?', a: 'Our RO service starts at ₹299. Spare parts and filters, if needed, are charged separately as per our rate card, and we confirm the estimate before starting work.' },
  { q: 'Do you provide same-day service?', a: 'Yes. We offer same-day service in Chinchwad, Pimpri Chinchwad and nearby areas of Pune. Call +91-8698565561 and our technician will be at your doorstep.' },
  { q: 'Which brands do you service?', a: 'We service all brands and models of RO and UV water purifiers. We are an independent service provider and are not affiliated with any brand.' },
  { q: 'Do you give a warranty on the service?', a: 'Yes. We provide after-service warranty on our work and use genuine branded spare parts wherever parts are replaced.' },
  { q: 'What is an AMC and do you offer it?', a: 'An Annual Maintenance Contract (AMC) covers regular scheduled checkups of your RO throughout the year, with a free TDS test every visit. Call us to book an AMC plan.' },
  { q: 'Is the water quality (TDS) test free?', a: 'Yes. We do a free water quality (TDS) test every time we install or service your purifier.' },
];

export const posts = [
  {
    slug: 'how-often-should-you-service-ro-water-purifier',
    title: 'How Often Should You Service Your RO Water Purifier?',
    date: 'June 12, 2026',
    readTime: '4 min read',
    img: images.homeService,
    excerpt: 'Regular servicing keeps your drinking water safe. Learn the schedule and the signs that your RO needs attention.',
    sections: [
      { p: ['An RO purifier works quietly in the background, so it is easy to forget about it until the water tastes odd or the flow drops. By then the filters are usually long overdue. A simple servicing routine protects your family and your machine.'] },
      { h: 'A practical service schedule', p: ['Most households should get the purifier serviced every 3 to 4 months. Hard water or high-TDS borewell water means filters clog sooner, so service may be needed more often. As a general guide: the sediment filter lasts about 3 to 6 months, the pre-carbon filter around 6 months, the post-carbon filter about 12 months, the UV lamp about a year, and the RO membrane roughly 2 to 3 years depending on your water.'] },
      { h: 'Signs your RO needs service now', p: ['Do not wait for the schedule if you notice any of these: slow water flow, a bad taste or smell, the storage tank taking much longer to fill, a noisy pump, water leaking near the fittings, a warning light blinking, or a TDS reading that keeps climbing.'] },
      { h: 'Why delaying costs more', p: ['A choked sediment filter puts load on the membrane and pump. Replacing a cheap filter on time is far less expensive than replacing a membrane or pump later. Old filters can also stop protecting you from contaminants.'] },
      { h: 'What happens in an Aqua Seva service visit', p: ['Our technician cleans the machine and filters, completes a full checkup, and runs a water quality (TDS) test. If a filter or spare part needs replacing, we explain why and quote it as per the rate card before any work begins.'] },
    ],
  },
  {
    slug: 'benefits-of-ro-water-purifier-amc',
    title: 'Benefits of an Annual Maintenance Contract (AMC) for Your RO',
    date: 'June 24, 2026',
    readTime: '3 min read',
    img: images.amc,
    excerpt: 'An AMC gives you scheduled visits, free TDS tests and priority support, so you never have to worry about water quality.',
    sections: [
      { p: ['An Annual Maintenance Contract is a simple promise: instead of calling a technician only when something breaks, your purifier is looked after on a regular schedule through the year.'] },
      { h: 'What an AMC gives you', p: ['Scheduled checkups at fixed intervals, cleaning of the machine and filters, a free water quality (TDS) test on every visit, and priority response when you call us. You also avoid the stress of searching for a technician at the last minute.'] },
      { h: 'Why it saves money', p: ['Small problems such as a loose fitting, a weak pump or a clogged filter are caught early, before they damage costly parts like the membrane. Planned servicing is almost always cheaper than emergency repairs.'] },
      { h: 'Who should take an AMC', p: ['AMC is a good fit for busy families, offices, clinics, shops and hostels, anywhere the purifier runs daily and clean water matters. It also makes sense if you have hard or high-TDS water.'] },
      { h: 'How to book', p: ['Call or WhatsApp Aqua Seva Service on +91-8698565561 and tell us your purifier brand and location. We will explain the plan and set up your first visit.'] },
    ],
  },
  {
    slug: 'common-ro-water-purifier-problems-and-fixes',
    title: 'Common RO Water Purifier Problems and Quick Fixes',
    date: 'July 3, 2026',
    readTime: '5 min read',
    img: images.repair,
    excerpt: 'Low flow, bad taste, leakage or a noisy pump? Here are the usual causes and when to call a technician.',
    sections: [
      { p: ['Most RO problems have a simple cause. Knowing what to look for helps you fix small issues quickly and call a professional for the rest.'] },
      { h: 'Low water flow', p: ['Usually a choked sediment or carbon filter, or low inlet water pressure. Check that the inlet tap is fully open. If flow stays weak, the filters probably need replacing.'] },
      { h: 'Bad taste or smell', p: ['Exhausted carbon filters or a long-unused tank are common causes. Servicing and sanitising the tank normally solves it.'] },
      { h: 'Purifier running but tank not filling', p: ['This can point to a weak pump, a faulty solenoid valve, a blocked membrane or an incorrect tank pressure. It needs a technician to diagnose.'] },
      { h: 'Water leakage', p: ['Often a loose connector, a worn O-ring or a cracked fitting. Switch off the water supply and power, and call us so the leak does not damage your wall or floor.'] },
      { h: 'Noisy pump or blinking light', p: ['Noise is often a sign of a pump under strain from clogged filters. A blinking light can mean a filter life alert, a tank-full signal or a fault. Check your model manual or call us.'] },
      { h: 'When to call a professional', p: ['If simple checks do not help, or if there is leakage, an electrical issue or a control-board fault, book a visit. Our repair price includes visit and diagnosis; spare parts are charged as per the rate card.'] },
    ],
  },
  {
    slug: 'what-is-tds-and-what-is-a-good-level',
    title: 'What Is TDS in Drinking Water and What Level Is Good?',
    date: 'July 15, 2026',
    readTime: '4 min read',
    img: images.install,
    excerpt: 'TDS is the first number we check on every visit. Here is what it means and how to read it.',
    sections: [
      { p: ['TDS stands for Total Dissolved Solids. It measures the minerals, salts and other substances dissolved in water, shown in mg/L or ppm. We test it for free every time we install or service your purifier.'] },
      { h: 'Reading the number', p: ['Very low TDS water can taste flat, while very high TDS water tastes salty or bitter. The Bureau of Indian Standards drinking water standard (IS 10500) sets 500 mg/L as the acceptable limit. Many households prefer drinking water in a lower, balanced range for taste.'] },
      { h: 'Does low TDS always mean safe?', p: ['No. TDS only measures dissolved solids. It does not tell you about bacteria, viruses or specific chemicals. That is why a purifier combines RO with UV or UF and carbon stages.'] },
      { h: 'When your TDS is high', p: ['Borewell and tanker water in many areas has high TDS. An RO purifier is the right choice for such water, and the membrane should be checked regularly because it works harder.'] },
      { h: 'Check your purifier with us', p: ['If your output TDS is rising over time, it is a sign the membrane or filters need attention. Call +91-8698565561 and our technician will test and advise.'] },
    ],
  },
];

export const privacy = [
  { p: ['At Aqua Seva Service, we take your privacy seriously. This Privacy Policy outlines the types of personal information we collect, how we use it, and how we protect it.'] },
  { h: 'Information We Collect', p: ['We collect personal information when you contact us by call or email to schedule a water purifier service, or when you request more information through our website contact. The personal information we collect may include your name, phone number, email address, and address.'] },
  { h: 'How We Use Your Information', p: ['We use your personal information to provide water purifier service, respond to your inquiries, and communicate with you about our services. We may also use your information for marketing purposes, such as sending you promotional emails and SMS about our services. You can opt out of these emails at any time.'] },
  { h: 'How We Protect Your Information', p: ['We take the security of your personal information seriously and have implemented industry-standard security measures to protect it. We use SSL encryption to secure data transmissions, and we regularly update our security systems to ensure they are up to date and effective.', 'We will never sell or share your personal information with third parties without your consent, except as required by law or as necessary to provide our services.'] },
  { h: 'Cookies', p: ['We use cookies on our website to enhance your browsing experience and to track website usage. Cookies are small text files that are stored on your device when you visit a website. You can disable cookies in your browser settings if you prefer.'] },
  { h: 'Changes to Privacy Policy', p: ['We reserve the right to update this Privacy Policy at any time. Any changes will be posted on this page, and your continued use of our services following the posting of changes constitutes your acceptance of those changes.'] },
  { h: 'Disclaimer', p: ['We are a third-party service provider and independent customer service provider, and we have no association or affiliation with third-party brands. We are not using any brand names; we are only a service provider. Third-party trademarks, logos, brand names, products and services are used only for reference and informational purposes.'] },
  { h: 'Contact Us', p: ['If you have any questions about our Privacy Policy or the use of your personal information, please contact us by mobile no. +91-8698565561, email, or through our website contact page.'] },
];

// Add REAL customer reviews here, e.g. { name: 'Customer Name', area: 'Chinchwad', rating: 5, text: '...' }
// While this list is empty the site shows a "share your feedback" invitation instead of invented reviews.
export const reviews = [];

export const filterGuide = [
  { part: 'Sediment filter', role: 'Traps sand, dust and rust particles', life: '3 – 6 months' },
  { part: 'Pre-carbon filter', role: 'Removes chlorine, odour and organics', life: '≈ 6 months' },
  { part: 'RO membrane', role: 'Reduces dissolved salts and TDS', life: '2 – 3 years' },
  { part: 'UV lamp / UF membrane', role: 'Neutralises bacteria and viruses', life: '≈ 12 months' },
  { part: 'Post-carbon filter', role: 'Polishes taste of purified water', life: '≈ 12 months' },
  { part: 'Storage tank', role: 'Holds purified water – needs sanitising', life: 'Clean every 6 months' },
];

// ---- Enquiry form options (all enquiries are sent to site.phoneRaw on WhatsApp) ----
export const enquiryTypes = [
  { key: 'service', label: 'Water Purifier Service' },
  { key: 'repair', label: 'Water Purifier Repair' },
  { key: 'install', label: 'Installation / Uninstallation' },
  { key: 'amc', label: 'AMC Plan (Annual Maintenance)' },
  { key: 'new', label: 'New Water Purifier Purchase' },
  { key: 'parts', label: 'Spare Parts / Filters' },
  { key: 'other', label: 'Other Enquiry' },
];

export const timeSlots = [
  { key: 'any', label: 'Anytime / As soon as possible' },
  { key: 'morning', label: 'Morning (9 AM – 12 PM)' },
  { key: 'afternoon', label: 'Afternoon (12 PM – 4 PM)' },
  { key: 'evening', label: 'Evening (4 PM – 8 PM)' },
];

export const brandOptions = [
  'Kent', 'Aquaguard', 'Pureit', 'Livpure', 'Blue Star', 'Havells', 'AO Smith',
  'Tata Swach', 'Whirlpool', 'Zero B', 'Faber', 'Eureka Forbes', 'Other / Not sure',
];
