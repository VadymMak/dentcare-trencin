import type {
  Service,
  TeamMember,
  PricingCategory,
  Review,
  ContactInfo,
  TrustItem,
  WhyUsItem,
} from './types';

export const TRUST_ITEMS: TrustItem[] = [
  { id: '1', icon: '🦷', value: '15+', label: 'rokov skúseností' },
  { id: '2', icon: '😊', value: '8 000+', label: 'spokojných pacientov' },
  { id: '3', icon: '🏆', value: '4', label: 'certifikovaní lekári' },
  { id: '4', icon: '⭐', value: '4.9', label: 'hodnotenie Google' },
];

export const SERVICES: Service[] = [
  {
    id: 'implants',
    icon: '🦷',
    title: 'Implantáty',
    description: 'Trvalé riešenie pre chýbajúce zuby s najmodernejšou technológiou Swiss Made.',
    price: 'od 890 €',
  },
  {
    id: 'whitening',
    icon: '✨',
    title: 'Bielenie zubov',
    description: 'Profesionálne bielenie Philips Zoom v ambulancii — výsledky viditeľné hneď.',
    price: 'od 290 €',
  },
  {
    id: 'orthodontics',
    icon: '😁',
    title: 'Ortodontia',
    description: 'Rovnátka a transparentné alignery Invisalign pre krásny úsmev bez kompromisov.',
    price: 'od 1 200 €',
  },
  {
    id: 'aesthetic',
    icon: '💎',
    title: 'Estetická stomatológia',
    description: 'Fasety, korunky a kompozitné renovácie pre dokonalý hollywoodsky úsmev.',
    price: 'od 350 €',
  },
  {
    id: 'prevention',
    icon: '🛡️',
    title: 'Preventívna starostlivosť',
    description: 'Pravidelné prehliadky, profesionálne čistenie a RTG diagnostika.',
    price: 'od 45 €',
  },
  {
    id: 'surgery',
    icon: '🔬',
    title: 'Chirurgia',
    description: 'Extrakcie, trepanácie a drobné chirurgické zákroky v sterilnom prostredí.',
    price: 'od 80 €',
  },
];

export const WHY_US_ITEMS: WhyUsItem[] = [
  {
    id: '1',
    icon: '🏥',
    title: 'Moderné vybavenie',
    description: 'Digitálne RTG, CBCT 3D skener, laserová technológia — všetko pre presnú diagnostiku.',
  },
  {
    id: '2',
    icon: '💉',
    title: 'Bezbolestné zákroky',
    description: 'Komfortná anestézia a sedácia pre pacientov so strachom zo zubára.',
  },
  {
    id: '3',
    icon: '📅',
    title: 'Rýchle termíny',
    description: 'Online rezervácia 24/7. Urgentné prípady riešime do 24 hodín.',
  },
  {
    id: '4',
    icon: '💳',
    title: 'Zdravotné poistenie',
    description: 'Zmluvná ambulancia VšZP, Union a Dôvera. Splátkový plán pre nákladné liečby.',
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: '1',
    name: 'MUDr. Jana Kováčová',
    role: 'Implantológia & Chirurgia',
    description: '12 rokov skúseností, absolventka Viedenskej stomatologickej kliniky.',
    imageUrl: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=500&fit=crop&crop=top',
  },
  {
    id: '2',
    name: 'MUDr. Tomáš Novák',
    role: 'Estetická stomatológia',
    description: 'Špecialista na Invisalign a porcelánové fasety, člen ESE.',
    imageUrl: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=500&fit=crop&crop=top',
  },
  {
    id: '3',
    name: 'MUDr. Petra Horáčková',
    role: 'Detská stomatológia',
    description: 'Špecialistka na liečbu detí a dospievajúcich, ortodoncia.',
    imageUrl: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=500&fit=crop&crop=top',
  },
  {
    id: '4',
    name: 'MUDr. Martin Blaho',
    role: 'Parodontológia',
    description: 'Odborník na liečbu ďasien a pokročilú implantológiu.',
    imageUrl: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&h=500&fit=crop&crop=top',
  },
];

export const PRICING: PricingCategory[] = [
  {
    id: 'prevention',
    category: 'Preventívna starostlivosť',
    items: [
      { id: 'p1', service: 'Vstupná prehliadka', price: '45 €' },
      { id: 'p2', service: 'Profesionálne čistenie (Air-Flow)', price: '79 €' },
      { id: 'p3', service: 'Digitálne RTG (1 snímok)', price: '12 €' },
      { id: 'p4', service: 'Panoramatický RTG', price: '35 €' },
    ],
  },
  {
    id: 'aesthetic',
    category: 'Estetická stomatológia',
    items: [
      { id: 'a1', service: 'Bielenie zubov (Philips Zoom)', price: '290 €' },
      { id: 'a2', service: 'Kompozitná faseta (1 zub)', price: '180 €' },
      { id: 'a3', service: 'Porcelánová faseta (1 zub)', price: '350 €' },
      { id: 'a4', service: 'Keramická korunka', price: '420 €' },
    ],
  },
  {
    id: 'implants',
    category: 'Implantáty',
    items: [
      { id: 'i1', service: 'Implantát (Swiss Made)', price: '890 €', note: 'vrátane korunky' },
      { id: 'i2', service: 'Korunka na implantát', price: '350 €' },
      { id: 'i3', service: 'Kosť náhrada', price: 'od 250 €' },
    ],
  },
];

export const REVIEWS: Review[] = [
  {
    id: '1',
    name: 'Mária K.',
    rating: 5,
    text: 'Konečne som našla zubnú ambulanciu, kde sa cítim comfortne. Pani doktorka Kováčová je úžasná — trpezlivá a profesionálna. Odporúčam všetkým!',
    date: 'Január 2025',
  },
  {
    id: '2',
    name: 'Peter S.',
    rating: 5,
    text: 'Implantáty robené tu sú perfektné. Celý proces prebehol bez bolesti, personál bol vždy ochotný. Výsledok predčil moje očakávania.',
    date: 'Február 2025',
  },
  {
    id: '3',
    name: 'Lucia M.',
    rating: 5,
    text: 'Absolvovala som Invisalign liečbu — 14 mesiacov a výsledok je neskutočný. Ďakujem celému tímu za trpezlivosť a odborný prístup.',
    date: 'Marec 2025',
  },
  {
    id: '4',
    name: 'Jozef H.',
    rating: 5,
    text: 'Mal som dlhodobý strach zo zubára. Tu mi pomohli prekonať ho. Bezbolestné ošetrenie, príjemný personál. Teraz chodím pravidelne.',
    date: 'Apríl 2025',
  },
];

export const CONTACT_INFO: ContactInfo = {
  address: 'Štúrovo nám. 12, 911 01 Trenčín',
  phone: '+421 32 123 4567',
  email: 'info@dentcare-trencin.sk',
  hours: {
    weekdays: 'Po – Pi: 8:00 – 18:00',
    saturday: 'So: 9:00 – 13:00',
    sunday: 'Ne: Zatvorené',
  },
};
