import React, { useState } from "react";
import { StyledSearch, Input, Button } from "./SearchStyles";
import axios from "axios";
import { Overview } from "../Overview/Overview";
import { translateWeatherCondition } from "../../util/translateWeatherCondition";
import { Graphic } from "../Graphic/Graphic";

export const Search = () => {
  const [city, setCity] = useState(""); // Estado para armazenar a cidade digitada
  const [cityData, setCityData] = useState(null); // Estado para armazenar os dados da cidade na rota weather
  const [forecastData, setForecastData] = useState(null); // Estado para armazenar os dados da cidade na rota forecast

  const apiKey = "8d0416a7768b0006840da31e0af379a9";

  const handleSearch = async () => {
    try {
      if (!city) {
        return; // Não faz nada se 'city' não estiver definida
      }

      const [cityResponse, forecastResponse] = await Promise.all([
        axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
        ),
        axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${apiKey}`
        ),
      ]);

      setCityData(cityResponse.data);

      const chartData = forecastResponse.data.list.map(
        ({ main: { temp }, dt_txt }) => {
          const date = new Date(dt_txt);

          return {
            temp,
            date: `${date.getDate()}/${date.getMonth() + 1}`, //TODO: Ajustar data
          };
        }
      );

      setForecastData(chartData);
    } catch (error) {
      if (error.response) {
        // Erro de resposta da API (por exemplo, erro 404)
        console.error("Erro na resposta da API:", error.response.data);
      } else if (error.request) {
        // Erro na requisição para a API (por exemplo, falha de rede)
        console.error("Erro na requisição para a API:", error.request);
      } else {
        // Erro desconhecido
        console.error("Erro desconhecido:", error.message);
      }
    }
  };

  console.log("graaaaafico:", forecastData);

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

      {forecastData && <Graphic data={forecastData} />}
    </>
  );
};
