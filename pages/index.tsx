import { InferGetStaticPropsType } from "next";
import Generation from "../components/Generation";

const Home = ({ GenData }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-6xl my-10 text-[#d8dee9]">Pokedex</h1>
      <Generation GenData={GenData} />
    </div>
  );
};

export default Home;

export type genData = {
  name: string;
  url: string;
};

export const getStaticProps = async () => {
  const pokemonGen = await fetch("https://pokeapi.co/api/v2/generation/");
  const Gendata = await pokemonGen.json();
  return {
    props: {
      GenData: Gendata.results,
    },
  };
};
