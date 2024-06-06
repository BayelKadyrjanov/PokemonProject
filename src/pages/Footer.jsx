import React from "react";

const Footer = () => {
  return (
    <div className="m-3">
    <footer class="bg-zinc-800 h-34 pl-24 w-full flex items-center justify-between ">
        <div className="footer" class="flex mt-5">
          <div className="sign_up" class="mt-10">
            <h1 class="text-white text-lg font-bold ">Sign up for out newsletter</h1>
            <p class="text-white text-lg font-bold">
              Be the first to know about for special offers, news, and updates.
            </p>
            <input type="text" placeholder="Email Address" class=" mt-5 box-border h-2 w-34 p-4 border-4" />
            <button class="text-white rounded bg-green-400 mx-2 h-12 w-20">Sign Up</button>
          </div>
          <div class="flex space-x-36">
          <div class="m-8 mx-2.5">
            <h3 class="text-white text-2xl font-bold">Lorem Ipsum</h3>
            <p class="text-white">Lorem</p>
            <p class="text-white">Lorem</p>
            <p class="text-white">Lorem</p>
            <p class="text-white">Lorem</p>
            <p class="text-white">Lorem</p>
          </div>
          <div class="m-8">
            <h3 class="text-white text-2xl font-bold">Lorem Ipsum</h3>
            <p class="text-white">Lorem</p>
            <p class="text-white">Lorem</p>
            <p class="text-white">Lorem</p>
            <p class="text-white">Lorem</p>
            <p class="text-white">Lorem</p>
          </div>
          <div class="m-8">
            <h3 class="text-white text-2xl font-bold">Lorem Ipsum</h3>
            <p class="text-white">Lorem</p>
            <p class="text-white">Lorem</p>
            <p class="text-white">Lorem</p>
            <p class="text-white">Lorem</p>
            <p class="text-white">Lorem</p>
          </div>
          </div>
        </div>
      </footer>
      <div class="bg-zinc-800 h-34 pl-24 w-full text-white flex justify-center">
        © Pokemon 2012 - 2024
      </div>
    </div>
  );
};

export default Footer;