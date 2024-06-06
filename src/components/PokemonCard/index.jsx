import * as React from "react";
import { typeHandler } from "../../utils";

export default function PokemonCard({ name, image, types }) {
  return (
    <div className="max-w-sm bg-stone-300 shadow-lg border border-green-400 rounded-lg overflow-hidden">
      <div className="hover:shadow-2xl transition-shadow duration-300 ease-in-out">
        <img
          className="w-full h-48 object-cover"
          src={image}
          alt={name}
        />
        <div className="p-4">
          <div className="flex justify-between items-center">
            <h5 className="text-lg font-bold text-gray-900">
              {name}
            </h5>
            <span className="text-sm text-gray-500">
              {typeHandler(types)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
