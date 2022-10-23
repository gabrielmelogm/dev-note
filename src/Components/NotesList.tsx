import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box, Text } from "@chakra-ui/react";
import { Container } from "./Container";

interface NotesListProps {
  title: string
  note: string
}

export function NotesList() {
  const notes: NotesListProps[] = [
    {
      title: "Nota 1",
      note: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eacommodo consequat."
    },
    {
      title: "Nota 2",
      note: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eacommodo consequat."
    },
    {
      title: "Nota 3",
      note: " Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex eacommodo consequat."
    },
  ]

  return (
    <Box
      w="100%"
      marginTop="8rem"
    >
      <Container>
        <Text
          color="white"
          fontSize="5xl"
          fontWeight="bold"
        >Suas notas</Text>

        <Accordion
          marginTop="2rem"
          allowToggle
          display="flex"
          flexDir="column"
          gap="1rem"
        >
          {
            notes.map((note, index) => (
              <AccordionItem
                key={index}
                border="none"
                backgroundColor="text"
                borderRadius="base"
                >
                <AccordionButton
                  padding="5"
                >
                  <Box
                    flex="1"
                    textAlign="left"
                    color="white"
                  >
                    <Text fontWeight="bold" fontSize="2xl">{note.title}</Text>
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <AccordionPanel color="whitesmoke">
                  {note.note}
                </AccordionPanel>
              </AccordionItem>
            ))
          }
        </Accordion>
      </Container>
    </Box>
  )
}