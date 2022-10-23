import { Box } from "@chakra-ui/react"
import { Header } from "./Components/Header"
import { NewNote } from "./Components/NewNote"
import { NotesList } from "./Components/NotesList"
import { usePage } from "./hooks/usePage"

function App() {
  const { page } = usePage()
  return (
    <Box
      width="100%"
      minH="100vh"
      backgroundColor="background"
    >
      <Header />
      {
        (page === "list") ?
        (<NotesList />) :
        (<NewNote />)
      }
    </Box>
  )
}

export default App
