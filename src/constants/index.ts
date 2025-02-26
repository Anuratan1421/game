import {  FaTwitter, FaYoutube ,FaInstagram } from "react-icons/fa";

export const NAV_ITEMS = [
  { label: "TRAILER", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Media", href: "#nexus" },
  { label: "Riddle", href: "#story" },
  { label: "Connect", href: "#contact" },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/sanidhyy/game-website",
} as const;

export const SOCIAL_LINKS = [
  {
    href: "https://www.instagram.com/gandharva_viit?utm_source=qr&igsh=dm45MWIzNGMwcGNr",
    icon: FaInstagram,
  },
  {
    href: "mobile.twitter.com/GandharvaVIIT",
    icon: FaTwitter,
  },
  {
    href: "https://youtube.com",
    icon: FaYoutube,
  },
  // {
  //   href: "https://twitch.com",
  //   icon: FaTwitch,
  // },
] as const;
