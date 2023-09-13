import React from 'react';
import { StyledSearch, Input, Button } from './Search.styles';

function Search() {
  return (
    <StyledSearch>
      <Input type="text" placeholder="Digite o nome da cidade" />
      <Button>Buscar</Button>
    </StyledSearch>
  );
}

export default Search;
