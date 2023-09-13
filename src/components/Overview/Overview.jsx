import React from "react";
import { StyledOverview } from "./Overview.styles";

function Overview() {
  // Dados fixos para o layout
  const cityName = "Nome_da_Cidade";
  const minTemperature = "XX°C";
  const maxTemperature = "YY°C";
  const weatherCondition = "Nublado";
  const currentTemperature = "ZZ°C";

  return (
    <StyledOverview>
      <div className="top-info">
        <c>Agora: {cityName}</c>
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
}

export default Overview;
