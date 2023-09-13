import styled from "styled-components";

export const StyledOverview = styled.div`
  display: flex;
  flex-direction: column;
  background-color: gray; //nublado
  border-radius: 10px;
  margin-top: 10px;
  padding: 20px;

  .top-info {
    display: flex;
    justify-content: space-between;
  }

  .bottom-info {
    display: flex;
    justify-content: space-between;
    align-items: end;
  }

  .temperature-info {
    display: flex;
    flex-direction: column;
    margin-top: 15px;
  }

  .current-temperature {
    font-size: 32px;
  }
`;

export default StyledOverview;
