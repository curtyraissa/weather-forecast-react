import React, { useState } from "react";
import { StyledSearch, Input, Button } from "./SearchStyles";
import axios from "axios";
import { Overview } from "../Overview/Overview";
import { translateWeatherCondition } from "../../util/translateWeatherCondition";

export const Search = () => {
  const [city, setCity] = useState(""); // Estado para armazenar a cidade digitada
  const [cityData, setCityData] = useState(null); // Estado para armazenar os dados da cidade

  const apiKey = "8d0416a7768b0006840da31e0af379a9";

  const handleSearch = () => {
    if (city) {
      axios
        .get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`
        )
        .then((response) => {
          setCityData(response.data);
        })
        .catch((error) => {
          console.error("Error fetching city data: ", error);
        });
    }
  };

  console.log("Weather Condition:", cityData?.weather[0]?.main);

  return (
    <>
      <StyledSearch>
        <Input
          type="text"
          placeholder="Digite o nome da cidade"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <Button onClick={handleSearch}>Buscar</Button>
      </StyledSearch>

      {cityData && (
        <Overview
          cityName={cityData?.name}
          weatherCondition={translateWeatherCondition(
            cityData?.weather[0]?.main
          )}
          minTemperature={cityData?.main?.temp_min + "°C"}
          maxTemperature={cityData?.main?.temp_max + "°C"}
          currentTemperature={cityData?.main?.temp + "°C"}
        />
      )}
    </>
  );
};
