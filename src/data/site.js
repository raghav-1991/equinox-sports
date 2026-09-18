// Global site data — company details, navigation and home-page content.
// Edit copy here; components read from this file.

export const company = {
  name: "Equinox Sports Infra",
  tagline: "Redefining Safety",
  phone: "+91 99863 06767",
  phoneHref: "tel:+919986306767",
  email: "info@equinoxsportsinfra.com",
  address: "#891/A, 7th A Main Road, Koramangala 1st Block, Bangalore 560034",
  whatsapp:
    "https://api.whatsapp.com/send?phone=919986306767&text=Hi, I'd like to know more about Equinox Sports Infra",
  logo: "/assets/img/logo.png",
  logoWhite: "/assets/img/logo/white.png",
  copyrightYear: 2021,
  social: [
    { label: "Facebook", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "LinkedIn", href: "#" },
    { label: "YouTube", href: "#" },
  ],
};

// Primary navigation. `slug` values map to routes handled by DetailPage.
export const navigation = [
  { label: "Home", to: "/" },
  {
    label: "Products",
    children: [
      { label: "Synthetic Grass Turf", to: "/products/synthetic-grass-turf" },
      { label: "Acrylic Synthetic Flooring", to: "/products/acrylic-synthetic-flooring" },
      { label: "PVC Vinyl Flooring", to: "/products/pvc-vinyl-flooring" },
      { label: "PU Synthetic Flooring", to: "/products/pu-synthetic-flooring" },
      { label: "Athletic Synthetic Tracks", to: "/products/athletic-synthetic-tracks" },
      { label: "Rubber Tile", to: "/products/rubber-tile" },
      { label: "Wooden Flooring", to: "/products/wooden-flooring" },
      { label: "PP Tile", to: "/products/pp-tile" },
      { label: "EPDM", to: "/products/epdm" },
    ],
  },
  {
    label: "Sports",
    children: [
      { label: "Athletic Track", to: "/sports/athletic-track" },
      { label: "Badminton", to: "/sports/badminton" },
      { label: "Basketball", to: "/sports/basketball" },
      { label: "Cricket", to: "/sports/cricket" },
      { label: "Football", to: "/sports/football" },
      { label: "Gym", to: "/sports/gym" },
      { label: "Hockey", to: "/sports/hockey" },
      { label: "Tennis", to: "/sports/tennis" },
      { label: "Volleyball", to: "/sports/volleyball" },
      { label: "Other Sports", to: "/sports/other-sports" },
    ],
  },
  {
    label: "Other Products",
    children: [
      { label: "Chain Link Fencing", to: "/other-products/chain-link-fencing" },
      { label: "LED Lighting", to: "/other-products/led-lighting" },
      { label: "Structure", to: "/other-products/structure" },
    ],
  },
  {
    label: "Services",
    children: [
      { label: "Facility Consultancy & Design", to: "/services/facility-consultancy-design" },
      { label: "Steam and Sauna", to: "/services/steam-and-sauna" },
      { label: "Turnkey Projects", to: "/services/turnkey-projects" },
    ],
  },
  { label: "About Us", to: "/about" },
  { label: "Contact Us", to: "/contact" },
];

// Home hero slider.
export const heroSlides = [
  {
    image: "/assets/img/slider/slider-1.jpg",
    eyebrow: "Welcome to Equinox Sports Infra",
    title: "Redefining Safety",
    text: "Design, consultation and execution for world-class sports infrastructure.",
    cta: { label: "Read More", to: "/about" },
  },
  {
    image: "/assets/img/slider/slider-2.jpg",
    eyebrow: "Turf • Tracks • Courts",
    title: "Built for Performance",
    text: "Resilient, high-quality surfaces for stadiums, clubs, schools and homes.",
    cta: { label: "Our Products", to: "/products/synthetic-grass-turf" },
  },
  {
    image: "/assets/img/slider/slider-3.jpg",
    eyebrow: "Turnkey Sports Facilities",
    title: "From Ground to Game",
    text: "Basketball, running tracks, football, cricket, tennis and more.",
    cta: { label: "Talk to Us", to: "/contact" },
  },
];

export const intro = {
  eyebrow: "Welcome To",
  title: "Equinox Sports Infra",
  body: "We are Equinox Sports Infra — a full-service design, consultation and execution firm specializing in sports infrastructure. We specialize in outdoor synthetic flooring, turf, outdoor play-area construction, indoor vinyl flooring and wooden flooring, and we undertake turnkey projects. We design, develop and construct basketball, running-track, football, cricket, volleyball, badminton, squash and tennis play areas.",
  image: "/assets/img/about/about.jpg",
  pillars: [
    {
      title: "Quality and Safety",
      text: "Quality and safety are our highest priority. We give our clients the highest standard of quality satisfaction in the sporting world. Our team's years of experience delivers an unmatched, reliable product.",
    },
    {
      title: "Our Mission",
      text: "We want to revolutionize the sporting world by making sports facilities available to all and bringing out the sporting talent in every individual — creating real social and community impact.",
    },
    {
      title: "Service",
      text: "Timely service, like a timely gift, is doubled in value. Our goal is customer service that is not just the best but legendary — retaining clients and earning new ones through reference.",
    },
  ],
};

export const servicesBlurb = {
  eyebrow: "What We Do",
  title: "Our Services",
  body: "Best-in-class performance is the result of determination, hard work and practice. Equinox is committed to giving every player the best experience. We build the most resilient, high-quality, comfortable floorings for sport and leisure — at affordable prices — so Indian athletes and players can train and compete.",
  image: "/assets/img/about/services.png",
};

export const stats = [
  { value: 250, suffix: "+", label: "Projects Delivered" },
  { value: 15, suffix: "+", label: "Years of Experience" },
  { value: 20, suffix: "+", label: "Sports Covered" },
  { value: 100, suffix: "%", label: "Quality Assured" },
];

export const testimonials = [
  {
    name: "Mr. Rakesh",
    place: "Bangalore",
    text: "Presented the project very well and I am very satisfied with the customer service. Convinced with the pricing!",
  },
  {
    name: "Mr. Vinay",
    place: "Bangalore",
    text: "Well organised and professional company. Great job done at our sports stadium — international-standard football ground with 3G artificial grass, plus tennis, basketball, badminton and squash courts. Appreciated the quality and standards.",
  },
  {
    name: "Mr. Santosh",
    place: "Bangalore",
    text: "Got the flooring for my gym done recently. Equinox Sports Infra is qualitative with a good finish — and yes, decently priced!",
  },
];

// Projects gallery (note: c12 does not exist on the source site).
export const projects = [
  "c1", "c2", "c3", "c4", "c5", "c6",
  "c7", "c8", "c9", "c10", "c11", "c13",
].map((id) => ({ id, image: `/assets1/images/gallery/${id}.jpg` }));

export const clients = [
  "/assets/img/brand/partner1.jpg",
  "/assets/img/brand/partner2.jpg",
  "/assets/img/brand/partner3.jpg",
  "/assets/img/brand/partner6.jpg",
  "/assets/img/brand/partner7.jpg",
];

// Compact footer link list.
export const footerSports = navigation.find((n) => n.label === "Sports").children;
