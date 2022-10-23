import { Avatar, Box, Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { usePage } from "../hooks/usePage";
import { Container } from "./Container";

export function Header() {
  const { setPage } = usePage()

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
              onClick={() => setPage('create')}
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
                <MenuItem onClick={() => setPage('list')}>Listar notas</MenuItem>
                <MenuItem onClick={() => setPage('create')}>Nova nota</MenuItem>
                <MenuItem>Sair</MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}