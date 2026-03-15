import { Button } from "../ui/button"
import { RiAddFill } from "@remixicon/react"
import { useNotesContext } from "@/hooks/useNotesContext"

type NotesHeaderProps = {
  theme: string
}

export const NotestHeader = ({ theme }: NotesHeaderProps) => {
  const { setIsAddDialogOpen } = useNotesContext()

  return (
    <div className="flex h-10 w-full items-center justify-center p-1">
      <Button
        className={`h-8 bg-transparent font-medium transition-colors duration-300 hover:cursor-pointer hover:bg-gray-600 ${theme === "dark" ? "text-gray-400 hover:bg-gray-500 hover:text-white" : "text-gray-600 hover:bg-amber-100 hover:text-slate-900"} `}
        onClick={() => setIsAddDialogOpen(true)}
      >
        <RiAddFill className="size-4" />
        Add Note
      </Button>
    </div>
  )
}
