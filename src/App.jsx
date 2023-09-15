import "./App.css";
import { Search } from "./components/Search/Search";
import { Title } from "./components/Title/Title";
import { Overview } from "./components/Overview/Overview";
import { Graphic } from "./components/Graphic/Graphic";

function App() {
  return (
    <div className="card">
      <Title />
      <Search />
      <Graphic />
    </div>
  );
}

export default App;
