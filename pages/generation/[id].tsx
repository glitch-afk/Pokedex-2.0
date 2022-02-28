import {
  GetStaticPropsContext,
  InferGetStaticPropsType,
  GetStaticPaths,
} from "next";

import type { genData } from "../index";

import PokeCard from "../../components/PokeCard";

const Gen = ({
  genNumData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  console.log(genNumData.pokemon_species);

  return (
    <div className="flex items-center justify-center w-full h-fit">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-8 mx-10 mt-4 mb-12">
        {genNumData.pokemon_species.map((pokemon: genData) => (
          <PokeCard key={pokemon.name}>
            <h1>{pokemon.name}</h1>
          </PokeCard>
        ))}
      </div>
    </div>
  );
};

export default Gen;

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch(`https://pokeapi.co/api/v2/generation/`);
  const data = await res.json();

  const paths = data.results.map((gen: genData) => ({
    params: { id: gen.name },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const { params } = context;

  const inValidGen = {
    name: "invalid",
    url: "",
  };

  if (!params?.id) {
    return {
      props: {
        gen: inValidGen,
      },
    };
  }
  const allGenPokemon = await fetch(
    `https://pokeapi.co/api/v2/generation/${params.id}`
  );
  const genNumData = await allGenPokemon.json();

  return {
    props: {
      genNumData,
    },
  };
};
