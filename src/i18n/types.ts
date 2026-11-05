export type Lang = 'vi' | 'en'

/** A string available in both languages. Used throughout src/data. */
export type Localized = Record<Lang, string>

export const LANGS: Lang[] = ['vi', 'en']
