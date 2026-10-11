export const COUNTRY_FLAGS: Record<string, string> = {
  India: '🇮🇳',
  Australia: '🇦🇺',
  England: '🏴󠁧󠁢󠁥󠁮󠁧󠁿',
  'South Africa': '🇿🇦',
  'New Zealand': '🇳🇿',
  'West Indies': '🌴',
  Afghanistan: '🇦🇫',
  'Sri Lanka': '🇱🇰',
  Bangladesh: '🇧🇩',
  Ireland: '🇮🇪',
  Zimbabwe: '🇿🇼',
  Netherlands: '🇳🇱',
  USA: '🇺🇸',
  Scotland: '🏴󠁧󠁢󠁳󠁣󠁴󠁿',
  Namibia: '🇳🇦',
  Canada: '🇨🇦',
  Oman: '🇴🇲',
  Nepal: '🇳🇵',
  Italy: '🇮🇹',
  UAE: '🇦🇪',
};

export function getCountryFlag(country?: string | null): string {
  if (!country) return '🏏';
  return COUNTRY_FLAGS[country] || '🏏';
}
