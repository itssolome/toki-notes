import { NotesCard } from "./NotesCard"
import { NotestHeader } from "./NotesHeader"
import { type Note } from "@/types/note"

type NotesProps = {
  theme: string
  notes: Note[]
  onEdit: (note: Note) => void
  onDelete: (id: number) => void
}

export const Notes = ({ theme, notes, onEdit, onDelete }: NotesProps) => {
  return (
    <div className="flex h-full w-full flex-col items-center">
      <NotestHeader theme={theme} />
      <div className="h-full min-h-0 w-full flex-1 content-center items-center">
        <div className="m-auto flex h-[95%] min-h-0 w-[90%] flex-wrap content-start items-center justify-center gap-2 overflow-y-scroll pt-2 pb-4">
          {notes.length === 0 ? (
            <p>No Notes yet. Add one!</p>
          ) : (
            notes.map((note) => (
              <NotesCard
                key={note.id}
                note={note}
                onEdit={onEdit}
                onDelete={onDelete}
                theme={theme}
              />
            ))
          )}
        </div>
      </div>
    </div>
  )
}
