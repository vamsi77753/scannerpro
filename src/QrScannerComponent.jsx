import React, { useState } from "react";
import QrScanner from "react-qr-scanner";

const QrScannerComponent = () => {
  const [scanResult, setScanResult] = useState("");

  const handleScan = (data) => {
    if (data) {
      setScanResult(data.text); // Update this line to ensure the correct data is being set
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
        constraints={{
          video: { facingMode: "environment" }, // This sets the camera to the back camera
        }}
      />
      <h3>Scan Result:</h3>
      <p>{scanResult}</p>
    </div>
  );
};

export default QrScannerComponent;
