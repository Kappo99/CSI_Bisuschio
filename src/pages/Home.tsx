import React, { useState } from "react";

function Home() {
  return (
    <section className="w-full h-full">
      <h1 className="h1">iscriviti</h1>
      <p className="mt-2 mb-6">
        Compila i tuoi dati e firma il documento per completare l'iscrizione.
      </p>

      <div className="flex flex-col items-center justify-center">
        <div className="w-full max-w-3xl bg-white rounded-lg shadow-md p-6">
          <h2 className="h2 text-center mb-6">Modulo di iscrizione</h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Nome"
              className="border border-gray-300 rounded-lg p-2 w-full"
            />
            <input
              type="text"
              placeholder="Cognome"
              className="border border-gray-300 rounded-lg p-2 w-full"
            />
            <div className="flex items-center">
              <input
                type="checkbox"
                id="privacy"
                className="mr-2"
              />
              <label htmlFor="privacy" className="text-sm">
                Accetto la privacy policy
              </label>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white rounded-lg py-2 px-4 hover:bg-blue-600 transition duration-200"
            >
              Invia
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Home;
