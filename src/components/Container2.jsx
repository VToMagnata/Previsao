import Cards from "./Cards.jsx";

const Container2 = ({ dados }) => {
  return (
    <main className="w-full sm:w-[80%] h-auto rounded-xl flex flex-col bg-[#D9F0FA] text-center p-4">
      <h1 className="font-bold text-[1.5em] mb-4">
        Previsão para os próximos 3 dias
      </h1>
      <div className="w-full flex flex-col sm:flex-row justify-center">
        <Cards dados={dados} />
      </div>
    </main>
  );
};

export default Container2;
