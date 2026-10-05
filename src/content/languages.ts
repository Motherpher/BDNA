export type Language = 'en' | 'sv'

export const languageLabels: Record<Language, string> = {
  en: 'English',
  sv: 'Svenska',
}

export const publicOverview = {
  en: {
    descriptor: 'Possibility Infrastructure for Afro-Sweden',
    statement: 'Black DNA is not a project — it’s infrastructure.',
    body: 'We build and steward an infrastructure designed to expand life chances for the afrodiasporic communities in Sweden. BDNA builds on what exists while also being shaped by a clear analysis of what is still missing.',
    foundation: 'The Foundation protects the mission — and keeps us accountable.',
    fund: 'The Fund ensures capital flows where it matters.',
    assetKeys: 'The Asset Keys are real tools — not symbols — that unlock opportunities in everyday life.',
    fonio: 'Fonio is where small, resilient things are planted and grow — investing in initiatives.',
  },
  sv: {
    descriptor: 'Möjliggörande infrastruktur för afrosvenskar',
    statement: 'BDNA är inte ett projekt – det är infrastruktur.',
    body: 'Vi bygger och förvaltar en struktur som är utformad för att vidga livschanser för personer inom den afrikanska diasporan i Sverige. BDNA är inte tänkt att ersätta det som redan finns, utan att bygga vidare på det samtidigt som strukturen formas utifrån en analys av vad som fortfarande saknas.',
    foundation: 'Stiftelsen skyddar uppdraget – och håller samman helheten.',
    fund: 'Fonden ser till att kapital flödar dit det gör verklig skillnad.',
    assetKeys: 'Asset Keys är konkreta verktyg – inte symboler – som öppnar möjligheter i vardagen.',
    fonio: 'Fonio är platsen där mindre, motståndskraftiga initiativ kan planteras och växa.',
  },
} as const

export const uiCopy = {
  en: {
    publicOverview: 'Public overview',
    sourceStatus: 'Source-controlled language layer',
    translationNote: 'The English Blackprint remains the conceptual authority. Swedish deep definitions stay controlled until an approved translation decision exists.',
    currentWork: 'Current work',
    glossary: 'Glossary',
    source: 'Source',
  },
  sv: {
    publicOverview: 'Publik översikt',
    sourceStatus: 'Källstyrt språklager',
    translationNote: 'Den engelska Blackprint-versionen är fortsatt begreppslig huvudkälla. Djupare svenska begreppsöversättningar hålls kontrollerade tills ett godkänt översättningsbeslut finns.',
    currentWork: 'Pågående arbete',
    glossary: 'Begrepp',
    source: 'Källa',
  },
} as const
