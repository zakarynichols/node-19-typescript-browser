import { appendToBody } from "./console.mjs";

const el = document.createElement("div");
el.textContent = "did i update again?";
appendToBody(el);
