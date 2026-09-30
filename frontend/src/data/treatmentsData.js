export const treatmentsData = [
  {
    id: "general-dentistry",
    slug: "general-dentistry",
    title: "General Dentistry",
    shortDescription: "Comprehensive diagnostic checkups, composite fillings, root canals, and preventative oral hygiene.",
    category: "Preventative & Restorative",
    iconName: "Stethoscope",
    highlights: ["Single-visit digital root canal", "Laser teeth cleaning", "Tooth-colored restorations"],
    suitableFor: "Patients with tooth decay, toothache, gum bleeding, or seeking routine bi-annual examinations.",
    processSteps: [
      { step: "01", title: "Digital Diagnostics", text: "Low-radiation digital radiography and intraoral 3D camera mapping." },
      { step: "02", title: "Gentle Cleaning & Preparation", text: "Ultrasonic scaling and micro-abrasion of decayed surfaces." },
      { step: "03", title: "Precision Restoration", text: "Biocompatible nano-hybrid composite filling or microscopic endodontics." },
      { step: "04", title: "Preventative Seal", text: "Fluoride remineralization and post-procedure occlusion check." }
    ],
    faqs: [
      { q: "Is a root canal painful at Crown Dental?", a: "No. With our computer-assisted computerized anesthesia (The Wand) and rotary endodontics, more than 98% of patients report zero pain during the procedure." },
      { q: "How often should I get a dental cleaning?", a: "We recommend professional ultrasonic prophylaxis every 6 months to prevent periodontal disease and tartar accumulation." }
    ]
  },
  {
    id: "dental-implants",
    slug: "dental-implants",
    title: "Dental Implants",
    shortDescription: "Permanent, bio-integrated titanium & zirconia tooth replacements with computer-guided surgical precision.",
    category: "Surgical Prosthodontics",
    iconName: "Sparkles",
    highlights: ["Guided flapless keyhole surgery", "Same-day immediate load teeth", "Lifetime implant warranty"],
    suitableFor: "Individuals with missing single teeth, multiple missing teeth, or those wearing loose dentures.",
    processSteps: [
      { step: "01", title: "3D CBCT Bone Analysis", text: "Volumetric bone density assessment and virtual implant 3D simulation." },
      { step: "02", title: "Surgical Guide Fabrication", text: "3D-printed stereolithographic stent for sub-millimeter precision." },
      { step: "03", title: "Implant Fixture Placement", text: "Titanium or zirconia screw anchored in the jawbone under painless local anesthesia." },
      { step: "04", title: "Crown Integration", text: "Custom CAD/CAM zirconia crown screwed or cemented onto the abutment." }
    ],
    faqs: [
      { q: "How long do dental implants last?", a: "With proper oral hygiene and regular clinical checkups, dental implants can last a lifetime." },
      { q: "Am I eligible if I have low bone density?", a: "Yes. We offer minimally invasive sinus lifts, ridge expansions, and bone grafting techniques." }
    ]
  },
  {
    id: "clear-aligners",
    slug: "clear-aligners",
    title: "Clear Aligners",
    shortDescription: "Invisible, removable orthodontic aligners for teeth straightening without metal brackets or wires.",
    category: "Modern Orthodontics",
    iconName: "Smile",
    highlights: ["Virtually invisible medical-grade polymer", "Removable for eating and brushing", "Predictable 3D digital outcome"],
    suitableFor: "Teens and adults with crowded teeth, gap teeth, overbite, or deep bite seeking discreet alignment.",
    processSteps: [
      { step: "01", title: "Intraoral 3D Optical Scan", text: "No messy impression paste. Instant 5-minute digital scan creates a 3D digital model." },
      { step: "02", title: "ClinCheck Treatment Simulation", text: "Visualize your final smile transformation on screen before aligner manufacturing." },
      { step: "03", title: "Custom Aligner Set Delivery", text: "Receive precision-engineered custom aligners changed every 7–10 days." },
      { step: "04", title: "Retention Phase", text: "Custom Vivera-style retainers to secure your permanently straight smile." }
    ],
    faqs: [
      { q: "How many hours per day do I wear aligners?", a: "Aligners must be worn 20 to 22 hours daily, removing them only for meals and brushing." },
      { q: "What is the average treatment duration?", a: "Most moderate cases resolve within 6 to 12 months, faster than traditional metal braces." }
    ]
  },
  {
    id: "cosmetic-dentistry",
    slug: "cosmetic-dentistry",
    title: "Cosmetic Dentistry & Veneers",
    shortDescription: "Custom porcelain veneers, composite bonding, and in-office LED laser smile whitening for dazzling aesthetics.",
    category: "Aesthetic Dentistry",
    iconName: "Flame",
    highlights: ["Ultra-thin ceramic porcelain veneers", "Philips Zoom LED in-chair whitening", "Digital Smile Design (DSD)"],
    suitableFor: "Patients with discolored, chipped, uneven, or worn enamel seeking a harmonious Hollywood or natural smile.",
    processSteps: [
      { step: "01", title: "Facial Proportion Analysis", text: "Digital Smile Design photography evaluating lip line, tooth reveal, and facial symmetry." },
      { step: "02", title: "Diagnostic Mock-up", text: "Test-drive your prospective new smile directly in your mouth before irreversible work." },
      { step: "03", title: "Micro-Preparation & Bonding", text: "Conservative enamel preservation followed by durable adhesive resin bonding." },
      { step: "04", title: "High-Luster Polish", text: "Micro-diamond finishing for a natural, light-reflecting translucency." }
    ],
    faqs: [
      { q: "Will veneers look artificial?", a: "Not at Crown Dental. We hand-characterize each porcelain veneer with natural mamelons and enamel gradation to perfectly complement your facial tone." },
      { q: "How long does Zoom teeth whitening take?", a: "A single 45-minute clinic session lightens teeth by up to 6–8 shades." }
    ]
  },
  {
    id: "orthodontics",
    slug: "orthodontics",
    title: "Orthodontics & Braces",
    shortDescription: "Ceramic self-ligating braces, lingual braces, and functional growth modification for children and adults.",
    category: "Corrective Orthodontics",
    iconName: "ShieldCheck",
    highlights: ["Low-friction self-ligating brackets", "Tooth-colored ceramic brackets", "Shorter appointment intervals"],
    suitableFor: "Complex bite misalignments, severe crowding, skeletal discrepancies, and jaw orthopedic correction.",
    processSteps: [
      { step: "01", title: "Cephalometric X-Ray Analysis", text: "Skeletal angle and facial profile growth mapping." },
      { step: "02", title: "Precision Bracket Bonding", text: "Direct or indirect bracket placement engineered to millimeter tolerances." },
      { step: "03", title: "Gentle Continuous Alignment", text: "Heat-activated NiTi memory wire delivering gentle physiological forces." },
      { step: "04", title: "Debonding & Polishing", text: "Bracket removal, enamel re-polishing, and bonded lingual retention." }
    ],
    faqs: [
      { q: "Are ceramic braces noticeable?", a: "Ceramic brackets match the natural shade of your teeth and are far less conspicuous than traditional metal brackets." }
    ]
  },
  {
    id: "paediatric-dentistry",
    slug: "paediatric-dentistry",
    title: "Paediatric Dentistry",
    shortDescription: "Child-friendly dental care, cavity prevention, pit & fissure sealants, and early orthodontic interception.",
    category: "Children's Dental Care",
    iconName: "HeartHandshake",
    highlights: ["Specialized kid-friendly anxiety-free suite", "Fluoride varnish therapy", "Habit breaking appliances"],
    suitableFor: "Infants, children, and teenagers from first tooth emergence up to adolescent dental development.",
    processSteps: [
      { step: "01", title: "Playful Familiarization", text: "Tell-Show-Do interactive approach in our dedicated paediatric operatory." },
      { step: "02", title: "Gentle Examination", text: "Risk assessment for milk tooth caries and jaw developmental checks." },
      { step: "03", title: "Preventative Sealants", text: "Painless coating over deep biting grooves to prevent cavity formation." },
      { step: "04", title: "Positive Reinforcement", text: "Oral hygiene education with fun home charts and brave kid certificates." }
    ],
    faqs: [
      { q: "Why treat baby teeth if they will fall out?", a: "Milk teeth preserve space for adult teeth, enable proper speech and chewing, and prevent severe infections that could damage permanent tooth buds." }
    ]
  },
  {
    id: "oral-surgery",
    slug: "oral-surgery",
    title: "Oral & Maxillofacial Surgery",
    shortDescription: "Impacted wisdom tooth removal, apical surgeries, cyst enucleations, and reconstructive trauma care.",
    category: "Surgical Dental Care",
    iconName: "Activity",
    highlights: ["3D nerve-sparing wisdom tooth extraction", "Piezosurgery ultrasonic bone cutting", "PRP / PRF healing acceleration"],
    suitableFor: "Impacted third molars, recurring pericoronitis, cysts, frenectomies, and jaw trauma.",
    processSteps: [
      { step: "01", title: "3D Nerve Proximity Scan", text: "Mapping the inferior alveolar nerve using high-resolution CBCT." },
      { step: "02", title: "Atraumatic Sectioning", text: "Piezosurgical micro-incision to preserve adjacent cortical bone." },
      { step: "03", title: "Autologous PRF Application", text: "Enriched plasma placed in the socket for rapid healing and reduced post-op swelling." },
      { step: "04", title: "Resorbable Suturing", text: "Ultra-fine sutures that dissolve naturally without tension." }
    ],
    faqs: [
      { q: "How long is recovery after wisdom tooth surgery?", a: "Most patients resume normal sedentary activities within 48 to 72 hours thanks to our minimally traumatic surgical protocols." }
    ]
  },
  {
    id: "cosmetology",
    slug: "cosmetology",
    title: "Cosmetology & Facial Aesthetics",
    shortDescription: "Advanced skin rejuvenation, medical hydrafacials, anti-aging therapies, and facial harmonizing aesthetics.",
    category: "Facial Aesthetics",
    iconName: "Sparkle",
    highlights: ["US-FDA approved laser therapies", "Medi-facials & chemical peels", "Perioral wrinkle rejuvenation"],
    suitableFor: "Patients seeking radiant skin, pigmentation correction, gummy smile reduction, and holistic facial harmony.",
    processSteps: [
      { step: "01", title: "Skin Analysis & Consultation", text: "Digital skin scanner evaluating hydration, pigmentation depth, and sebum balance." },
      { step: "02", title: "Targeted Medical Therapy", text: "Medical-grade infusion, laser resurfacing, or micro-needling RF." },
      { step: "03", title: "Calming Peptide Mask", text: "Cryogenic soothing mask infused with medical hyaluronic acid." },
      { step: "04", title: "Dermatological Regimen", text: "Personalized home maintenance protocol with sun protection guidance." }
    ],
    faqs: [
      { q: "How does facial aesthetics integrate with dental care?", a: "Your smile is framed by your lips and facial architecture. Our dual expertise aligns dental symmetry with facial proportions for cohesive natural beauty." }
    ]
  }
];
