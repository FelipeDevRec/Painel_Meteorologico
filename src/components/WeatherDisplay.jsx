export default function WeatherDisplay({ weatherData }) {
  if (!weatherData) {
    return <p>Pesquise por uma cidade para ver o clima.</p>;
  }

  if (weatherData.cod && weatherData.cod !== 200) {
    return <p>Erro: {weatherData.message}</p>;
  }

  const { name, main, weather, wind } = weatherData;
  const icon = weather?.[0]?.icon;
  const iconUrl = icon ? `https://openweathermap.org/img/wn/${icon}@2x.png` : null;

  return (
    <div className="weather">
      <h2>{name}</h2>
      <div className="weather-main">
        {iconUrl && <img src={iconUrl} alt={weather[0].description} />}
        <div>
          <p className="temp">{Math.round(main.temp)}°C</p>
          <p>{weather[0].description}</p>
          <p>Sensação: {Math.round(main.feels_like)}°C</p>
        </div>
      </div>

      <div className="weather-details">
        <p>Umidade: {main.humidity}%</p>
        <p>Vento: {Math.round(wind.speed)} m/s</p>
      </div>
    </div>
  );
}
