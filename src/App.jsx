import { useEffect, useState } from "react";
import Container1 from "./components/Container1.jsx";
import Container2 from "./components/Container2.jsx";

const App = () => {
  const KEY = "31133f0e368c48f3a1d182553252508";
  const [dados, setDados] = useState(null);
  const [city, setCity] = useState("");

  useEffect(() => {
    const fetchLocationWeather = () => {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            const res = await fetch(
              `https://api.weatherapi.com/v1/forecast.json?key=${KEY}&q=${lat},${lon}&days=3&lang=pt`
            );
            const data = await res.json();
            setDados(data);
          } catch {
            const res = await fetch(
              `https://api.weatherapi.com/v1/forecast.json?key=${KEY}&q=São Paulo&days=3&lang=pt`
            );
            const data = await res.json();
            setDados(data);
          }
        },
        async () => {
          const res = await fetch(
            `https://api.weatherapi.com/v1/forecast.json?key=${KEY}&q=São Paulo&days=3&lang=pt`
          );
          const data = await res.json();
          setDados(data);
        }
      );
    };

    fetchLocationWeather();
  }, []);

  return (
    <main className="w-screen h-screen p-4 flex flex-col items-center justify-center bg-gradient-to-b from-cyan-600 to-sky-400">
      <header className="flex items-center justify-center mb-8 w-full">
        <input
          type="text"
          placeholder="Cidade"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="w-full sm:w-[20em] h-[2.2em] rounded-tl-xl rounded-bl-xl bg-white outline-none font-bold text-center"
        />
        <button
          className="w-[35%] sm:w-[4em] h-[2.2em] rounded-br-xl rounded-tr-xl bg-[#FFA500] text-white font-bold text-center cursor-pointer"
          onClick={async () => {
            try {
              const res = await fetch(
                `https://api.weatherapi.com/v1/forecast.json?key=${KEY}&q=${city}&days=3&lang=pt`
              );
              if (res.ok) {
                const data = await res.json();
                setDados(data);
              } else {
                console.log("Erro na requisição:", res.status);
              }
            } catch (err) {
              console.log(err);
            }
          }}
        >
          Buscar
        </button>
      </header>

      {/* Renderizar containers apenas se dados existirem */}
      {dados && (
        <>
          <Container1 dados={dados} />
          <Container2 dados={dados} />
        </>
      )}
    </main>
  );
};

export default App;
