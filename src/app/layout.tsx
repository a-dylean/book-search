import { Container } from "@mui/material";
import { Props } from "./interfaces";

export const Layout = ({ children }: Props) => {
  return (
    <>
      <Container>
        <main>{children}</main>
      </Container>
    </>
  );
};
