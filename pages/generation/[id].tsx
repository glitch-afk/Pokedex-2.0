import { useState, useEffect } from "react";
import { useRouter } from "next/router";

type Props = {};

const Gen = (props: Props) => {
  const [pokemons, setPokemons] = useState([]);
  const router = useRouter();
  console.log("router", router);

  const getAllPokemons = async (url: string) => {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  };

  useEffect(() => {
    getAllPokemons(
      `https://pokeapi.co/api/v2/generation/${router.query.id}`
    ).then((data) => console.log(data.pokemon_species));
  }, []);

  return <>Hello dynamic route</>;
};

export default Gen;
