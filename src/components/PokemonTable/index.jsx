import * as React from "react";
import { typeHandler } from "../../utils";

export default function PokemonTable({ pokemonData }) {
  const { height, weight, types } = pokemonData;

  return (
    <div className="max-w-xs p-4 bg-white rounded-lg shadow-none">
      <table className="min-w-full">
        <tbody>
          <tr className="border-b">
            <td className="py-2">Height</td>
            <td className="py-2">{height}cm</td>
          </tr>
          <tr className="border-b">
            <td className="py-2">Weight</td>
            <td className="py-2">{weight}g</td>
          </tr>
          <tr className="border-b">
            <td className="py-2">Types</td>
            <td className="py-2">{typeHandler(types)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
