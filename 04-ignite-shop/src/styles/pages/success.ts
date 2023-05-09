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

    "&:hover": {
      color: "$green300",
    },
  },
});

export const ImageContainer = styled("main", {
  width: 145,
  height: 145,
  background:
    "linear-gradient(180deg, rgba(30, 164, 131, .1), rgba(116, 101, 212, 1.1))",
  borderRadius: 999,
  padding: "0.25rem",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  img: {
    objectFit: "cover",
  },
  zIndex: "$$index",
});

export const ContainerProdutos = styled("div", {
  display: "flex",
  justifyContent: "center",
  flexDirection: "row",
  marginTop: "4rem",
});
