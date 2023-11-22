import { html } from 'lit'
import './input.css'

export interface InputProps {
  type?: 'text' | 'password' | 'email' | 'number' | 'search' | 'tel' | 'url'
  size?: 'small' | 'medium' | 'large'
  placeholder: string
  onChange?: () => void
}
export const Input = ({
  type = 'text',
  size = 'medium',
  placeholder,
  onChange,
}: InputProps) => {
  return html`
    <input
      type=${type}
      class=${['storybook-input', `storybook-input--${size}`].join(' ')}
      placeholder=${placeholder}
      @input=${onChange}
    >
    </input>
  `
}
