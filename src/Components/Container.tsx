import { Box } from "@chakra-ui/react";

export function Container({children}: any) {
  return (
    <Box
      padding="0 150px"
      maxW="1602px"
      width="90%"
      margin="0 auto"
      sx={{
        "@media(max-width: 1280px)": {
          width: "90%"
        }
      }}
    >
      {children}
    </Box>
  )
}