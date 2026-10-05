import type { Language } from '../content/languages'
import { languageLabels } from '../content/languages'

type Props = {
  language: Language
  onChange: (language: Language) => void
}

export function LanguageSwitcher({ language, onChange }: Props) {
  return (
    <div className="language-switcher" aria-label="Language">
      {(Object.keys(languageLabels) as Language[]).map((code) => (
        <button
          key={code}
          type="button"
          className={language === code ? 'is-active' : ''}
          aria-pressed={language === code}
          onClick={() => onChange(code)}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  )
}
