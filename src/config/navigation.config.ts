export interface NavLink {
  label: string;
  path: string;
  children?: NavLink[];
}

export const mainNavigation: NavLink[] = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "About Us",
    path: "/about",
  },
  {
    label: "Services",
    path: "/services",
  },
  {
    label: "Industries",
    path: "/industries",
  },
  {
    label: "Sustainability",
    path: "/sustainability",
  },
  {
    label: "Careers",
    path: "/careers",
  },
  {
    label: "Contact",
    path: "/contact",
  },
];

export const footerNavigation = {
  company: [
    { label: "About Us", path: "/about" },
    { label: "Our Team", path: "/about#team" },
    { label: "Careers", path: "/careers" },
    { label: "News", path: "/news" },
  ],

  solutions: [
    { label: "Plastic Molding", path: "/services" },
    { label: "Injection Molding", path: "/services" },
    { label: "Assembly Services", path: "/services" },
    { label: "Quality Control", path: "/services" },
  ],

  resources: [
    { label: "Case Studies", path: "/case-studies" },
    { label: "Downloads", path: "/downloads" },
    { label: "Blog", path: "/blog" },
    { label: "FAQs", path: "/faqs" },
  ],

  legal: [
    { label: "Privacy Policy", path: "/privacy" },
    { label: "Terms of Service", path: "/terms" },
    { label: "Sitemap", path: "/sitemap" },
  ],
};
