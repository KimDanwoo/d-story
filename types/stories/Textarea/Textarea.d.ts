import './textarea.css';
export interface TextareaProps {
    primary?: boolean;
    backgroundColor?: string;
    size?: 'small' | 'medium' | 'large';
    placeholder: string;
    value: string;
    onChange?: () => void;
}
export declare const Textarea: ({ primary, backgroundColor, size, placeholder, value, onChange, }: TextareaProps) => import("lit-html").TemplateResult<1>;
