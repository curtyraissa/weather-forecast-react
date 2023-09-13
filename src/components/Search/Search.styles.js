import styled from 'styled-components';

export const StyledSearch = styled.div`
  display: flex;
  gap: 10px;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  flex: 1; //elemento preenche o espaço disponível no conteiner
  background-color: white;
`;

export const Button = styled.button`
  padding: 10px 20px;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

export default StyledSearch;
