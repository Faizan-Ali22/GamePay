/**
 * GamePay - Game Store Demo Data
 * This file contains all the dummy data used across the application.
 */

// --- Trending Games ---
const TRENDING_GAMES = [
  { id: 1, title: 'GTA VI', cover: 'images/gta6_cover_1785590539907.jpg', platforms: ['PC', 'PS4', 'Xbox One'], genre: 'Action RPG', price: 69.99, featured: true },
  { id: 2, title: 'Red Dead Redemption II', cover: 'images/rdr2_cover_1785590564023.jpg', platforms: ['PC', 'PS4', 'Xbox One'], genre: 'Action Adventure', price: 39.99 },
  { id: 3, title: 'Grand Theft Auto V', cover: 'images/gta6_cover_1785590539907.jpg', platforms: ['PC', 'PS4', 'Xbox One'], genre: 'Action', price: 29.99 },
  { id: 4, title: 'The Last of Us Part II', cover: 'images/last_of_us_cover_1785590771503.jpg', platforms: ['PS4', 'PS5'], genre: 'Action Adventure', price: 39.99 },
  { id: 5, title: 'Ghost of Tsushima', cover: 'images/ghost_tsushima_1785590619588.jpg', platforms: ['PS4', 'PS5', 'PC'], genre: 'Action RPG', price: 49.99 },
  { id: 6, title: 'God of War Ragnarok', cover: 'images/god_of_war_cover_1785590695449.jpg', platforms: ['PS4', 'PS5', 'PC'], genre: 'Action Adventure', price: 59.99 }
];

// --- Game Categories ---
const GAME_CATEGORIES = [
  { id: 1, name: 'Sports & Racing', image: 'images/cat_sports_1785590850339.jpg', size: 'wide' },
  { id: 2, name: 'RPG', image: 'images/gta6_cover_1785590539907.jpg', size: 'medium' },
  { id: 3, name: 'Adventure', image: 'images/god_of_war_cover_1785590695449.jpg', size: 'medium' },
  { id: 4, name: 'Strategy', image: 'images/elden_ring_cover_1785590643023.jpg', size: 'small' },
  { id: 5, name: 'Survival', image: 'images/last_of_us_cover_1785590771503.jpg', size: 'small' },
  { id: 6, name: 'Sports & Racing', image: 'images/forza_cover_1785590706984.jpg', size: 'wide' }
];

// --- Game of the Year Spotlight ---
const GAME_OF_THE_YEAR = {
  title: 'Black Myth Wukong',
  description: 'Black Myth: Wukong Is An Action RPG Inspired By The Legendary Chinese Novel "Journey To The West." The Game Takes Players On An Epic Journey As The Monkey King, Wukong, Battling Through Mythological Creatures And Mastering Magical Abilities. Featuring Stunning Visuals, Challenging Combat, And An Immersive World, Black Myth: Wukong Aims To Set A New Standard For Action RPGs.',
  metacritic: 81,
  releaseDate: 'August 20, 2024',
  platforms: ['PC', 'PS5', 'Xbox Series X & S'],
  genre: 'Action RPG Adventure',
  platformButtons: ['PS 5', 'Xbox Series S', 'PC', 'Xbox Series X'],
  mainImage: 'images/black_myth_wukong_1785590552292.jpg',
  galleryImages: [
    'images/black_myth_wukong_1785590552292.jpg',
    'images/elden_ring_cover_1785590643023.jpg',
    'images/ghost_tsushima_1785590619588.jpg',
    'images/god_of_war_cover_1785590695449.jpg',
    'images/rdr2_cover_1785590564023.jpg'
  ],
  minRequirements: {
    os: 'Windows 10 64-Bit Or Newer',
    cpu: 'Intel Core I5-8400 / AMD 5 1600',
    memory: '16GB RAM',
    gpu: 'NVIDIA GeForce GTX 1060 (6GB) / AMD 5 1600',
    directx: 'Version 11',
    storage: '130GB Available Space'
  },
  recRequirements: {
    os: 'Windows 10 64-Bit Or Newer',
    cpu: 'Intel Core I7-9700 / AMD Ryzen 5 5500',
    memory: '16GB RAM',
    gpu: 'NVIDIA GeForce GTX 2060 / AMD Radeon RX 5700Xt / INTEL Arc A750',
    directx: 'Version 12',
    storage: '130GB Available Space'
  }
};

