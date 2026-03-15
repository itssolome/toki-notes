import { StrictMode } from "react"
import { createRoot } from "react-dom/client"

import "./index.css"
import App from "./App.tsx"
import { ThemeProvider } from "@/components/theme-provider.tsx"
import { NotesProvider } from "./context/NotesContext.tsx"

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark">
      <NotesProvider>
        <App />
      </NotesProvider>
    </ThemeProvider>
  </StrictMode>
)
