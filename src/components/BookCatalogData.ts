export interface BookPage {
  pageNumber: number;
  chapterTag: string;
  title: string;
  subtitle?: string;
  lead: string;
  bullets?: { title: string; desc: string; price?: string }[];
  highlightBox?: { title: string; content: string; badge?: string };
  metrics?: { label: string; value: string }[];
  footerNote?: string;
}

export interface BookCatalog {
  id: 'pest' | 'fragrance';
  themeColor: string;
  categoryTitle: string;
  cardTitle: string;
  cardSubtitle: string;
  cardImage: string;
  tagline: string;
  badge: string;
  features: string[];
  pages: BookPage[];
}

export const PEST_CONTROL_BOOK: BookCatalog = {
  id: 'pest',
  themeColor: '#ED1C24',
  categoryTitle: 'Defense-Grade Pest Control',
  cardTitle: 'Pest Control Services',
  cardSubtitle: 'Modern defense-certified elimination across Karimnagar with Government-approved chemistry.',
  cardImage: '/pest_control_hd.jpg',
  tagline: 'Modern Pest Management · Fast, Safe & Certified',
  badge: 'Govt. Approved & Certified',
  features: ['Termite 10-Yr Warranty', 'Safe Gel Baiting', '24/7 Rapid Response', 'Audit-Ready Docs'],
  pages: [
    {
      pageNumber: 1,
      chapterTag: '01 / OVERVIEW & STANDARDS',
      title: 'Next-Gen Pest Management',
      subtitle: 'Karimnagar Certified Protocols',
      lead: 'A modern, agile service protecting homes, commercial complexes, and institutions in Karimnagar with cutting-edge, defense-certified pest control protocols.',
      highlightBox: {
        badge: 'Govt-Approved',
        title: 'Rigorous Quality & Safety Standards',
        content: 'All treatments deploy 100% Government-approved active agents at strict safety standards. Odourless, pet-safe, and zero hazard to families.'
      },
      bullets: [
        {
          title: 'Karimnagar Climate & Soil Protocols',
          desc: 'Targeted defenses adapted for Karimnagar residential areas, commercial establishments, and seasonal monsoon pest spikes.'
        },
        {
          title: 'Audit-Grade Quality Documentation',
          desc: 'Photo evidence, chemical batch records, and compliance certificates accepted for FSSAI, NABH, and HACCP audits.'
        },
        {
          title: 'Free On-Site Inspection',
          desc: 'No-obligation property inspection with a transparent written quote and guaranteed zero hidden upsells.'
        }
      ],
      metrics: [
        { label: 'Safety Profile', value: '100% Eco-Safe' },
        { label: 'Response Time', value: 'Under 2 Hours' },
        { label: 'Coverage Area', value: 'All Karimnagar' }
      ],
      footerNote: 'SVS & IPCC Defense Protocols · Free Helpline: +91 93816 78805'
    },
    {
      pageNumber: 2,
      chapterTag: '02 / TARGETED TREATMENTS',
      title: 'Core Elimination Services',
      subtitle: 'Residential & Commercial Treatment Portfolio',
      lead: 'Specialized elimination plans targeting severe infestations with guaranteed post-treatment warranties.',
      bullets: [
        {
          title: 'Termite Control (Pre & Post Construction)',
          desc: 'Subterranean termite chemical barrier with drilling & pressure injection technology.',
          price: 'Free Inspection & Up to 10-Year Warranty'
        },
        {
          title: 'Cockroach Elimination & IGR Gel Baiting',
          desc: 'Targeted German and American cockroach eradication using dot-gel baiting & Insect Growth Regulators.',
          price: 'Custom Property Quote'
        },
        {
          title: 'Bedbug Eradication Thermal & Chemical',
          desc: 'High-penetration crack treatment ensuring complete egg and adult nymph neutralization.',
          price: 'Guaranteed Elimination Quote'
        },
        {
          title: 'Scientific Rodent Control & Proofing',
          desc: 'Tamper-resistant bait stations, runway trapping, and physical building exclusion points.',
          price: 'Site Assessment Quote'
        }
      ],
      highlightBox: {
        badge: '100% Safe',
        title: 'Disinfection & Sanitization Included',
        content: 'Hospital-grade broad-spectrum antimicrobial misting for kitchens, cabins, and clinics with written certification.'
      },
      footerNote: 'Includes follow-up booster inspections and emergency callback support.'
    },
    {
      pageNumber: 3,
      chapterTag: '03 / SPECIALIZED SERVICES',
      title: 'Advanced Pest & Vector Defense',
      subtitle: 'Environmental & Structural Protection',
      lead: 'Comprehensive vector control and wildlife management executed by certified technicians.',
      bullets: [
        {
          title: 'Mosquito Vector Management',
          desc: 'Integrated management combining thermal fogging, organic larviciding, and water breeding source reduction.',
          price: 'Area-Based Inspection'
        },
        {
          title: 'Wood Borer & Timber Treatment',
          desc: 'Deep chemical syringe injection for antique furniture, doors, powder-post beetles, and structural woodwork.',
          price: 'Custom Survey Quote'
        },
        {
          title: 'Fly Control & ILT Trapping Units',
          desc: 'Electronic insect light traps (ILT), pheromone boards, and perimeter breeding-site neutralizers.',
          price: 'Commercial Facility Quote'
        },
        {
          title: 'Humane Lizard & Snake Control',
          desc: 'Herbal/natural repelling barriers, entry exclusion, and 24/7 emergency reptile extraction.',
          price: 'Emergency Rapid Dispatch'
        }
      ],
      metrics: [
        { label: 'Safety Rating', value: '100% Safe' },
        { label: 'Warranty Available', value: 'Up to 10 Yrs' },
        { label: 'Turnaround', value: 'Within 2 Hours' }
      ],
      footerNote: 'All services carry written treatment completion certificates.'
    },
    {
      pageNumber: 4,
      chapterTag: '04 / KARIMNAGAR SERVICE HUBS',
      title: 'Local Karimnagar Coverage & Booking',
      subtitle: 'Rapid Dispatch Across Prime Zones',
      lead: 'Dedicated mobile response units stationed across key Karimnagar localities for prompt, same-day service.',
      bullets: [
        {
          title: 'Central & Commercial Hubs',
          desc: 'Collectorate Road, Mukarampura, Tower Circle, Kaman Road, and Mankammathota.'
        },
        {
          title: 'Prime Residential Zones',
          desc: 'Jyothinagar, Housing Board Colony, Vidyanagar, Bhagyanagar, and Vavilalapally.'
        },
        {
          title: 'Suburbs & Highway Corridors',
          desc: 'Alugunur, Thimmapur, Kothapalli, Padmanagar, and surrounding Karimnagar zones.'
        }
      ],
      highlightBox: {
        badge: 'Instant Booking',
        title: 'Schedule Your Free Inspection Today',
        content: 'Call +91 93816 78805 or click "Book Now" below to claim a zero-cost property assessment.'
      },
      footerNote: 'SVS & IPCC Pest Control · Karimnagar Operations Head Office'
    }
  ]
};

