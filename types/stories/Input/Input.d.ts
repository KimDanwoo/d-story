import './input.css';
export interface InputProps {
    type?: 'text' | 'password' | 'email' | 'number' | 'search' | 'tel' | 'url';
    size?: 'small' | 'medium' | 'large';
    placeholder: string;
    value: string;
    onChange?: () => void;
}
export declare const Input: ({ type, size, placeholder, value, onChange, }: InputProps) => import("lit-html").TemplateResult<1>;
