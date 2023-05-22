import { styled } from "./styles";

const Buttton = styled("button", {
  fontFamily: "$default",
  backgroundColor: "$ignite500",
  borderRadius: "$md",
  padding: "$4",
});

export function App() {
  return <Buttton>Hello World</Buttton>;
}
