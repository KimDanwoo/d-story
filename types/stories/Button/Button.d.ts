import './button.css';
export interface ButtonProps {
    primary?: boolean;
    backgroundColor?: string;
    size?: 'small' | 'medium' | 'large';
    label: string;
    onClick?: () => void;
}
/**
 * Primary UI component for user interaction
 */
export declare const Button: ({ primary, backgroundColor, size, label, onClick, }: ButtonProps) => import("lit-html").TemplateResult<1>;
