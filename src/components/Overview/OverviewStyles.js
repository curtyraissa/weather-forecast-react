import styled from "styled-components";

const weatherColors = {
  "Céu aberto": "#FBE8A4",
  Nublado: "#BFC1C3",
  Chovendo: "#6A9EDA",
  Nevando: "#EDEDED",
  Neblina: "#EDEDED",
  Tempestade: "#C4BDF3",
  Chuviscando: "#A4E1E9",
  default: "#E2504c",
};

export const StyledOverview = styled.div`
  background-color: ${(props) => {
    const color = weatherColors[props.weatherCondition] || weatherColors.default;
    return color;
  }};

  display: flex;
  flex-direction: column;
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
