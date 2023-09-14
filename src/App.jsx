import "./App.css";
import { Search } from "./components/Search/Search";
import { Title } from "./components/Title/Title";
import { Overview } from "./components/Overview/Overview";
import { Graphic } from "./components/Graphic/Graphic";

// Dados fixos para o layout
const objOverview = [
  {
    cityName: "Nome_da_Cidade",
    minTemperature: "XX°C",
    maxTemperature: "YY°C",
    weatherCondition: "Nublado",
    currentTemperature: "ZZ°C",
  },
];

function App() {
  return (
    <div className="card">
      <Title />
      <Search />

      {objOverview.map((item) => (
        <Overview
          key={item.cityName}
          cityName={item.cityName}
          minTemperature={item.minTemperature}
          maxTemperature={item.maxTemperature}
          weatherCondition={item.weatherCondition}
          currentTemperature={item.currentTemperature}
        />
      ))}
      <Graphic />
    </div>
  );
}

export default App;
