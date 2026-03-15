import { useContext } from "react"
import { NotesContext } from "@/context/note-context"

export function useNotesContext() {
  const context = useContext(NotesContext)
  if (!context) {
    throw new Error("useNotesContext must be used within NotesProvider")
  }
  return context
}