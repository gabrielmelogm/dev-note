import { Avatar, Box, Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { Container } from "./Container";

export function Header() {
  return (
    <Box
      w="100%"
      h="80px"
      display="flex"
      >
      <Container>
        <Box
          h="100%"
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
          borderBottom="1px solid rgba(229, 229, 299, 0.5)"
        >
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            gap="3rem"
          >
            <Button
              w="100px"
              size="lg"  
            >
              Nova
            </Button>
            <Menu>
              <MenuButton>
                <Avatar
                  size="md"
                  name="Gabriel Melo"
                />
              </MenuButton>
              <MenuList>
                <MenuItem>Listar notas</MenuItem>
                <MenuItem>Nova nota</MenuItem>
                <MenuItem>Sair</MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}