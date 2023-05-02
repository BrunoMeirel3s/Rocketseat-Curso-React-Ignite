import { styled } from "@stitches/react";
import { relative } from "path";

export const HomeContainer = styled("main", {
  display: "flex",
  maxWidth: "100vw",
  marginLeft: "auto",
  minHeight: 540,
});

export const Product = styled("div", {
  background:
    "linear-gradient(183deg, rgba(30,164,131,1) 0%, rgba(116,101,212,1) 100%);",
  borderRadius: 8,
  //padding: "0.25rem",
  //cursor: "pointer",
  position: "relative",
  overflow: "hidden",

  display: "flex",
  alignItems: "center",
  justifyContent: "center",

  img: {
    objectFit: "cover",
  },

  footer: {
    position: "absolute",
    bottom: "0.25rem",
    left: "0.25rem",
    right: "0.25rem",
    padding: "2rem",

    borderRadius: 6,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",

    backgroundColor: "rgba(0, 0, 0, 0.6)",

    transform: "translateY(110%)",
    opacity: 0,
    transition: "all 0.2s ease-in-out",

    strong: {
      fontSize: "$lg",
      color: "$gray100",
    },

    span: {
      fontSize: "$xl",
      fontWeight: "bold",
      color: "$green300",
    },

    a: {
      textDecoration: "none",
    },

    div: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },

    button: {
      outline: "none",
      background: "$green300",
      color: "$white",
      border: "none",
      borderRadius: "6px",
      width: "56px",
      height: "56px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      cursor: "pointer",

      "&:hover": {
        filter: "brightness(0.9)",
      },
    },
  },

  "&:hover": {
    footer: {
      transform: "translateY(0%)",
      opacity: 1,
    },
  },
});
