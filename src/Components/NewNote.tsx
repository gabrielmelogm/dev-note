import { Box, Button, Input, Text, Textarea } from "@chakra-ui/react";
import { FormEvent, useState } from "react";
import { Container } from "./Container";

export function NewNote() {
  const [ title, setTitle ] = useState('') 
  const [ note, setNote ] = useState('')

  function handleSubmit(event: FormEvent) {
    event.preventDefault()
    console.log({title, note})
  }

  return (
    <Box
      marginTop="8rem"
    >
      <Container>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Box
            width="100%"
            padding="3rem"
            borderRadius="base"
            backgroundColor="gray.800"
            maxW="800px"
            alignSelf="center"
          >
            <Text
              color="white"
              fontSize="2xl"
              fontWeight="bold"
              marginBottom="2rem"
            >Nova nota</Text>
            <form onSubmit={handleSubmit}>
              <Box
                display="flex"
                flexDir="column"
                gap={5}
              >
                <Input
                  onChange={({target})  => setTitle(target.value)}
                  value={title}
                  name="title"
                  type="text"
                  placeholder="Título"
                  border="none"
                  backgroundColor="gray.600"
                  color="white"
                />
                <Textarea
                  onChange={({target})  => setNote(target.value)}
                  value={note}
                  name="note"
                  rows={5}
                  maxH="300px"
                  placeholder="Nota"
                  border="none"
                  backgroundColor="gray.600"
                  color="white"
                />
                <Button
                  marginTop="1rem"
                  type="submit"
                >
                  <Text>Enviar</Text>
                </Button>
              </Box>
            </form>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}