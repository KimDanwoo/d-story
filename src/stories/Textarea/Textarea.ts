import { html } from 'lit'
import { styleMap } from 'lit/directives/style-map.js'
import './textarea.css'

export interface TextareaProps {
  primary?: boolean
  backgroundColor?: string
  size?: 'small' | 'medium' | 'large'
  placeholder: string
  value: string
  onChange?: () => void
}
export const Textarea = ({
  primary,
  backgroundColor,
  size,
  placeholder,
  value,
  onChange,
}: TextareaProps) => {
  const mode = primary
    ? 'storybook-textarea--primary'
    : 'storybook-textarea--secondary'

  return html`
    <textarea
      class=${[
        'storybook-textarea',
        `storybook-textarea--${size || 'medium'}`,
        mode,
      ].join(' ')}
      style=${styleMap({ backgroundColor })}
      @input=${onChange}
      placeholder=${placeholder}
    >
${value}</textarea
    >
  `
}
