# Crypto Portfolio

Huetzutage gibt es viele Krypto-Benutzer mit mehreren Krypto-Wallets. Sie kaufen Coins von verschiedenen Platformen (z.B Binance, Coinbase oder Kraken). Manche haben sogar physische Wallets auf dem USB-Stick. 

Das Problem: Die Benutzer sollten alle ihre Konten einzeln eröffnen und alle Vermögenswerte berechnen, um den aktuellen Kontostand zu erhalten.

Lösung: Mit unserer vorgeschlagenen Lösung "Crypto Portfolio" sehen Benutzer alle ihre Coins und Gesamtguthaben an einem Ort. Sie geben die Coins ein, die sie von verschiedenen Plattformen gekauft haben, und sehen den aktuellen Gesamtwert ihrer Investition.

Das Backend wird mit Node (v14.17), Typescript, Mongoose, MongoDB (db version v5.0.4) entwickelt.

Das Frontend wird mit Angular (13.0.3), Bootstrap (5.1.3), Node entwickelt.
 

## Build

Zuerst müss man das Backend und danach Frontend bauen. 

### Backend

1. Führen Sie zuerst `npm install` aus, um die Abhängigkeiten zu installieren.
2. Führen Sie danach `npm build` aus, um das Backend zu erstellen.

### Frontend 

1. Führen Sie zuerst `npm install` aus, um die Abhängigkeiten zu installieren.
2. Führen Sie `ng build` aus, um das Projekt zu erstellen. Die Build-Artefakte werden im Verzeichnis `dist/` gespeichert.

## Run

### Backend

1. Führen Sie die lokale MongoDb-Instanz aus und rufen Sie die db-url ab (z. B. mongodb://localhost:27017/cryptoPortfolio).
2. Aktualisieren Sie `mongoURI` (Datenbank-URL) in `config/database.ts`.
3. `npm start` führt den Backend-Dienst aus. Es wird von `http://localhost:8000` aus zugänglich sein

### Frontend

Führen Sie `ng serve` für einen Entwicklungsserver aus. Navigieren Sie zu `http://localhost:4200/`. 
