const Container1 = ({ dados }) => {
  return (
    <main className="w-full sm:w-[80%] h-[18em] rounded-xl flex flex-col items-center justify-start bg-[#D9F0FA] p-4 mb-[1em]">
      <h1 className="text-[2em] font-bold mb-[0.3em]">
        {dados?.location?.name}
      </h1>
      <figure className="flex w-auto h-auto items-center justify-center gap-2">
        <img src={dados?.current?.condition?.icon} alt="icone" />
        <h2 className="text-[2.6em] font-bold">{dados?.current?.temp_c}°C</h2>
      </figure>
      <p className="mb-16">{dados?.current?.condition?.text}</p>
      <div className="flex gap-8">
        <h4>Sensação térmica: {dados?.current?.feelslike_c}</h4>
        <h4>Umidade: {dados?.current?.humidity}</h4>
      </div>
    </main>
  );
};

export default Container1;
