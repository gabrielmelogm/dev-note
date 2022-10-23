import { ComponentStyleConfig } from "@chakra-ui/react";

export const Button: ComponentStyleConfig = {
  baseStyle: {
    fontWeight: "bold",
    borderRadius: "base",
    _disabled: {
      _hover: {
        bg: "main",
      },
    },
  },
  variants: {
    fill: {
      bg: "main",
      color: "white",
      _hover: {
        filter: "brightness(0.9)",
      },
    },
    hover: {
      padding: 1,
      _hover: {
        color: "main",
        bg: "gray.100",
      },
    },
    outline: {
      bg: "transparent",
      color: "black",
      borderColor: "main",
      _hover: {
        color: "white",
        bg: "main",
      },
    },
  },

  defaultProps: {
    variant: "fill",
  },
};
