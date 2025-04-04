import React, { useRef, useState } from "react";
import SignatureCanvas from "react-signature-canvas";
import { useAppDispatch } from "../redux/hooks";
import { addNotification } from "../redux/slices/notificationSlice";
import { MessageType } from "../types";

const SignatureDemo: React.FC = () => {
  const dispatch = useAppDispatch();
  const sigRef = useRef<SignatureCanvas>(null);
  const [savedImage, setSavedImage] = useState<string | null>(null);

  const clear = () => {
    sigRef.current?.clear();
    setSavedImage(null);
  };

  const save = () => {
    if (!sigRef.current || sigRef.current?.isEmpty()) {
      dispatch(addNotification({ message: "Per favore firma prima di salvare!", type: MessageType.WARNING }));
      return;
    }
    const dataUrl = sigRef.current.toDataURL("image/png");
    setSavedImage(dataUrl);
  };

  const downloadImage = () => {
    if (!savedImage) return;
    const link = document.createElement("a");
    link.href = savedImage;
    link.download = "firma.png";
    link.click();
  };

  return (
    <div className="max-w-md space-y-4">
      <h3 className="h3">Firma</h3>

      <SignatureCanvas
        penColor="black"
        canvasProps={{
          className: "w-full h-48 border-2 border-gray-300 rounded",
        }}
        ref={sigRef}
      />

      <div className="flex space-x-4">
        <button
          onClick={clear}
          className="bg-red-500 text-white px-4 py-2 rounded"
        >
          Cancella
        </button>
        <button
          onClick={save}
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Salva
        </button>
      </div>

      {savedImage && (
        <div className="space-y-2">
          <h3 className="font-semibold">Firma salvata:</h3>
          <img src={savedImage} alt="Firma" className="border rounded shadow" />
          <button
            onClick={downloadImage}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Scarica firma
          </button>
        </div>
      )}
    </div>
  );
};

export default SignatureDemo;
