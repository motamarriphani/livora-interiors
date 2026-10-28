const whatsappNumber = '918886767991';

export const siteConfig = {
  name: 'Livora Interiors',
  canonicalUrl: 'https://thelivorainteriors.com/',
  phones: [
    { display: '+91 8886767991', link: `+${whatsappNumber}`, label: 'Call / WhatsApp' },
    { display: '+91 9063602930', link: '+919063602930', label: 'Alternate Number' },
  ],
  whatsappNumber,
  whatsappUrl: `https://wa.me/${whatsappNumber}`,
  addressLines: ['Kukatpally, Hyderabad,', 'Telangana'],
  mapsUrl: 'https://maps.google.com/?q=Kukatpally+Hyderabad+Telangana',
  hours: 'Mon–Sat, 10am – 7pm',
  serviceAreas: ['Telangana', 'Andhra Pradesh'],
  // Social profile URLs; icons only render for the ones that are set.
  social: {
    instagram: 'https://www.instagram.com/the_livorainteriors/',
  },
} as const;
