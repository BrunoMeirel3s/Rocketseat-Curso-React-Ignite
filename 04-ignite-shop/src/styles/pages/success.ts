import { CSSProperties } from "react";
import { styled } from "..";

export const SuccessContainer = styled("main", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  margin: "0 auto",
  height: 656,

  h1: {
    fontSize: "$2xl",
    color: "$gray100",
  },

  p: {
    fontSize: "$xl",
    color: "$gray300",
    maxWidth: 560,
    textAlign: "center",
    marginTop: "2rem",
  },

  a: {
    display: "block",
    marginTop: "5rem",
    fontSize: "$lg",
    color: "$green500",
    fontWeight: "bold",
    textDecoration: "none",

    "&:hover": {
      color: "$green300",
    },
  },
});

export const ImageContainer = styled("div", {
  width: 145,
  height: 145,
  marginLeft: "-2.4rem",
  background:
    "linear-gradient(183deg, rgba(30,164,131,1) 0%, rgba(116,101,212,1) 100%);",
  border: "1px solid rgba(0,0,0,0.08)",
  borderRadius: 999,
  padding: "0.25rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  img: {
    objectFit: "cover",
  },
});

export const ContainerProdutos = styled("main", {
  display: "flex",
  justifyContent: "center",
  flexDirection: "row",
  marginTop: "4rem",
});
