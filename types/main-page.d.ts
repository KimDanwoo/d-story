import { LitElement } from 'lit';
export declare class MainPage extends LitElement {
    checked: boolean;
    name: string;
    changeName(event: Event): void;
    render(): import("lit-html").TemplateResult<1>;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'main-page': MainPage;
    }
}
