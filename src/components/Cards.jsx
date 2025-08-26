import { useState, useEffect } from "react";

const Cards = ({ dados }) => {
  const [forecastData, setForecastData] = useState([]);

  useEffect(() => {
    if (!dados?.forecast?.forecastday) return;

    const diasFuturos = dados.forecast.forecastday.map((day) => {
      const date = new Date(day.date);
      return {
        diaSemana: date.toLocaleDateString("pt-BR", { weekday: "long" }),
        icone: day.day.condition.icon,
        tempMax: day.day.maxtemp_c,
        tempMin: day.day.mintemp_c,
        condicao: day.day.condition.text,
      };
    });

    setForecastData(diasFuturos);
  }, [dados]);

  if (forecastData.length === 0) return null;

  return (
    <main className="flex w-full gap-4 h-auto flex-col sm:flex-row items-center justify-center">
      {forecastData.map((dia, index) => (
        <div
          key={index}
          className="p-4 rounded shadow-xl flex flex-col justify-center items-center w-[20em] h-[12em]"
        >
          <h2 className="font-bold">{dia.diaSemana}</h2>
          <img src={dia.icone} alt="ícone do clima" />
          <p>
            Máx: {dia.tempMax}°C | Mín: {dia.tempMin}°C
          </p>
          <p>{dia.condicao}</p>
        </div>
      ))}
    </main>
  );
};

export default Cards;
