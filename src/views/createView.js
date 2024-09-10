import { html, render } from "@lit/lit-html.js";

const contentDiv = document.getElementById("content");

const temp = () => html`
    `;

export function showCreateView() {
    render(temp(), contentDiv)
}