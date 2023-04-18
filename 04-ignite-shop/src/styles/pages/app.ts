import { styled } from "@stitches/react";

export const Container = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  minWidth: "100vh",
});

export const Header = styled("header", {
  padding: "2rem 0",
  width: "100%",
  maxWidth: 1180,
  margin: "0 auto",

  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
});

export const ButtonCart = styled("button", {
  background: "$gray200",
  width: "48px",
  height: "48px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "6px",
  position: "relative",
  outline: "none",
  border: "none",
  color: "$gray400",

  "&:hover": {
    cursor: "pointer",
  },

  ".amountItensCart": {
    position: "absolute",
    right: "-10px",
    top: "-10px",
    background: "$green300",
    width: "30px",
    height: "30px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 999,
    border: "3px solid $gray900",
    fontWeight: "bold",
  },
});
