import { metadataConfig } from "./metadata";

export interface MiscellaneousSection {
  title: string;
  content?: string[];
  listItems?: string[];
  contactItems?: ContactItem[];
  footer?: Footer;
}

export interface ContactItem {
  type: "email" | "discord";
  text: string;
  link: string;
  label: string;
}

export interface Footer {
  text: string;
  link?: string;
  linkText?: string;
  suffix?: string;
}

export const aboutSections: MiscellaneousSection[] = [
  {
    title: "Contact & Support",
    content: ["For support or inquiries, you can reach out to us via:"],
    contactItems: [
      {
        type: "email",
        text: "Email:",
        link: "mailto:michael.business.lb@proton.me",
        label: "michael.business.lb@proton.me",
      },
    ],
  },
];

export const termsSections: MiscellaneousSection[] = [];
