import * as React from "react";
import { useNavigate } from "react-router-dom";
import { FaSearch } from "react-icons/fa";


export default function Navbar({ pokemonFilter, hideSearch }) {
  const navigate = useNavigate();

  return (
    <div className="flex flex-grow mb-8">
      <nav className="w-full bg-cyan-900">
        <div className="flex justify-between items-center p-4">
          <img
            src="/assets/pokemon-logo.png"
            alt="Pokemon Logo"
            className="h-12 cursor-pointer"
            onClick={() => navigate("/")}
          />
          <div>
            <h1 className="text-2xl text-amber-400 font-semibold">Welcome to Pokemon World</h1>
          </div>
          {!hideSearch && (
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                ><FaSearch/>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1"
                  >
                  </path>
                </svg>
              </div>
              <input
                type="text"
                className="block w-full pl-10 p-2.5 bg-gray-800 border border-gray-700 rounded-md text-gray-300 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Найти..."
                onChange={(e) => pokemonFilter(e.target.value)}
                aria-label="search"
              />
            </div>
          )}
        </div>
      </nav>
    </div>
  );
}
