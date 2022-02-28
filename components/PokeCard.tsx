import React from "react";

type Props = {
  children: React.ReactNode;
};

const PokeCard = ({ children }: Props) => {
  return <div className="pokeCard">{children}</div>;
};

export default PokeCard;
