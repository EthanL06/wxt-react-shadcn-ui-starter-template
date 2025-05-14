import {
  createShadowRootUi,
  defineContentScript,
  type ContentScriptContext,
} from "#imports";
import React from "react";
import ReactDOM from "react-dom/client";
import "~/assets/tailwind.css";
import App from "./App";

export default defineContentScript({
  matches: ["*://*/*"],
  cssInjectionMode: "ui",

  async main(ctx) {
    const ui = await createUi(ctx);
    ui.mount();
  },
});

function createUi(ctx: ContentScriptContext) {
  return createShadowRootUi(ctx, {
    name: "tailwind-shadow-root-example",
    position: "inline",
    anchor: "body",
    append: "first",
    onMount: (uiContainer) => {
      ReactDOM.createRoot(uiContainer).render(
        <React.StrictMode>
          <App />
        </React.StrictMode>
      );
    },
  });
}
