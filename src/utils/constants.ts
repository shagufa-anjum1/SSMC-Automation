export const BREAKPOINTS = {
  mobile: 640,
  tablet: 768,
  desktop: 1024,
  wide: 1280,
  ultrawide: 1536,
} as const;

export const ANIMATION_DURATION = {
  fast: 150,
  normal: 250,
  slow: 350,
} as const;

export const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  SERVICES: "/services",
  INDUSTRIES: "/industries",
  ENGINEERING: "/engineering",
  SUSTAINABILITY: "/sustainability",
  CAREERS: "/careers",
  CONTACT: "/contact",
} as const;

export const STORAGE_KEYS = {
  THEME: "ssmc-theme",
  LANGUAGE: "ssmc-language",
  USER_PREFERENCES: "ssmc-user-preferences",
} as const;