export const FRAGRANCE_BOOK: BookCatalog = {
  id: 'fragrance',
  themeColor: '#ED1C24',
  categoryTitle: 'Luxury Ambient Scenting',
  cardTitle: 'Fragrance Spray Services',
  cardSubtitle: 'ICPC certified 8-hour cold-air diffusion technology & 50+ imported European aroma essences.',
  cardImage: '/fragrance_hd.jpg',
  tagline: 'Smell · Experience · Memory | Premium Ambient Scenting',
  badge: 'IFRA & ISO 9001:2015 Certified',
  features: ['8-Hour Continuous Diffusion', 'Cold-Air Micro Mist', '50+ Luxury Scents', 'Zero Flame / Zero Heat'],
  pages: [
    {
      pageNumber: 1,
      chapterTag: '01 / SENSORY ARCHITECTURE',
      title: 'Experience The Ultimate Sense of Luxury',
      subtitle: 'Premium Ambient Scenting Specialists',
      lead: 'Transforming luxury spaces into unforgettable sensory memories. Smell is directly wired to the brain’s limbic system, steering 75% of daily human emotions.',
      highlightBox: {
        badge: 'ISO 9001:2015',
        title: 'Pure Swiss & French Essence',
        content: 'Formulated with 100% pure aroma essential oils free from alcohol dilution. Designed in top fragrance research centers of Switzerland and France adhering strictly to IFRA Geneva standards.'
      },
      bullets: [
        {
          title: 'Cold-Air Diffusion Technology',
          desc: 'Transforms liquid fragrance into ultra-fine dry micro-droplets without heat, keeping botanical molecules active up to 8 hours.'
        },
        {
          title: 'Calibrated Volumetric Coverage',
          desc: 'Micro-calibrated dispersion tailored for spaces from boutique suites up to 5,000 sq. ft. per unit (easily scalable).'
        },
        {
          title: '100% Safe For Guests & Children',
          desc: 'Zero flame, zero smoke, hypoallergenic, safe for sensitive luxury hospitality and healthcare environments.'
        }
      ],
      metrics: [
        { label: 'Scent Duration', value: '8 Continuous Hrs' },
        { label: 'Luxury Scents', value: '50+ Imported' },
        { label: 'Coverage / Unit', value: 'Up to 5,000 sq.ft' }
      ],
      footerNote: 'ICPC Scent Marketing · IFRA Geneva Standards Compliant'
    },
    {
      pageNumber: 2,
      chapterTag: '02 / AROMA COLLECTIONS',
      title: 'Luxury Fragrance Oil Names',
      subtitle: 'Exclusive Scent Palette & Packages',
      lead: 'Curated world-class olfactory profiles suited for upscale venues, luxury events, and discerning brands.',
      bullets: [
        {
          title: 'Oud / Arabian Luxury Tier',
          desc: 'Royal Oud, Amber Oud, Midnight Oud, Oud Sultan, Black Oud, Desert Oud, Oud Al Royal.',
          price: '5-Star VIP Tier Package'
        },
        {
          title: 'Woody & Rich Collection',
          desc: 'Sandalwood Gold, Cedar Wood Luxe, Smoky Vetiver, Stone Wood, Dark Timber.',
          price: 'Prestige Corporate Package'
        },
        {
          title: 'Sweet / Gourmand Scents',
          desc: 'Vanilla Musk, Honey Amber, Caramel Oud, Sweet Saffron, Chocolate Coffee.',
          price: 'Hospitality & Dining Package'
        },
        {
          title: 'Fresh / Citrus & Floral Luxury',
          desc: 'Citrus Royale, Bergamot Breeze, Aqua Marine, Royal Rose, Velvet Mogra, Jasmine Bloom.',
          price: 'Boutique & Spa Package'
        }
      ],
      highlightBox: {
        badge: 'Signature Lines',
        title: 'Ready-to-Sell Brand Signature Scents',
        content: 'Imperial Musk, Sapphire Night, Platinum Rose, Crown Oud, and Majestic Sandal tailored for brand identity.'
      },
      footerNote: 'Custom formulations created upon brand profile consultation.'
    },
    {
      pageNumber: 3,
      chapterTag: '03 / VENUE APPLICATIONS',
      title: 'Bespoke Ambient Applications',
      subtitle: 'Designed for Every Industry Vertical',
      lead: 'Elevating guest perceptions, dwell time, and emotional brand connection across premium environments.',
      bullets: [
        {
          title: '5-Star Hotels, VIP Lounges & Banquets',
          desc: 'Welcoming grand foyers and presidential suites with captivating Oud, Saffron, and White Lily signatures.'
        },
        {
          title: 'Luxury Weddings & Spa Boutiques',
          desc: 'Romantic floral notes of Velvet Mogra, Golden Tuberose, and Royal Rose creating serene euphoria.'
        },
        {
          title: 'Corporate HQs & Boardrooms',
          desc: 'Warm cedarwood, sandalwood, and crisp amber maintaining focus, prestige, and executive vitality.'
        },
        {
          title: 'Hospitals, Clinics & Reception Spaces',
          desc: 'Refreshing bergamot, orange blossom, and aqua marine calming patient stress and revitalizing air.'
        }
      ],
      metrics: [
        { label: 'Emotion Driven', value: '75% by Scent' },
        { label: 'Setup Time', value: '30-45 Mins' },
        { label: 'Advance Required', value: 'Confirmation Slot' }
      ],
      footerNote: 'All equipment engineered with silent acoustic damping.'
    },
    {
      pageNumber: 4,
      chapterTag: '04 / BOOKING & TERMS',
      title: 'Service Package & Protocol',
      subtitle: 'Seamless On-Site Execution',
      lead: 'Professional turn-key delivery backed by certified technicians arriving 45 minutes prior to your event opening.',
      bullets: [
        {
          title: 'Turnkey 8-Hour Session',
          desc: 'Continuous cold-air diffusion runs 8 uninterrupted hours without staff maintenance or interruption.'
        },
        {
          title: 'Booking & Confirmation Process',
          desc: 'Convenient slot reservation with a custom proposal delivered within 24 hours of venue survey.'
        },
        {
          title: 'Service Regions Covered',
          desc: 'Karimnagar district and surrounding event & hospitality venues.'
        }
      ],
      highlightBox: {
        badge: 'Service Guarantee',
        title: 'Zero Residue · Zero Stain Guarantee',
        content: 'Our microscopic dry vapour vaporizes completely into air currents without leaving moisture or stains on floors, glass, or delicate fabrics.'
      },
      footerNote: 'SVS & ICPC Fragrance Division · Emergency Scenting Line: +91 93816 78805'
    }
  ]
};
