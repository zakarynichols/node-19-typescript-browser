import { appendToBody } from "./console.mjs";

const el = document.createElement("div");
el.textContent = "Some generic text content to display in the browser.";
appendToBody(el);
