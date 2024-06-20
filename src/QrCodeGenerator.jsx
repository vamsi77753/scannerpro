import React from "react";
import QRCode from "qrcode.react";

const QrCodeGenerator = () => {
  return (
    <div>
      <h2>QR Code Generator</h2>
      <QRCode value="https://example.com" />
    </div>
  );
};

export default QrCodeGenerator;
