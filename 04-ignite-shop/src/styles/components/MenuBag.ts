import { styled } from "@stitches/react";

export const MenuBag = styled("div", {
  background: "$gray200",
  width: "480px",
  position: "absolute",
  zIndex: 999,
  top: "0px",
  right: "0px",
  minHeight: "100vh",
  padding: "2rem 3rem 3rem 3rem",
  borderRadius: "0 0 8px 8px",

  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "end",

    button: {
      border: "none",
      outline: "none",
      cursor: "pointer",
      background: "transparent",
      color: "$gray100",
    },
  },

  main: {
    marginTop: "2rem",
  },
});

export const ContainerCamisetas = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  marginTop: "1.5rem",
});

export const Camiseta = styled("div", {
  display: "flex",
  flexDirection: "row",
  gap: "1.25rem",
  alignItems: "center",

  ".containerImage": {
    background:
      "linear-gradient(183deg, rgba(30,164,131,1) 0%, rgba(116,101,212,1) 100%);",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "8px",
  },

  ".containerInfos": {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-between",
    gap: "0.5rem",

    button: {
      outline: "none",
      background: "transparent",
      border: "none",
      color: "$green300",
      cursor: "pointer",
      fontSize: "1rem",
      fontWeight: "bold",
    },
  },
});

export const ContainerRodape = styled("div", {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
  marginTop: "2rem",

  div: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  button: {
    marginTop: "2rem",
    borderRadius: "8px",
    width: "100%",
    border: "none",
    outline: "none",
    background: "$green300",
    color: "white",
    height: "4rem",
    fontSize: "1.25rem",
    cursor: "pointer",
  },
});
