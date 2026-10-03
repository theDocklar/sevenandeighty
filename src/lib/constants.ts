import { NavItem, Partner, ServiceItem, ProcessStep, KitItem, ReelItem } from "@/types";

export const AGENCY_INFO = {
  name: "Seven and Eighty",
  tagline: "7°N 80°E",
  coordinates: "7.21°N 79.84°E",
  location: "Negombo, Sri Lanka",
  operatingAreas: "Colombo · Negombo · Galle",
  instagram: "@7n80e",
  instagramUrl: "https://instagram.com/7n80e",
  website: "sevenandeighty.com",
  contacts: {
    whatsapp: {
      name: "Lashitha",
      number: "+94 77 514 6688",
      url: "https://wa.me/94775146688?text=Hi%2C%20I%20am%20interested%20in%20working%20with%20Seven%20%26%20Eighty",
    },
    phone: {
      name: "Sandanu",
      number: "+94 76 690 1333",
      url: "tel:+94766901333",
    },
  },
};

export const NAV_ITEMS: NavItem[] = [
  { label: "Work", href: "#work" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Kit", href: "#kit" },
  { label: "Contact", href: "#contact" },
];

export const PARTNERS: Partner[] = [
  { name: "theBOAT", src: "/partners/theboat.png", height: 32 },
  { name: "Sound House", src: "/partners/sound-house.png", height: 42 },
  { name: "Modern Space", src: "/partners/modern-space.png", height: 50 },
  { name: "Ayuda Boutique Hotels", src: "/partners/ayuda.png", height: 56 },
  { name: "Amazing Green", src: "/partners/amazing-green.png", height: 42 },
  { name: "Aztec by Ivy & Leo", src: "/partners/aztec.png", height: 28 },
];

export const SERVICES: ServiceItem[] = [
  {
    id: "smm",
    number: "01",
    title: "Social media management",
    description: "Your page run like a storefront: posted, replied to and watched every day.",
  },
  {
    id: "content",
    number: "02",
    title: "Content creation",
    description: "Reels, graphics and TikToks built to be finished, not scrolled past.",
  },
  {
    id: "ads",
    number: "03",
    title: "Paid advertising",
    description: "Meta, TikTok and Google. We chase cost per result, not vanity likes.",
  },
  {
    id: "influencer",
    number: "04",
    title: "Influencer marketing",
    description: "We borrow the trust you haven't had time to build yet.",
  },
  {
    id: "web",
    number: "05",
    title: "Web design and development",
    description: "A site that closes the sale your content opened.",
  },
  {
    id: "photo-video",
    number: "06",
    title: "Photo and video",
    description: "Cameras, gimbals and drones. Owned by us, not rented by the hour.",
  },
  {
    id: "branding",
    number: "07",
    title: "Branding and identity",
    description: "Look like the most expensive option in your category.",
  },
  {
    id: "strategy",
    number: "08",
    title: "Copywriting and strategy",
    description: "Words that keep selling when nobody's in the room.",
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Message us and tell us what you sell.",
  },
  {
    number: "02",
    title: "We meet in person and agree what success looks like.",
  },
  {
    number: "03",
    title: "An NDA reaches you within 48 hours.",
  },
  {
    number: "04",
    title: "We build the content calendar and the plan behind it.",
  },
  {
    number: "05",
    title: "We start posting and run every platform for you.",
  },
];

export const KIT_ITEMS: KitItem[] = [
  { number: "01", category: "Camera", name: "Sony A7 III" },
  { number: "02", category: "Drone", name: "DJI Avata 2" },
  { number: "03", category: "Drone", name: "DJI Neo 2" },
  { number: "04", category: "Phone", name: "iPhone 17 Pro Max" },
  { number: "05", category: "Gimbal", name: "Zhiyun Smooth Q3" },
];

export const REELS: ReelItem[] = [
  { number: "01", category: "Hotel" },
  { number: "02", category: "Retail" },
  { number: "03", category: "Brand" },
  { number: "04", category: "Hotel" },
  { number: "05", category: "Food" },
  { number: "06", category: "Brand" },
  { number: "07", category: "Drone" },
  { number: "08", category: "Retail" },
];
