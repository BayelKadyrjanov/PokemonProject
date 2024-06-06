import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import PokemonCard from "../components/PokemonCard";
import { Skeletons } from "../components/Skeletons";
import Footer from "./Footer";

export const Home = ({ setPokemonData }) => {
  const [pokemons, setPokemons] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const itemsPerPage = 18;
  const totalPokemons = 198;
  const totalPages = Math.ceil(totalPokemons / itemsPerPage);

  useEffect(() => {
    getPokemons(currentPage);
  }, [currentPage]);

  const getPokemons = async (page) => {
    setLoading(true);
    const start = (page - 1) * itemsPerPage + 1;
    const endpoints = [];
    for (let i = start; i < start + itemsPerPage && i <= totalPokemons; i++) {
      endpoints.push(`https://pokeapi.co/api/v2/pokemon/${i}/`);
    }
    try {
      const res = await axios.all(endpoints.map((endpoint) => axios.get(endpoint)));
      setPokemons(res);
    } catch (error) {
      console.error("Ошибка загрузки данных:", error);
    }
    setLoading(false);
  };

  const pokemonFilter = (name) => {
    if (name === "") {
      getPokemons(currentPage);
    } else {
      const filteredPokemons = pokemons.filter((pokemon) =>
        pokemon.data.name.includes(name)
      );
      setPokemons(filteredPokemons);
    }
  };

  const pokemonPickHandler = (pokemonData) => {
    setPokemonData(pokemonData);
    navigate("/profile");
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div>
      <Navbar pokemonFilter={pokemonFilter} />
      <div className="max-w-full mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {loading ? (
            <Skeletons />
          ) : (
            pokemons.map((pokemon, key) => (
              <div
                key={key}
                className="cursor-pointer"
                onClick={() => pokemonPickHandler(pokemon.data)}
              >
                <PokemonCard
                  name={pokemon.data.name}
                  image={pokemon.data.sprites.front_default}
                  types={pokemon.data.types}
                />
              </div>
            ))
          )}
        </div>
        <div className="flex justify-center mt-4">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
            className="mx-2 px-4 py-2 bg-cyan-900 text-black font-bold rounded disabled:opacity-50"
          >
            Previous
          </button>
          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className="mx-2 px-4 py-2 bg-cyan-900 text-black font-bold rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
      <Footer/>
    </div>
  );
};
