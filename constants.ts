import { NavItem, PricingPlan, Program, Trainer } from './types';

export const COMPANY_NAME = "Forge Fitness";
export const PHONE_NUMBER = "+91 9638808069";
export const PHONE_NUMBER_CLEAN = "919638808069"; // For WhatsApp API
export const ADDRESS = "Sarkhej - Gandhinagar Hwy, Bodakdev, Ahmedabad, Gujarat 380054, India";
export const MAP_EMBED_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.5819385507425!2d72.50854207593635!3d23.03913051571168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b4922484c6f%3A0x9362e3181829e3a3!2sBodakdev%2C%20Ahmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1709999999999!5m2!1sen!2sin";

// Exact logo filename as requested
export const LOGO_PATH = "./ChatGPT_Image_Feb_8__2026__07_49_13_PM-removebg-preview.png";

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', path: '/' },
  { label: 'Programs', path: '/programs' },
  { label: 'Membership', path: '/membership' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export const PROGRAMS: Program[] = [
  {
    id: '1',
    title: 'Strength & Conditioning',
    description: 'Build raw power and endurance through compound movements and structured progressive overload.',
    category: 'Group',
    image: 'https://picsum.photos/600/400?random=1'
  },
  {
    id: '2',
    title: 'HIIT / Metabolic',
    description: 'High-intensity interval training designed to torch calories and boost cardiovascular health.',
    category: 'Group',
    image: 'https://picsum.photos/600/400?random=2'
  },
  {
    id: '3',
    title: 'Personal Training',
    description: '1-on-1 coaching tailored specifically to your body type, goals, and schedule.',
    category: 'Personal',
    image: 'https://picsum.photos/600/400?random=3'
  },
  {
    id: '4',
    title: 'Mobility & Flow',
    description: 'Essential recovery and movement sessions to prevent injury and improve range of motion.',
    category: 'Group',
    image: 'https://picsum.photos/600/400?random=4'
  }
];

export const PRICING: PricingPlan[] = [
  {
    id: 'basic',
    name: 'The Starter',
    price: '₹2,500',
    period: '/ month',
    features: [
      'Access to Gym Floor',
      'Locker Access',
      'General Orientation',
      'Water Station'
    ]
  },
  {
    id: 'standard',
    name: 'Forged Elite',
    price: '₹5,000',
    period: '/ month',
    recommended: true,
    features: [
      'Unlimited Group Classes',
      'Full Gym Access',
      'Introductory PT Session',
      'Nutrition Guidance',
      'Community Events'
    ]
  },
  {
    id: 'quarterly',
    name: 'Quarterly Power',
    price: '₹12,000',
    period: '/ 3 months',
    features: [
      'All Elite Features',
      'Priority Booking',
      '2 Free Guest Passes',
      'Body Composition Analysis',
      'Save ₹3,000'
    ]
  }
];

export const TRAINERS: Trainer[] = [
  {
    id: 't1',
    name: 'Arjun Mehta',
    role: 'Head Coach',
    bio: 'Former national level weightlifter with 10 years of coaching experience focused on biomechanics.',
    image: 'https://picsum.photos/400/400?random=10'
  },
  {
    id: 't2',
    name: 'Priya Sharma',
    role: 'Conditioning Specialist',
    bio: 'Certified HIIT instructor and nutritionist helping members fuel their performance correctly.',
    image: 'https://picsum.photos/400/400?random=11'
  },
  {
    id: 't3',
    name: 'Vikram Singh',
    role: 'Mobility Expert',
    bio: 'Yoga alliance certified trainer bringing balance and flexibility to strength athletes.',
    image: 'https://picsum.photos/400/400?random=12'
  }
];