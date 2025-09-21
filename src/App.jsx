import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import WeatherDisplay from "./components/WeatherDisplay";
import ThemeSwitcher from "./components/ThemeSwitcher";
import "./App.css";

function App() {
  const [query, setQuery] = useState("São Paulo");
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (!query) return;

    const fetchWeather = async () => {
      setLoading(true);
      try {
        const apiKey = import.meta.env.VITE_OPENWEATHER_API_KEY;
        if (!apiKey) {
          setWeatherData({ cod: 401, message: "API key não configurada" });
          setLoading(false);
          return;
        }

        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
            query
          )}&appid=${apiKey}&units=metric&lang=pt_br`
        );
        const data = await res.json();
        setWeatherData(data);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
        setWeatherData({ cod: 500, message: "Erro de rede" });
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [query]);

  return (
    <div className={`app ${theme}`}>
      <header className="app-header">
        <h1>Painel Meteorológico</h1>
        <ThemeSwitcher theme={theme} setTheme={setTheme} />
      </header>

      <main className="app-main">
        <SearchBar onSearch={setQuery} />
        {loading ? <p>Carregando...</p> : <WeatherDisplay weatherData={weatherData} />}
      </main>
    </div>
  );
}

export default App;