// --- Game Reviews ---
const GAME_REVIEWS = [
  {
    id: 1, title: 'Ghost Of Tsushima', year: 2020,
    image: 'images/ghost_tsushima_1785590619588.jpg',
    description: 'Step Into The War-Torn World Of Feudal Japan, Where Honor And Sacrifice Are Tested In The Fires Of Conflict. "Ghost Of Tsushima" Follows Jin Sakai, One Of The Last Remaining Samurai, As He Defends His Homeland From The Mongol Invasion. The Game Offers An Immersive Open-World Filled With Stunning Landscapes And ...',
    views: '1200+', comments: 112, rating: 8.7, metacritic: 83,
    tags: ['Action', 'RPG', 'Samurai', 'Adventure'], date: 'September 8, 2024'
  },
  {
    id: 2, title: 'Cyberpunk', year: 2020,
    image: 'images/cyberpunk_cover_1785590632155.jpg',
    description: 'Step Into A Dark, Gritty, And Dystopian World Where High-Tech Meets Low-Life. In Cyberpunk 2077, You Play As V, A Mercenary Navigating The Vibrant And Dangerous Night City, Where Choices Shape Your Destiny. The Game Blends First-Person Shooter Mechanics With RPG Elements, Offering Deep Customization, Immersive ...',
    views: '1000+', comments: 86, rating: 8.2, metacritic: 86,
    tags: ['Action', 'RPG', 'Shooting'], date: 'September 7, 2024'
  },
  {
    id: 3, title: 'Forza Horizon 5', year: 2021,
    image: 'images/forza_cover_1785590706984.jpg',
    description: 'Forza Horizon 5 Takes Players To The Stunning Landscapes Of Mexico, Delivering The Ultimate Open-World Racing Experience, With A Vast Map Full Of Diverse Environments, The Game Excels In Both Visual Splendor And Gameplay Depth. Whether You\'re Speeding Through Deserts, Rainforests, Or Vibrant City Streets, ...',
    views: '2100+', comments: 96, rating: 8.3, metacritic: 92,
    tags: ['Sports', 'Racing', 'Cars', 'Drifting'], date: 'September 4, 2024'
  },
  {
    id: 4, title: 'COD: Modern Warfare II', year: 2022,
    image: 'images/cod_mw2_cover_1785590718104.jpg',
    description: 'Call Of Duty: Black Ops 6 Returns With An Intense, Fast-Paced Storyline, Diving Deeper Into The Shadowy World Of Covert Operations. Boasting A Gripping Narrative, This Installment Introduces "Omnimovement," Allowing Unprecedented Flexibility In How Players Navigate The Battlefield. From Sliding And Sprinting In Any Direction ...',
    views: '2600+', comments: 235, rating: 7.6, metacritic: 75,
    tags: ['Action', 'RPG', 'History', 'Battle', 'Shooting'], date: 'September 1, 2024'
  }
];

// --- Upcoming Games ---
const UPCOMING_GAMES = [
  { id: 1, title: 'FC25', image: 'images/cat_sports_1785590850339.jpg', date: '27/10/2024', borderColor: '#FFD600' },
  { id: 2, title: 'Marvel: Wolverine', image: 'images/cod_mw2_cover_1785590718104.jpg', date: 'Early 2025', borderColor: null },
  { id: 3, title: 'Star Wars Outlaws', image: 'images/rdr2_cover_1785590564023.jpg', date: 'Mid 2025', borderColor: null },
  { id: 4, title: 'GTA VI', image: 'images/gta6_cover_1785590539907.jpg', date: 'Late 2025', borderColor: '#E040FB' },
  { id: 5, title: 'The Witcher 4', image: 'images/witcher_cover_1785590798269.jpg', date: 'Mid 2026', borderColor: null }
];

