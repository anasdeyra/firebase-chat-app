import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { AuthProvider } from "./context/auth.tsx";
import { AsideProvider } from "./context/aside.tsx";
import { ScreenProvider } from "./context/screen.tsx";

const Providers = ({ children }: { children: React.ReactNode }) => (
  <AuthProvider>
    <ScreenProvider>
      <AsideProvider>{children}</AsideProvider>
    </ScreenProvider>
  </AuthProvider>
);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>
);
