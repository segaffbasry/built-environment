// All copy is taken verbatim from https://www.thebuiltenvironment.co.uk/
// (homepage body, header image, footer and the Ventilation Servicing flyer).
// Do not rewrite — edit only if the source site changes.

const ORIGIN = "https://www.thebuiltenvironment.co.uk";

export const contact = {
  phone: "01304 809880",
  phoneHref: "tel:01304809880",
  email: "info@thebuiltenvironment.co.uk",
  emailHref: "mailto:info@thebuiltenvironment.co.uk",
  serviceEmail: "service@mvhr.me",
  serviceEmailHref: "mailto:service@mvhr.me",
  web: "thebuiltenvironment.co.uk",
  address: [
    "15 The Glenmore Centre",
    "Honeywood Parkway",
    "Whitfield, Dover",
    "Kent",
    "CT16 3FH",
  ],
  mapHref:
    "https://maps.google.com/maps?z=16&q=15%2Bthe%2Bglenmore%2Bcentre%2Bhoneywood%2Bparkway%2Bwhitfield%2C%2Bdover%2Bkent%2Bct16%2B3fh",
  hours: ["Monday - Friday", "8:30am - 5:30pm"],
};

export const nav = [
  { label: "MVHR", href: "#mvhr" },
  { label: "Project Services", href: "#services" },
  { label: "Service Enquiry", href: "#servicing" },
  { label: "Enquiries", href: "#contact" },
];

export const hero = {
  title: "Welcome to Built Environment Technology Ltd",
  intro:
    "We are independent suppliers and specifiers offering a variety of Mechanical Ventilation with Heat Recovery systems (MVHR) and Central Extract Systems (MEV).",
};

export const services = {
  lead: "We understand that every project is different, which is why we offer a service designed around your project’s specific requirements, affording on-site flexibility with options ranging from:",
  options: [
    "Detailed MVHR Specification;",
    "CAD Drawings;",
    "Supply & Site Support;",
    "Heat Recovery System Design, Installation & Commissioning;",
    "Full Project Managed Installation Service;",
    "Commissioning & Certification Only;",
    "Supply Only.",
  ],
};

export const support = {
  ongoing:
    "We also offer ongoing technical support including yearly maintenance, servicing packages, and supply of spare parts.",
  compliance:
    "All the home ventilation systems used by us comply with current Building Regulations Part F (2021) and in Scotland Standard 3.14 (as required).",
};

export const servicing = {
  title: ["Ventilation", "Servicing"],
  items: [
    "Mechanical Ventilation with Heat Recovery (MVHR) Servicing",
    "Mechanical Extract Ventilation (MEV) Servicing",
    "MVHR & MEV Repairs",
    "Unit Replacement",
    "Fault Finding",
    "Re-commissioning",
  ],
  cta: "Contact us today to schedule an appointment.",
  accreditation: "NICEIC Domestic Installer",
  partners: "Service Partners",
};

export const mvhr = {
  title: "Mechanical Ventilation & Heat Recovery Units (MVHR)",
  benefits: [
    "MVHR units are energy efficient & operate very quietly, continuously extracting polluted air from kitchens, bathrooms, WCs & utility rooms;",
    "The constant change of air removes indoor pollution without draughts;",
    "Promoting air change helps alleviate problems such as damp, black mould & condensation problems in houses & flats;",
    "Negating the need for trickle ventilation, noise pollution & heat loss is greatly reduced;",
    "A variety of control options (including condensation control);",
    "Ease of installation.",
  ],
  exchange:
    "The polluted air is passed through a heat exchanger with the ability to recover as much as 95% of heat from the ventilated rooms. The recovered heat is then used to pre-warm fresh incoming air and direct it to other living areas.",
  siting:
    "The MVHR Units are available with a variety of control options and can be sited in the roof space; above a cooker-hood; at high level in a cupboard or alternatively wall mounted. There is no mixing of air flows, only the transfer of heat.",
  addOns: [
    {
      name: "Inline Duct Heaters",
      text: "are available if required to give natural air heating during colder weather.",
      prefix: "",
    },
    {
      name: "Summer By-pass facility",
      text: "is also available on some models to allow external fresh air to give natural home cooling in the warmer months.",
      prefix: "A",
    },
  ],
};

export const siteMap = [
  { label: "Home", href: `${ORIGIN}/` },
  { label: "What is MVHR", href: `${ORIGIN}/what-is-mvhr/` },
  { label: "Advantages of MVHR", href: `${ORIGIN}/advantages-of-mvhr/` },
  { label: "System Add-ons", href: `${ORIGIN}/system-add-ons/` },
  { label: "Specifier’s Guide", href: `${ORIGIN}/specifiers-guide/` },
  { label: "Project Services", href: `${ORIGIN}/project-services/` },
  { label: "Enquiries", href: `${ORIGIN}/enquiries/` },
  { label: "Service Enquiry", href: `${ORIGIN}/service-enquiry/` },
  { label: "Filter & Parts Shop", href: `${ORIGIN}/filter-shop/` },
  { label: "ISO Certified", href: `${ORIGIN}/the-importance-of-our-iso-90012015-and-iso-450012018-certification/` },
  { label: "My account", href: `${ORIGIN}/my-account/` },
  { label: "Cart", href: `${ORIGIN}/filter-shop/cart/` },
];

export const legal = {
  copyright: "© Built Environment Technology 2026",
  terms: { label: "Terms & Conditions", href: `${ORIGIN}/terms-conditions/` },
  shop: { label: "Filter & Parts Shop", href: `${ORIGIN}/filter-shop/` },
  serviceEnquiry: { label: "Service Enquiry", href: `${ORIGIN}/service-enquiry/` },
};
