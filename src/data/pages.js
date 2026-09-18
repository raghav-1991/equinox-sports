/**
 * Content for every inner page (Products, Sports, Other Products, Services).
 * One consistent shape drives the shared DetailPage template:
 *
 *   slug        unique id, also the URL segment
 *   category    "products" | "sports" | "other-products" | "services"
 *   title       page H1
 *   image       feature image (relative path, resolved via img())
 *   intro       array of paragraphs
 *   sections    array of { heading, sub?, list, columns? }
 *   table       optional { head: [...], rows: [[...]] }
 *   placeholder optional flag for copy that needs client confirmation
 *
 * Copy is taken from the existing equinoxsportsinfra.com pages.
 */

export const pages = {
  /* ------------------------------- PRODUCTS ------------------------------- */
  "synthetic-grass-turf": {
    category: "products",
    title: "Synthetic Grass Turf",
    image: "/assets/img/about/artiicial.jpg",
    intro: [
      "Equinox is one of the largest importers of synthetic turf. Our high-quality turf is used for football, hockey, cricket, landscaping and multisport-purpose turf. Turf installation is provided and installed by our well-experienced team. All certified products of FIFA, FIH and ITF are available with us.",
    ],
    sections: [
      {
        heading: "Benefits",
        list: [
          "Can be used in all weather conditions.",
          "Low maintenance cost.",
          "Good impact absorption, hence low risk of injury.",
          "Multisport option.",
          "Less water usage.",
        ],
      },
    ],
    table: {
      head: ["Description", "Options available"],
      rows: [
        ["Pile Height", "12mm, 15mm, 35mm, 40 and 50mm"],
        ["Infill", "Infill with sand and SBR or no infill"],
        ["Color", "Green, customized colour available on MOQ"],
        ["Turf Backing", "SBR latex PU"],
        ["Yarn", "Monofilament and curly (Diamond, V, Flat Shape PE)."],
      ],
    },
  },

  "acrylic-synthetic-flooring": {
    category: "products",
    title: "Acrylic Synthetic Flooring",
    image: "/assets/img/about/acrylic.jpg",
    intro: [
      "This all-weather surface option provides a wide range of playing options like tennis, basketball, volleyball and multisport outdoor games. This surface flooring can be installed on concrete or asphalt. It is a favourite among builders and educational institutions for its cost-effectiveness and the aesthetics it provides. Its colourful options are also preferred by architects. Without doubt this is the most economical sports surfacing option available.",
    ],
    sections: [
      {
        heading: "Benefits",
        list: [
          "All weather resistant.",
          "Multisport court for indoors and outdoors.",
          "Shock-absorbing surface.",
          "Minimum maintenance required.",
          "Performance and quality on a professional level.",
        ],
      },
    ],
    table: {
      head: ["Description", "Details"],
      rows: [
        ["Thickness", "3mm–8mm (option for cushion and shock pad available)."],
        ["Sub base", "Concrete or Asphalt"],
        ["Colors available", "Red, Green, Blue etc."],
        ["5 Layer", "Primer, resurfacer, 2 coat top colour, line marking."],
        ["8 Layer", "Primer, resurfacer, 3 coat cushion, 2 coat top, line marking."],
      ],
    },
  },

  "pvc-vinyl-flooring": {
    category: "products",
    title: "PVC Indoor Flooring",
    image: "/assets/img/about/pvc.jpg",
    intro: [
      "This highly resilient, wear-resistant surface layer is made up of various resin cushion layers. This PVC is made of FRP or GFT that gives it high stability and good wear resistance. PVC can be used indoors and outdoors for different sports. Its high shock-absorption properties make it ideal for badminton, volleyball and other high-impact sports. It can also be used for commercial flooring and educational-institution flooring.",
    ],
    sections: [
      {
        heading: "Benefits",
        list: [
          "Non-slip, easy to install; different pattern surface finishes available.",
          "Good shock absorption.",
          "Good sound insulator.",
          "Soft, comfortable and high resilience.",
          "Water resistant.",
        ],
      },
    ],
    table: {
      head: ["Description", "Details"],
      rows: [
        ["Thickness", "4.5–8mm"],
        ["Weight", "3.6–6.2 kg/m²"],
        ["Width", "1.8 mtr"],
        ["Wear layer thickness", "0.45–0.8mm"],
        ["Length", "15–20 mtr"],
      ],
    },
  },

  "pu-synthetic-flooring": {
    category: "products",
    title: "PU Synthetic Flooring",
    image: "/assets/img/about/pufloor.jpg",
    intro: [
      "The construction of this type of sports surface involves mixing rubberised granules with a specifically formulated polyurethane binder on site and laying it by the method of hand lay or machine lay. Once the flooring has fully cured, anti-slip, non-skid polyurethane paint is applied to give the flooring colour and skid resistance. This specification is very popular for schools and clubs looking to complete a court upgrade by installing a surface with better playing qualities for different sports.",
    ],
    sections: [
      {
        heading: "Benefits",
        list: [
          "Low density for excellent coverage.",
          "Maximum abrasion resistance and permanent elasticity.",
          "High shock absorption.",
          "Outdoor and indoor application.",
          "Anti-slip and excellent wear resistance.",
        ],
      },
    ],
    table: {
      head: ["Description", "Details"],
      rows: [
        ["Thickness", "5–12mm"],
        ["Color", "Optional"],
        ["Certification", "ITF, FIBA"],
        ["Sub base", "Concrete and asphalt"],
        ["Application", "Outdoor and indoor"],
      ],
    },
  },

  "athletic-synthetic-tracks": {
    category: "products",
    title: "Synthetic Athletic Track",
    image: "/assets/img/about/track.jpg",
    intro: [
      "Based on usage and budget, our clients can opt from the following options for a world-class athletic track: Spray Coat, Sandwich Coat, Full PUR Track, EPDM Track and Pre-fabricated Track System.",
    ],
    sections: [
      {
        heading: "Benefits",
        list: [
          "Durability",
          "Excellent finishing",
          "Quick water drainage",
          "Superior A-grade quality",
          "Less effort and physical force while running",
          "All-weather operation ability",
        ],
      },
    ],
    table: {
      head: ["", "Base", "Thickness", "Pour System"],
      rows: [
        ["Spray Coat", "Concrete / Asphalt", "14mm", "Wet Pour"],
        ["Sandwich system", "Concrete / Asphalt", "14–15mm", "Wet Pour"],
        ["Full PU", "Concrete / Asphalt", "13–15mm", "Wet Pour"],
        ["EPDM", "Concrete / Asphalt", "15mm", "Wet Pour"],
        ["Prefabricated", "Concrete / Asphalt", "13mm", "No coating and granules required"],
      ],
    },
  },

  "rubber-tile": {
    category: "products",
    title: "Rubber Tile",
    image: "/assets/img/about/rubber.jpg",
    intro: [
      "Long-lasting, affordable and easy to install, rubber flooring tiles are great for a wide variety of applications and ideal for almost any workout environment. Clicking together like puzzle pieces, they are very easy to put together, can fit any space and can be added at any time. Besides, they perform great and look great.",
    ],
    sections: [
      {
        heading: "Benefits",
        list: [
          "Good aesthetic appearance",
          "Easy to install and maintain",
          "Good noise and shock absorption",
          "Tough and abrasion resistant",
          "A very good product life",
        ],
      },
    ],
    table: {
      head: ["Description", "Details"],
      rows: [
        ["Thickness", "6–10mm"],
        ["Length", "8–20 mtr"],
        ["Material", "Recycled rubber, SBR"],
        ["Density", "1200 kg/m³"],
      ],
    },
  },

  "wooden-flooring": {
    category: "products",
    title: "Wooden Flooring",
    image: "/assets/img/about/wooden.jpg",
    intro: [
      "We are a leading manufacturer and supplier of a great range of wooden sports flooring. As per the demands and requirements of our customers, we provide superior-quality wooden sports flooring that is sensible and strong, and highly valued by clients. This indoor flooring option can be used for badminton, basketball, squash and other indoor games.",
    ],
    sections: [
      {
        heading: "Benefits",
        list: [
          "Good shock absorption.",
          "Strong and durable.",
          "Enhanced look.",
          "Low maintenance and easy to clean.",
        ],
      },
    ],
    table: {
      head: ["Description", "Details"],
      rows: [
        ["Wood Type", "Teak / Maple"],
        ["Locking system", "Tongue and groove"],
        ["Top coat", "Anti-skid PU finish"],
        ["Shock Pad", "Yes"],
      ],
    },
  },

  "pp-tile": {
    category: "products",
    title: "Interlocking PP Tile",
    image: "/assets/img/about/pp.jpg",
    intro: [
      "Designed for all weather, using high-strength impact polypropylene and unique suspended systems. One side of the interlocking system provides level cushioning performance, and a strong support structure provides vertical cushioning performance.",
    ],
    sections: [
      {
        heading: "Benefits",
        list: [
          "Fast and easy installation.",
          "Can be used in all weather conditions.",
          "Has a long working life.",
          "Good shock absorption.",
          "Can be used for multi-sport activity.",
        ],
      },
    ],
    table: {
      head: ["Description", "Details"],
      rows: [
        ["Material", "Polypropylene"],
        ["Temperature resistant", "40–70 °C"],
        ["Color", "Red, Blue, Green etc. available"],
        ["Weight", "0.3–0.4 kg"],
      ],
    },
  },

  epdm: {
    category: "products",
    title: "EPDM",
    image: "/assets/img/about/epdm.jpg",
    intro: [
      "EPDM rubber flooring is extremely colourfast, dust-free, weather-resistant and robust, with excellent colour consistency, high quality and long life. The granules can be used for football-field floors, tartan paths, walking trails, playgrounds and sports areas. It is used extensively in children's play areas because of its high shock-absorption properties.",
    ],
    sections: [
      {
        heading: "Benefits",
        list: [
          "Good weather resistance and low maintenance.",
          "Excellent colour resistance.",
          "Robust, elastic and comfortable to walk on.",
          "High-quality and long-lasting.",
          "Child- and play-friendly, safe and hygienic.",
        ],
      },
    ],
  },

  /* -------------------------------- SPORTS -------------------------------- */
  "athletic-track": {
    category: "sports",
    title: "Athletic Tracks",
    image: "/assets/img/about/athletic.jpg",
    intro: [
      "We provide a wide range of options — from spray coat, full PU, EPDM, sandwich and prefabricated roll. Our all-weather athletic running track is good for a sportsperson's speed and technique, effective for improving sports achievement and protecting athletes from falling, with features of flatness, anti-press, good elasticity, steady performance, long-lasting colour and long service life.",
      "By pattern, tracks can be divided into mixing, ventilate, compound and so on, and the colour can be customized. For the competition area the thickness is 13mm; for the non-competition area, 9mm; and for extra-thick areas, 20–25mm. Running tracks are recognized as the best all-weather sports-ground material in the world.",
    ],
    sections: [
      {
        heading: "Product Advantage",
        list: [
          "Self-developed and patented products — more eco-friendly and lighter in weight.",
          "Cost effective: consumption of materials cut by 10%–15%.",
          "Lower maintenance and excellent after-sales service.",
          "Tested by authoritative organizations and quality guaranteed.",
          "More stable and longer service life in all weather conditions.",
          "One-stop service available: from project design to construction.",
          "Customer-oriented operating philosophy.",
          "Contributes to energy conservation, environmental protection and sustainable development.",
        ],
      },
    ],
  },

  badminton: {
    category: "sports",
    title: "Badminton Court",
    image: "/assets/img/about/c.jpg",
    intro: [
      "Equinox Sports Infra's product range includes a variety of indoor and outdoor sports surfaces internationally approved by various federations. From BWF-approved vinyl surfaces to artificial turf fields, we offer cutting-edge solutions meeting exacting standards for badminton. Our surfaces are tested to meet the demands of professional and community facility operators.",
      "These surfaces meet the performance specifications for player safety, performance and surface durability. We have a range of products for badminton suited for every application — indoor or outdoor, amateur or professional — catering to every price range without compromising on player comfort.",
    ],
    sections: [
      {
        heading: "Benefits and Advantages",
        list: [
          "Coefficient of friction between 0.4–0.7.",
          "Quick and easy direction change.",
          "Light weight (rocket start).",
          "Easy to roll in and out.",
          "Suitable for temporary use.",
          "Optimal specular gloss.",
          "Solvent, heavy-metal and phthalate-free formulation; low VOC.",
          "Environmentally sound solution.",
          "100% recyclable.",
          "Contains pre-consumer recycled materials.",
        ],
      },
      {
        heading: "Built-In Line Badminton Court Mat",
        list: [
          "Court line designed inside the flooring — zero maintenance, it doesn't wear out.",
          "Transparent layer coating — beautiful as new forever.",
          "Multiple PVC-reinforced structure design — wear resistant and durable.",
          "Zero-calcium-powder foam buffer layer.",
          "Special Y-shading bottom layer.",
          "Fibreglass mesh stable layer.",
        ],
      },
      {
        heading: "Zipper Badminton Court Mat",
        list: [
          "Portable courts for easy and fast installation — 3 to 5 times faster paving and rolling than traditional PVC sports flooring.",
          "Anti-slip in wet areas and super-elastic with upgraded shock absorption — excellent performance.",
          "Leading patented technology for world-class events.",
          "Made from top-grade resin-modified material and environment-friendly plasticizer — safe for the environment.",
        ],
      },
    ],
  },

  basketball: {
    category: "sports",
    title: "Basketball Court",
    image: "/assets/img/about/basketball.jpg",
    intro: [
      "Equinox Sports Infra provides a choice of optimum surfaces to meet the growing demand for the sport of basketball, both for training and professional games. From FIBA-approved PP interlocking tiles to wooden flooring, we have a range that comes in a splash of colour, ensuring long-term hygiene and easy cleaning.",
      "Our basketball range can replicate the different bounce, ball speed and performance of a range of surface types — whether you prefer wood, interlocking tiles or acrylic surfaces. Our durable, well-designed basketball court is the product of intensive research and testing that can transform uninspiring functional areas into vivid, attractive sports spaces. You imagine it; we make it happen.",
    ],
    sections: [
      {
        heading: "Basketball Flooring",
        sub: "HybridTurf — Benefits and Advantages",
        list: [
          "Surface with super wear-resistant treatment and high-purity raw material.",
          "Inner layer with high-density non-woven fabric and polyester mesh layer to ensure long-term use.",
          "Bottom layer with special design that prevents the court from moving.",
        ],
      },
    ],
  },

  cricket: {
    category: "sports",
    title: "Cricket Turf",
    image: "/assets/img/about/cricket.jpg",
    intro: [
      "Our range of cricket wickets is ideal for both the amateur and professional player, with seamless playing conditions for both indoor and outdoor use. With tens of thousands of cricket wickets installed the world over, we have a match-winner for you.",
      "We also have an outfield where the ball can race to the boundary and the fielder can dive without any risk of injury — a complete solution for the gentleman's game.",
    ],
    sections: [
      {
        heading: "Why Us?",
        list: [
          "HybridTurf cricket wickets certified by ECB.",
          "Developed in consultation with top players and administrators.",
          "A range of wickets to suit every playing level.",
          "Run-up wickets and roll-out wickets available too.",
        ],
      },
      {
        heading: "HybridTurf",
        list: [
          "Consistent and even surface with fantastic ball bounce and turn.",
          "All weather, quick drying.",
          "No maintenance required.",
          "Extremely hardwearing and durable.",
          "Ideal for both indoor and outdoor cricket.",
        ],
      },
      {
        heading: "HybridTurf Outfield",
        list: [
          "Fast draining, structured over a dynamic base.",
          "Non-abrasive and durable polyethylene yarn — no skin burn.",
          "In-fill of TPE (green, natural rubber) — no smell and less heat absorption.",
          "Medium pile height — tall enough to absorb shock yet short enough to let the ball race to the boundary.",
          "Infill allows players to slide and dive without risk of injury.",
        ],
      },
    ],
  },

  football: {
    category: "sports",
    title: "Football Turf",
    image: "/assets/img/about/football.jpg",
    intro: [
      "Football — the world's most popular sport, also called 'The Beautiful Game' — is now played on the most advanced artificial-grass surface, recognized by FIFA. The real revolution was transforming dust bowls and mud pits, where generations of children learnt their football skills, into high-performance, heavily used 'Theatres of Dreams'.",
      "Equinox Sports Infra, in association with HybridTurf, has delivered world-class artificial football turf surfaces all around India. We have been a leading football turf manufacturer for both indoor and outdoor sports infrastructure facilities in the country. Our dedicated team of experts is always there for your service and queries.",
    ],
    sections: [
      {
        heading: "Why Us?",
        list: [
          "Concrete base with slope for proper water drainage.",
          "Saved water can be used via water harvesting.",
          "Sand- and rubber-filled artificial turf approved by FIFA.",
          "Crushed-stone base.",
          "Futsal goal post including net.",
        ],
      },
      {
        heading: "Chain Link Fencing",
        list: [
          "Braided nets for longevity on all sides, including the top of the field, so the ball stays in play at all times.",
        ],
      },
      {
        heading: "LED Lights",
        list: [
          "At least 8 lights per court with all fixtures, wires and MCBs etc.",
        ],
      },
    ],
  },

  gym: {
    category: "sports",
    title: "Gym Flooring Turf",
    image: "/assets/img/about/gym.jpg",
    intro: [
      "Equinox Sports Infra provides a choice of optimum HybridTurf synthetic-grass surfaces for those high-action gym areas for resistance training, in a burst of energetic colours.",
      "Our all-weather gym-floor turf ensures no sweat absorbs into the surface, and at the same time our product is certified to indoor fire-rating standards. We manufacture premium-quality synthetic turf and rubber tiles for gym flooring.",
    ],
    sections: [
      {
        heading: "Why Us?",
        list: [
          "Optimal balance of grip and slide (coefficient of friction between 0.4–0.7).",
          "Easy to clean without periodical polishing.",
          "Less energy consumption, less maintenance cost.",
          "Optimal specular gloss.",
          "Solvent- and heavy-metal-free products.",
          "100% recyclable.",
          "Contains pre-consumer recycled materials.",
          "Light weight and flexible; available in rolls.",
          "Easy and quick installation.",
          "2m-wide rolls — less welding and fewer joints.",
        ],
      },
    ],
  },

  hockey: {
    category: "sports",
    title: "Hockey Turf",
    image: "/assets/img/about/hockey.jpg",
    intro: [
      "All internationals, every top club match and almost every other game of hockey is now played on artificial-grass hockey turf. Innovations in synthetic hockey fields have developed fast pitches, true ball roll, and increased player safety and comfort — resulting in a faster, more exciting and skilful game.",
    ],
    sections: [
      {
        heading: "Why Us?",
        list: [
          "The preferred surface for the Youth Olympic Games, Buenos Aires, Argentina, 2018.",
          "The preferred surface for the Commonwealth Games, Birmingham, U.K., 2022.",
          "Official supplier to Hockey Australia.",
          "FIH Preferred Supplier.",
          "Play possible on our WETT surface even when dry — preserving the most precious of natural resources: water.",
        ],
      },
      {
        heading: "Filled — HybridTurf sand-filled hockey fields",
        list: [
          "Hockey surfaces that are long-lasting and offer excellent ball speed and foot traction.",
          "Multisport — ideal not only for hockey but also other sports.",
        ],
      },
      {
        heading: "Unfilled — HybridTurf WETT turf hockey fields",
        list: [
          "Regularly used for international matches throughout the world.",
          "Where players demand water turfs, the amount of water required is significantly reduced compared with other hockey turfs.",
          "Engineered to provide a playing surface that lasts longer and plays better.",
        ],
      },
      {
        heading: "Dressed — HybridTurf sand-dressed hockey turfs",
        list: [
          "Densely tufted, soft polyethylene curled yarns part-filled with selected round sand.",
          "Laid over a rubber pad, all FIH 'Global' playing standards are achieved and the need for water is eliminated.",
          "The special fibres play like a 'wet field', whilst the sand layer supports the base of the fibres.",
          "For the player the game is enhanced; for the owner, money is saved.",
        ],
      },
    ],
  },

  tennis: {
    category: "sports",
    title: "Tennis Court",
    image: "/assets/img/about/tennis.jpg",
    intro: [
      "ITF-certified HybridTurf is simply a more professional playing surface, designed in consultation with the best players and engineered to keep them at the top of their game. Not only that, we have a range of speeds to suit every playing need. Be it playing comfort or speed, long rallies or serve-and-volley — HybridTurf is the ace when it comes to tennis.",
    ],
    sections: [
      {
        heading: "Why Us?",
        list: [
          "Coefficient of friction between 0.4–0.7.",
          "Quick and easy direction change.",
          "Light weight (rocket start).",
          "Easy to roll in and out.",
          "Suitable for temporary use.",
          "Optimal specular gloss.",
          "Solvent, heavy-metal and phthalate-free formulation; low VOC.",
          "Environmentally sound solution.",
          "100% recyclable.",
          "Contains pre-consumer recycled materials.",
        ],
      },
    ],
  },

  volleyball: {
    category: "sports",
    title: "Volleyball Court",
    image: "/assets/img/about/vollayball.jpg",
    intro: [
      "Equinox Sports Infra's volleyball surfaces are suited for players of all abilities and ages as well as for competitions. Volleyball is extremely popular in both clubs and residences, and our surfaces provide the consistency and performance that players require. We have a range of products for volleyball suited for every application — indoor or outdoor, amateur or professional — without compromising on player comfort.",
    ],
    sections: [
      {
        heading: "Synthetic Turf — Benefits",
        list: [
          "Versatile sports surfaces enabling players to unleash their potential to the maximum.",
          "Synthetic sports fields using HybridTurf surface that replicates the playing performance and feel of natural turf.",
          "Creates attractive, all-weather, low-maintenance outdoor areas where students can meet, relax or study.",
          "The drawbacks of natural turf are eliminated — cancelled matches due to waterlogged pitches are a thing of the past.",
        ],
      },
      {
        heading: "Acrylic Surfaces — Benefits",
        list: [
          "Premium quality, pre-blended pure acrylic finish.",
          "Excellent abrasion resistance and uniform texture.",
          "Manufactured from premium 100% acrylic resins.",
          "Light-stable oxide pigments and selective reinforcing fillers assuring maximum UV resistance.",
          "Economical and wide range of colours.",
        ],
      },
    ],
  },

  "other-sports": {
    category: "sports",
    title: "Other Sports",
    image: "/assets/img/about/other.jpg",
    intro: [
      "Our turfs are suitable for all weather conditions. Be it hot, sunny and dry weather, heavy rains or freezing cold, our high-quality floorings stay fun to practise and play on. From a stadium to your gym at home, we provide customized excellent flooring. These high-quality, non-toxic hybrid turfs are suitable and safe for children and pets as well.",
    ],
    sections: [
      {
        heading: "We Cover",
        columns: true,
        list: [
          "Tennis",
          "Squash",
          "Football",
          "Hockey",
          "Basketball",
          "Ice skating",
          "Cycling tracks",
          "Running tracks",
          "Volleyball",
          "Badminton",
          "Kabaddi",
          "Gym",
          "Children's play area",
        ],
      },
    ],
  },

  /* ---------------------------- OTHER PRODUCTS ---------------------------- */
  "chain-link-fencing": {
    category: "other-products",
    title: "Chain Link Fencing",
    image: "/assets/img/about/chain.jpg",
    intro: [
      "A chain-link fence is a type of woven fence usually made from galvanized or LLDPE-coated steel wire. The wires run vertically and are bent into a zig-zag pattern so that each 'zig' hooks with the wire immediately on one side and each 'zag' with the wire immediately on the other, forming the characteristic diamond pattern seen in this type of fence.",
    ],
    sections: [
      {
        heading: "Why Us?",
        list: [
          "Cost effectiveness",
          "Provision of security",
          "Durability",
          "A variety of design options",
          "Ease of maintenance and repair",
        ],
      },
    ],
  },

  "led-lighting": {
    category: "other-products",
    title: "LED Lighting",
    image: "/assets/img/about/led.jpg",
    intro: [
      "For sports to take place there need to be dedicated venues — stadiums — that accommodate participants and fans. Games can take place at any time of day, and lighting plays an important part in making sport a success. Stadium LED lighting is the incorporation of artificial lighting to help mimic natural daylight and ensure the continuity of sport.",
    ],
    sections: [
      {
        heading: "Why Us?",
        list: [
          "Save power and are cheaper to operate",
          "Last longer",
          "Lighting control",
          "Versatility of use",
          "Easier to find in stock",
        ],
      },
    ],
  },

  structure: {
    category: "other-products",
    title: "Structure Planning and Design",
    image: "/assets/img/about/soil.jpg",
    intro: [
      "We specialize in structural planning and design. We work directly with our clients to design and plan by providing 3D structural models with connections for General Arrangement Drawings and Erection Drawings. With our Structural BOQ services, you can efficiently plan your finances as the construction work progresses.",
    ],
    sections: [
      {
        heading: "Why Us?",
        list: ["Low cost", "High performance", "Compact size", "Wideband"],
      },
    ],
  },

  /* ------------------------------- SERVICES ------------------------------- */
  "facility-consultancy-design": {
    category: "services",
    title: "Facility Consultancy and Design",
    image: "/assets/img/about/facility.jpg",
    intro: [
      "Our operations-process and facility-design services include concept development, comparative analysis, detailed design and planning, and implementation management. We provide these services for existing and new facilities, ranging from partial to full turnkey solutions. Solutions can range from manual improvements through to fully automated systems designed to meet the client's budget, change-management capabilities and expectations. As an independent consulting firm we provide unbiased equipment recommendations and strive to determine the optimal mix of technology for every project.",
    ],
    sections: [
      {
        heading: "Why Us?",
        list: [
          "Project management services",
          "Contract management & client representation",
          "Equipment installation management & oversight",
          "System test-plan development",
          "System testing management",
          "Training development planning & management",
          "Ownership transition management",
        ],
      },
    ],
  },

  "steam-and-sauna": {
    category: "services",
    title: "Steam and Sauna",
    image: "/assets/img/about/facility.jpg",
    placeholder: true,
    intro: [
      "Complete design, supply and installation of steam rooms and saunas for clubs, gyms, spas, residences and sports facilities. We build relaxing, hygienic and energy-efficient wellness spaces that complement your sporting infrastructure and help members recover and unwind.",
    ],
    sections: [
      {
        heading: "Why Us?",
        list: [
          "Turnkey steam and sauna room design and installation",
          "Energy-efficient heaters and generators",
          "Durable, moisture-resistant finishes",
          "Custom sizing for clubs, gyms and homes",
          "Reliable after-sales service and maintenance",
        ],
      },
    ],
  },

  "turnkey-projects": {
    category: "services",
    title: "Turnkey Projects",
    image: "/assets/img/about/turnkey.jpg",
    intro: [
      "Our company is efficient in undertaking and delivering turnkey projects within the specified time frame. We work closely with our clients to understand their exact requirements and offer services accordingly. Our services include initial appraisals, obtaining statutory approvals, project mobilization, and monitoring the site, the execution process, contractors and suppliers.",
    ],
    sections: [
      {
        heading: "Why Us?",
        list: ["Reduced total time", "Lower cost"],
      },
    ],
  },
};

// Human-readable label for each category (used in breadcrumbs / banners).
export const categoryLabels = {
  products: "Products",
  sports: "Sports",
  "other-products": "Other Products",
  services: "Services",
};

// Convenience: array form for listing / routing.
export const pageList = Object.entries(pages).map(([slug, data]) => ({ slug, ...data }));
