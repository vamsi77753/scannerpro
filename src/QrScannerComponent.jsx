import React, { useState } from "react";
import QrScanner from "react-qr-scanner";

const QrScannerComponent = () => {
  const [scanResult, setScanResult] = useState("");

  const handleScan = (data) => {
    if (data) {
      setScanResult(data);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  const previewStyle = {
    height: 240,
    width: 320,
  };

  return (
    <div>
      <h2>QR Code Scanner</h2>
      <QrScanner
        delay={300}
        style={previewStyle}
        onError={handleError}
        onScan={handleScan}
      />
      <h3>Scan Result:</h3>
      <p>{scanResult}</p>
    </div>
  );
};

export default QrScannerComponent;
