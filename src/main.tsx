import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router } from "react-router";
import { I18nextProvider } from "react-i18next";
import i18n from "./utils/i18n.ts";
import AppRouter from "./routes/AppRouter.tsx";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <I18nextProvider i18n={i18n}>
        <Router>
          <AppRouter />
        </Router>
      </I18nextProvider>
    </QueryClientProvider>
  </StrictMode>
);
