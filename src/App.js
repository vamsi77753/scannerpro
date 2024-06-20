import React from "react";
import "./App.css";
import QrCodeGenerator from "./QrCodeGenerator";
import QrScannerComponent from "./QrScannerComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>QR Code Scanner App for adhar</h1>
      </header>
      <main>
        <QrCodeGenerator />
        <QrScannerComponent />
      </main>
    </div>
  );
}

export default App;
