import React, { useState } from "react";
import Signature from "../components/utils/Signature";
import { useAppDispatch } from "../redux/hooks";
import { addNotification } from "../redux/slices/notificationSlice";
import { MessageType } from "../types";

function Corsi() {
  const dispatch = useAppDispatch();
  const [corsi, setCorsi] = useState<{ id: number; nome: string }[]>([]);
  const [nextId, setNextId] = useState(1);

  const aggiungiCorso = () => {
    const nome = prompt("Inserisci il nome del corso:");
    if (nome) {
      setCorsi([...corsi, { id: nextId, nome }]);
      setNextId(nextId + 1);
    }
  };

  const chiamaFunzione = (id: number) => {
    dispatch(addNotification({ message: `Funzione chiamata per il corso con ID: ${id}`, type: MessageType.INFO }));
  };

  return (
    <section className="w-full h-full">
      <h1 className="h1">Corsi</h1>
      <p className="mt-2 mb-6">
        Crea un corso e genera il QR Code per l'iscrizione.
      </p>

      <button className="btn btn-primary mb-4" onClick={aggiungiCorso}>
        Aggiungi Corso
      </button>
      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Azione</th>
          </tr>
        </thead>
        <tbody>
          {corsi.map((corso) => (
            <tr key={corso.id}>
              <td>{corso.id}</td>
              <td>{corso.nome}</td>
              <td>
                <div className="flex items-center justify-center gap-2">
                  <button
                    className="btn btn-secondary"
                    onClick={() => chiamaFunzione(corso.id)}
                  >
                    Chiama Funzione
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default Corsi;
