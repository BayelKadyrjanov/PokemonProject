import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import PokemonTable from "../components/PokemonTable";

export const Profile = ({ pokemonData }) => {
  const { name, sprites, moves } = pokemonData || {};
  const navigate = useNavigate();

  useEffect(() => {
    if (!pokemonData) {
      navigate("/");
    }
  }, [pokemonData, navigate]);

  if (!pokemonData) {
    return null;
  }

  return (
    <>
      <Navbar hideSearch />
      <div className="max-w-3xl mx-auto p-4">
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="flex flex-col items-center">
            <h1 className="text-2xl font-bold mb-4">{name}</h1>
            <div className="flex flex-col md:flex-row items-center w-full mb-4">
              <img src={sprites.front_default} className="w-1/2 md:w-1/2 mb-4 md:mb-0" alt={`${name} front`} />
              <PokemonTable pokemonData={pokemonData} />
            </div>
            <div className="w-full">
              <div className="my-4 border-b-2 text-center">bye, bye</div>
              <div className="flex justify-between mb-4">
                <img src={sprites.front_female} className="w-1/4" alt={`${name} front female`} />
                <img src={sprites.front_shiny} className="w-1/4" alt={`${name} front shiny`} />
                <img src={sprites.front_shiny_female} className="w-1/4" alt={`${name} front shiny female`} />
              </div>
              <div className="my-4 border-b-2 text-center">hello</div>
              <div className="text-center mt-4">
                {moves.map((moveData, key) => (
                  <span key={key} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    {moveData.move.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
