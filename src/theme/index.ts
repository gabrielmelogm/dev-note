import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import { Button } from "./components/Button";

export const theme: ThemeConfig = extendTheme({
  semanticToken: {
    initialColorMode: "light",
    useSystemColorMode: false,
    styles: {
      global: {
        body: {
          padding: 0,
          margin: 0,
        },
      },
    },
  },
  colors: {
    white: "#FFF",
    black: "#000",
    background: "#eef0f8",
    main: "#8257e5",
    mainDark: "#6833e4",
    secondary: "",
    success: "#04d361",
    alert: "#fd951f",
    error: "#eb3223",
    text: "#4A5568",
  },
  fonts: {},
  components: {
    Button,
  },
});
