import App from "@/App.jsx";
import "@/assets/global.css";
import "@/utils/firebase";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router";

const $root = document.getElementById("🪄");
if ($root) {
  const root = createRoot($root);
  root.render(
    <StrictMode>
      <Router>
        <App />
      </Router>
    </StrictMode>,
  );
}
