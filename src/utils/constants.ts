// Constants for the application
export const APP_NAME = "Kalikem ";
export const APP_VERSION = "1.0.0";

// API endpoints (use Vite env variables via import.meta.env)
export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// Contact & social constants (read from .env via Vite)
export const WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER ;
export const CONTACT_PHONE = import.meta.env.VITE_CONTACT_PHONE ;
export const CONTACT_EMAIL = import.meta.env.VITE_CONTACT_EMAIL ;
export const CONTACT_ADDRESS = import.meta.env.VITE_ADDRESS || "A-162, GR Garden 2, Chipiyana Buzurg, Ghaziabad – 201009";
export const SOCIAL_FACEBOOK = import.meta.env.VITE_FACEBOOK_URL || "";
export const SOCIAL_INSTAGRAM = import.meta.env.VITE_INSTAGRAM_URL || "";

// Other constants
export const DEFAULT_TIMEOUT = 5000;
