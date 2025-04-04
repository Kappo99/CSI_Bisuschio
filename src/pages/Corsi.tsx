import React, { useState } from "react";
import QRCodeDemo from "../components/QRCodeDemo";
import { MdQrCodeScanner } from "react-icons/md";

type Corso = {
  id: number;
  nome: string;
};

function Corsi() {
  const [corsi, setCorsi] = useState<Corso[]>([
    { id: 1, nome: "Calcio" },
    { id: 2, nome: "Basket" },
    { id: 3, nome: "Pallavolo" },
  ]);
  const [nextId, setNextId] = useState(4);
  const [showQR, setShowQR] = useState(false);
  const [corsoSelezionato, setCorsoSelezionato] = useState<Corso | null>(null);
  const [nomeNuovoCorso, setNomeNuovoCorso] = useState("");

  const aggiungiCorso = () => {
    if (!nomeNuovoCorso.trim()) return;
    setCorsi([...corsi, { id: nextId, nome: nomeNuovoCorso }]);
    setNextId(nextId + 1);
    setNomeNuovoCorso("");
  };

  const mostraQRCode = (corso: Corso) => {
    setCorsoSelezionato(corso);
    setShowQR(true);
  };

  const chiudiPopup = () => {
    setShowQR(false);
    setCorsoSelezionato(null);
  };

  return (
    <section className="w-full h-full">
      <h1 className="h1">Corsi</h1>
      <p className="mt-2 mb-6">
        Crea un corso e genera il QR Code per l'iscrizione.
      </p>

      <div className="flex flex-col md:flex-row items-start md:items-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Nome del nuovo corso"
          value={nomeNuovoCorso}
          onChange={(e) => setNomeNuovoCorso(e.target.value)}
          className="border border-gray-300 rounded-lg p-2 w-full md:w-80"
        />
        <button onClick={aggiungiCorso} className="btn btn-primary btn-md">
          Aggiungi Corso
        </button>
      </div>

      <table className="table-auto w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
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
                  <MdQrCodeScanner
                    size={24}
                    onClick={() => mostraQRCode(corso)}
                    className="cursor-pointer hover:text-gray-800"
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Popup QR Code */}
      {showQR && corsoSelezionato && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg relative">
            <button
              className="absolute top-2 right-2 text-gray-700 hover:text-black"
              onClick={chiudiPopup}
            >
              ✕
            </button>
            <QRCodeDemo corsoId={corsoSelezionato.id} />
          </div>
        </div>
      )}
    </section>
  );
}

export default Corsi;
