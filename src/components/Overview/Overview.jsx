import React from "react";
import { StyledOverview } from "./OverviewStyles";

export const Overview = ({
  cityName,
  weatherCondition,
  minTemperature,
  maxTemperature,
  currentTemperature,
}) => {
  
  return (
    <StyledOverview weatherCondition={weatherCondition}>
      <div className="top-info">
        <p>Agora: {cityName}</p>
        <p>{weatherCondition}</p>
      </div>
      <div className="bottom-info">
        <div className="temperature-info">
          <p>Mínima: {minTemperature}</p>
          <p>Máxima: {maxTemperature}</p>
        </div>
        <p className="current-temperature">{currentTemperature}</p>
      </div>
    </StyledOverview>
  );
};
