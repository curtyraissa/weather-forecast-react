import React from "react";
import { StyledSearch, Input, Button } from "./SearchStyles";

export const Search = () => {
  return (
    <StyledSearch>
      <Input type="text" placeholder="Digite o nome da cidade" />
      <Button>Buscar</Button>
    </StyledSearch>
  );
};
