export const categories = ['All', 'Natural Wonders', 'Historical Sites', 'Cultural Heritage', 'Beaches', 'Adventure', 'Local Attractions'];

// Add the cover image plus two gallery images in public/images using this pattern:
// `destination.jpg`, `destination-1.jpg`, and `destination-2.jpg`.
const localImage = (filename) => {
  const baseName = filename.replace(/\.[^.]+$/, '');
  return {
    image: `/images/${filename}`,
    gallery: [`/images/${baseName}-1.jpg`, `/images/${baseName}-2.jpg`]
  };
};

export const heritageSites = [
  { id: 'hundred-islands', name: 'Hundred Islands', location: 'Alaminos City, Pangasinan', category: 'Natural Wonders', tag: 'Natural Wonder', description: 'A shimmering archipelago of limestone islands scattered across Lingayen Gulf.', history: 'Declared a national park in 1940, this remarkable seascape has long been a gateway to the Gulf of Lingayen.', significance: 'Its islands embody the coastal character and ecological richness of western Pangasinan.', things: ['Island hopping', 'Snorkeling at Quezon Island', 'Viewpoints at Governor Island'], info: 'Best visited from November to May. Boats depart from Lucap Wharf.', ...localImage('hundred-islands.jpg') },
  { id: 'bolinao-lighthouse', name: 'Bolinao Lighthouse', location: 'Bolinao, Pangasinan', category: 'Historical Sites', tag: 'Historical / Landmark', description: 'A proud century-old beacon above the coast of Patar.', history: 'Built in 1905 during the American colonial period, the lighthouse still watches over the West Philippine Sea.', significance: 'The landmark connects generations of Bolinao fishers and seafarers to their coastal home.', things: ['Climb the tower', 'Watch the sunset', 'Explore Patar coast'], info: 'Open during daylight hours. Pair with a trip to Patar Beach.', ...localImage('bolinao-lighthouse.jpg') },
  { id: 'balungao-hot-spring', name: 'Balungao Hot Spring', location: 'Balungao, Pangasinan', category: 'Natural Wonders', tag: 'Natural Attraction', description: 'A restorative foothills retreat known for naturally warm mineral pools.', history: 'Nestled at the base of Mount Balungao, its waters have welcomed local families for decades.', significance: 'A favorite wellness escape that celebrates Pangasinan’s volcanic landscape.', things: ['Soak in mineral pools', 'Hike Mount Balungao', 'Family picnic'], info: 'Bring sun protection and arrive early on weekends.', ...localImage('balungao-hot-spring.jpg') },
  { id: 'patar-beach', name: 'Patar Beach', location: 'Bolinao, Pangasinan', category: 'Beaches', tag: 'Coastal Escape', description: 'Fine pale sand, clear water, and wide-open sunsets on Pangasinan’s western edge.', history: 'Patar’s coast has been shaped by generations of communities living in step with the sea.', significance: 'A gentle invitation to appreciate and protect Bolinao’s marine environment.', things: ['Swim', 'Beach picnic', 'Sunset walk'], info: 'Observe local beach rules and bring reusable water containers.', ...localImage('patar-beach.jpg') },
  { id: 'manaoag-basilica', name: 'Minor Basilica of Our Lady of Manaoag', location: 'Manaoag, Pangasinan', category: 'Cultural Heritage', tag: 'Faith & Heritage', description: 'A beloved pilgrimage church at the heart of Pangasinense faith and tradition.', history: 'The devotion to Our Lady of Manaoag reaches back to the 17th century and remains deeply woven into local life.', significance: 'It is one of the country’s most cherished places of prayer, thanksgiving, and community.', things: ['Visit the basilica', 'Quiet reflection', 'Explore town treats'], info: 'Dress respectfully. Peak pilgrimage periods can be busy.', ...localImage('manaoag-basilica.jpg') },
  { id: 'sunflower-maze', name: 'Tayug Sunflower Garden', location: 'Tayug, Pangasinan', category: 'Local Attractions', tag: 'Local Favorite', description: 'A joyful field of sunflowers made for slow afternoons and family photographs.', history: 'The garden reflects the creativity of local growers and community tourism.', significance: 'It offers a bright, homegrown side of Pangasinan’s rural charm.', things: ['Photo walk', 'Meet local growers', 'Try local snacks'], info: 'Flower seasons vary; check locally before travel.', ...localImage('tayug-sunflower-garden.jpg') }
];

export const siteById = (id) => heritageSites.find((site) => site.id === id);
