import { useState, useEffect } from "react";

const Cards = ({ dados }) => {
  const [forecastData, setForecastData] = useState([]);

  useEffect(() => {
    if (!dados?.forecast?.forecastday) return;

    const diasFuturos = dados.forecast.forecastday.slice(1).map((day) => {
      const [year, month, dayNum] = day.date.split("-");
      const date = new Date(year, month - 1, dayNum);
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
          className="p-4 rounded-xl shadow-xl flex flex-col justify-center items-center w-[20em] h-[12em] bg-white"
        >
          <h2 className="font-bold capitalize mb-2">{dia.diaSemana}</h2>
          <img src={dia.icone} alt="ícone do clima" className="mb-2" />
          <p className="mb-1">
            Máx: {dia.tempMax}°C | Mín: {dia.tempMin}°C
          </p>
          <p>{dia.condicao}</p>
        </div>
      ))}
    </main>
  );
};

export default Cards;
