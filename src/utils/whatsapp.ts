import { siteConfig } from '../siteConfig.ts';

export type EnquiryDetails = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  projectType: string;
  locality: string;
  message: string;
};

export const whatsappGreetingUrl = `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
  `Hi ${siteConfig.name}, I would like to discuss an interior design project.`,
)}`;

export function buildWhatsAppUrl(enquiry: EnquiryDetails): string {
  const lines = [
    `Hi ${siteConfig.name}, I would like to discuss an interior design project.`,
    `Name: ${enquiry.firstName.trim()} ${enquiry.lastName.trim()}`.trim(),
    `Email: ${enquiry.email.trim()}`,
    `Phone: ${enquiry.phone.trim()}`,
    `Project type: ${enquiry.projectType.trim()}`,
    `Area: ${enquiry.locality.trim()}`,
    `Project details: ${enquiry.message.trim()}`,
  ];

  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(lines.join('\n'))}`;
}
