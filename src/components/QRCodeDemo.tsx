import { QRCodeCanvas } from 'qrcode.react';

type QRCodeDemoProps = {
  corsoId: number;
};

const QRCodeDemo = ({ corsoId }: QRCodeDemoProps) => {
  const fakeUrl = `https://csi.kmsolution.link/corsi/${corsoId}`;

  return (
    <div className="flex flex-col items-center gap-4">
      <h2 className="text-xl font-bold">QR Code per il corso {corsoId}</h2>
      <QRCodeCanvas value={fakeUrl} size={256} />
      <p className="text-sm text-gray-600">{fakeUrl}</p>
    </div>
  );
};

export default QRCodeDemo;