// --- All Games (For Filter/Search) ---
const FILTER_GAMES = [
  { id: 1, title: 'Cyberpunk 2077', image: 'images/cyberpunk_cover_1785590632155.jpg', year: 2023, metacritic: 86, price: 30, originalPrice: null, discount: null, borderColor: '#FFD600' },
  { id: 2, title: 'Black Myth Wukong', image: 'images/black_myth_wukong_1785590552292.jpg', year: 2024, metacritic: 93, price: 51, originalPrice: 60, discount: 15, borderColor: null },
  { id: 3, title: 'Elden Ring', image: 'images/elden_ring_cover_1785590643023.jpg', year: 2022, metacritic: 95, price: 30, originalPrice: 60, discount: 50, borderColor: '#E040FB' },
  { id: 4, title: 'Assassins Creed Mirage', image: 'images/ac_mirage_cover_1785590785021.jpg', year: 2023, metacritic: 84, price: 50, originalPrice: null, discount: null, borderColor: null },
  { id: 5, title: 'Resident Evil 4: Remake', image: 'images/ghost_tsushima_1785590619588.jpg', year: 2023, metacritic: 93, price: 42, originalPrice: 60, discount: 30, borderColor: null },
  { id: 6, title: 'Apex Legends', image: 'images/cod_mw2_cover_1785590718104.jpg', year: 2019, metacritic: 88, price: 0, originalPrice: null, discount: null, isFree: true, borderColor: '#FF4081' },
  { id: 7, title: 'Far Cry 5', image: 'images/rdr2_cover_1785590564023.jpg', year: 2018, metacritic: 78, price: 60, originalPrice: null, discount: null, borderColor: null },
  { id: 8, title: 'PES 2021', image: 'images/forza_cover_1785590706984.jpg', year: 2021, metacritic: 73, price: 45, originalPrice: null, discount: null, borderColor: '#E040FB' },
  { id: 9, title: 'Alan Wake 2', image: 'images/last_of_us_cover_1785590771503.jpg', year: 2023, metacritic: 93, price: 32, originalPrice: 40, discount: 20, borderColor: null },
  { id: 10, title: 'The Witcher 3', image: 'images/witcher_cover_1785590798269.jpg', year: 2015, metacritic: 93, price: 32, originalPrice: 40, discount: 20, borderColor: null }
];

// --- Blog Posts ---
const BLOG_POSTS = [
  { id: 1, title: 'FC25 Launch Day', image: 'images/cat_sports_1785590850339.jpg', size: 'large' },
  { id: 2, title: 'FC25 Prepares for October 2024 Release with Enhanced Realism', image: 'images/gta6_cover_1785590539907.jpg', size: 'small' },
  { id: 3, title: 'The Witcher 4 Expected to Bring Back Fan-Favorite Characters', image: 'images/witcher_cover_1785590798269.jpg', size: 'small' },
  { id: 4, title: "Marvel's Wolverine Set for an Epic 2025", image: 'images/cod_mw2_cover_1785590718104.jpg', size: 'small' },
  { id: 5, title: 'Star Wars Outlaws Combines Open-World Adventure', image: 'images/rdr2_cover_1785590564023.jpg', size: 'small' }
];

// --- Genre Tags ---
const GENRE_TAGS = [
  'Action', 'RPG', 'Samurai', 'Sports', 'Shooting', 'Racing', 'Battle', 'Survival', 'Strategy', 'Team-Up'
];

// --- FAQ Data ---
const FAQ_DATA = [
  { question: 'What Services Does GamePay Offer?', answer: 'GamePay offers exclusive in-game content, free games each month, and a free channel subscription on Twitch. Members also get access to special discounts and early access to new releases.' },
  { question: 'Do I Need An Account To Use The Site?', answer: 'While you can browse our catalog without an account, you will need to create one to make purchases, leave reviews, and access exclusive member benefits.' },
  { question: 'Are There Any Subscription Fees?', answer: 'Basic access to GamePay is completely free. We offer an optional premium membership that provides additional discounts, early access, and exclusive content.' },
  { question: 'How Can I Contact Support?', answer: 'You can reach our support team through the live chat feature on our website, by emailing support@gamepay.com, or through our social media channels. We typically respond within 24 hours.' }
];

// --- Gaming Features / Perks ---
const GAMING_FEATURES = [
  { title: 'Access <span class="gradient-text">Exclusive Games</span>', description: 'Get early access to new releases and hidden gems, only for registered members. Be the first to play!' },
  { title: 'Track <span class="gradient-text">Stats</span> & <span class="gradient-text">Achievements</span>', description: 'Monitor gameplay stats, track achievements, and share your progress with fellow gamers easily' },
  { title: 'Join Our <span class="gradient-text">Community</span>', description: 'Connect with a passionate community of gamers. Share tips, strategies, and gaming experiences' },
  { title: 'Exclusive <span class="gradient-text">Discounts</span> & <span class="gradient-text">Offers</span>', description: 'Enjoy member-only discounts on top-rated games, DLCs, and in-game items. Save on your favorites!' }
];
