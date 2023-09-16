import styled from "styled-components";

const TempToColor = {
  Clear: "yellow",
};

export const StyledOverview = styled.div`
  background-color: ${(props) => {
    console.log("COR", props);

    const color = TempToColor[props.weatherCondition];

    if (props.weatherCondition === "Clear") {
      return "yellow";
    } else if (props.weatherCondition === "Nublado") {
      return "gray";
      // } else if (props.weatherCondition == 'Chovendo') {
      //   return "blue";
      // } else if (props.weatherCondition == 'Nevando') {
      //   return "lightgray";
      // } else if (props.weatherCondition == 'Tempestade') {
      //   return "purple";
      // } else if (props.weatherCondition == 'Chuviscando') {
      //   return "lightblue";
      // } else if (props.weatherCondition == 'Neblina') {
      //   return "lightgray";
    } else {
      return "red";
    }
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
