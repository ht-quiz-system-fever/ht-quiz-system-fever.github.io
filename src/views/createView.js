import { html, render } from "../../node_modules/lit-html/lit-html.js";

const contentDiv = document.getElementById("content");

const temp = () => html`
    `;

export function showCreateView() {
    render(temp(), contentDiv)
}