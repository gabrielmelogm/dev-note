import { Box } from "@chakra-ui/react"
import { Header } from "./Components/Header"
import { NewNote } from "./Components/NewNote"
import { NotesList } from "./Components/NotesList"

function App() {

  return (
    <Box
      width="100%"
      minH="100vh"
      backgroundColor="background"
    >
      <Header />
      {/* <NotesList /> */}
      <NewNote />
    </Box>
  )
}

export default App
