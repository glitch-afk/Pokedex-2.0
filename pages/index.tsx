import type { NextPage } from "next";
import Generation from "./Generation";

const Home: NextPage = () => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-6xl my-10 text-[#d8dee9]">Pokedex</h1>
      <Generation />
    </div>
  );
};

export default Home;
