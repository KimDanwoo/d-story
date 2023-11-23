import { LitElement } from 'lit';
type ToDoItem = {
    text: string;
    completed: boolean;
};
export declare class ToDoList extends LitElement {
    private listItems;
    hideCompleted: boolean;
    render(): import("lit-html").TemplateResult<1>;
    toggleCompleted(item: ToDoItem): void;
    input: HTMLInputElement;
    addToDo(): void;
    static styles: import("lit").CSSResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'todo-list': ToDoList;
    }
}
export {};
