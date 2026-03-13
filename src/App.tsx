import { Button } from "@/components/ui/button"
import { Navbar } from "./components/Navbar"
import { NotestHeader } from "./components/NotesHeader"

export function App() {
  return (
    <div className="flex min-h-svh justify-center">
      {/* <div className="flex w-[50%] flex-col gap-4 bg-gray-800 text-sm leading-loose"> */}
      <div className="flex w-[50%] flex-col gap-4 text-sm leading-loose">
        <Navbar />
        <NotestHeader />
      </div>
    </div>
  )
}

export default App
