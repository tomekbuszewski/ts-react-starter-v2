import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App.tsx";

import "./style.css";

async function enableMocks() {
  if (import.meta.env.VITE_MOCKS === "true") {
    console.log("Mocks enabled");
    const { worker } = await import("../mocks/browser");
    return worker.start();
  }

  return;
}

enableMocks()
  .then(() => {
    createRoot(document.getElementById("root")!).render(
      <StrictMode>
        <App />
      </StrictMode>,
    );
  })
  .catch((error) => {
    console.error(error);
  });
