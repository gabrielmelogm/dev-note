import { Box } from "@chakra-ui/react"
import { Header } from "./Components/Header"
import { NotesList } from "./Components/NotesList"

function App() {

  return (
    <Box
      width="100%"
      minH="100vh"
      backgroundColor="background"
    >
      <Header />
      <NotesList />
    </Box>
  )
}

export default App
