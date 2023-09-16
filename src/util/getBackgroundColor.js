// Em algum lugar do seu código, defina e importe a função getBackgroundColor
export const getBackgroundColor = (weatherCondition) => {
    switch (weatherCondition) {
      case "Clear":
        return "yellow"; // Céu aberto
      case "Clouds":
        return "gray"; // Nublado
      case "Rain":
        return "blue"; // Chovendo
      case "Snow":
        return "lightgray"; // Nevando
      case "Thunderstorm":
        return "purple"; // Tempestade
      case "Chuviscando":
        return "lightblue"; // Chuviscando
      case "Mist":
        return "lightgray"; // Neblina
      default:
        return "red";
    }
  };