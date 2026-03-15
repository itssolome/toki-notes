import { createContext } from "react"
import { useNotes } from "@/hooks/useNotes"

type NotesContextType = ReturnType<typeof useNotes>

export const NotesContext = createContext<NotesContextType | undefined>(
  undefined
)
