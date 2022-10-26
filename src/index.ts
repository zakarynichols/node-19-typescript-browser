import { appendToBody } from "./console.js";
import { modulemts } from "./mod.mjs";

export { appendToBody, logger } from "./console.js";
console.log(modulemts());
const el = document.createElement("div");
el.textContent = "did i update";
appendToBody(el);
