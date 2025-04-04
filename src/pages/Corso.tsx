import React, { useState } from "react";
import { useParams } from "react-router-dom";
import SignatureDemo from "../components/SignatureDemo";

function Corso() {
  const { corsoId } = useParams();

  return (
    <section className="w-full h-full">
      <h1 className="h1">Corso {corsoId}</h1>
      <p className="mt-2 mb-6">
        Questa è una pagina di prova dove vengono mostrate le info del tuo corso.
      </p>

      <div className="w-full max-w-3xl bg-white rounded-lg shadow-md p-6">
        <h2 className="h2 text-center mb-6">Modulo di iscrizione</h2>
        <section className="space-y-4">
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
            <input type="checkbox" id="privacy" className="mr-2" />
            <label htmlFor="privacy" className="text-sm">
              Accetto la privacy policy
            </label>
          </div>
          <SignatureDemo />
        </section>
      </div>
    </section>
  );
}

export default Corso;
