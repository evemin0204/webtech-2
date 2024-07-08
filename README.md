# Crypto Portfolio

## Übersicht
In der heutigen Zeit besitzen viele Krypto-Enthusiasten mehrere Wallets und kaufen Coins über verschiedene Plattformen wie Binance, Coinbase oder Kraken. Einige nutzen sogar physische Wallets auf USB-Sticks.

### Das Problem
Benutzer müssen jedes ihrer Konten einzeln öffnen und alle Vermögenswerte manuell berechnen, um ihren aktuellen Kontostand zu ermitteln. Dies kann zeitaufwändig und umständlich sein.

### Die Lösung
Mit unserer Lösung, dem "Crypto Portfolio", können Benutzer all ihre Coins und Gesamtguthaben an einem Ort einsehen. Sie geben einfach die Coins ein, die sie auf den verschiedenen Plattformen erworben haben, und erhalten den aktuellen Gesamtwert ihrer Investition.

### Technologien
#### Backend:

Node.js (v14.17.5)
TypeScript
Mongoose
MongoDB (v5.0.4)
#### Frontend:

Angular (v13.0.3)
Bootstrap (v5.1.3)
Node.js



## Barrierefreiheit und Best Practices

Unser Projekt legt großen Wert auf Barrierefreiheit und die Einhaltung von Best Practices:

#### Semantisches Markup: 
Wir verwenden HTML-Elemente entsprechend ihrer Bedeutung, um die Zugänglichkeit zu verbessern.
#### Tastaturbedienbarkeit: 
Alle Funktionen der Anwendung sind vollständig über die Tastatur zugänglich, was die Nutzung für Menschen mit motorischen Einschränkungen erleichtert.
#### Dokumentensprache:
Die Sprache des Dokuments ist angegeben, um Screenreadern und anderen Hilfsmitteln die richtige Interpretation des Inhalts zu ermöglichen.
#### Fokus-Ring: 
Ein sichtbarer Fokus-Ring ist bei jedem interaktiven Element vorhanden, damit Benutzer stets den Überblick behalten, welches Element gerade fokussiert ist.
#### Skip-Link: 
Es ist ein Skip-Link vorhanden, der es Benutzern ermöglicht, zurüch zur Haupseite zu springen und so die Navigation zu vereinfachen.


## WCAG-Kriterien
Wir haben die folgenden WCAG-Kriterien in unserem Projekt berücksichtigt, um sicherzustellen, dass die Anwendung für alle Benutzer zugänglich ist:
1. #### 1.1.1 Non-text Content:
   Alle nicht-textlichen Inhalte haben Textalternativen, damit sie von Screenreadern interpretiert werden können.
2. #### 1.4.3 Contrast (Minimum):
   Der Kontrast zwischen Text und Hintergrund beträgt mindestens 4,5:1, um die Lesbarkeit zu gewährleisten.
3. #### 1.4.12 Text Spacing:
   Nutzer können den Abstand von Text anpassen, ohne dass die Inhalte unlesbar oder unzugänglich werden.
4. #### 1.4.13 Content on Hover or Focus:
   Inhalte, die beim Hover oder Fokussieren erscheinen, sind zugänglich und beeinträchtigen nicht die Lesbarkeit oder Bedienbarkeit der Seite.
5. #### 1.3.5 Identify Input Purpose:
   Die Absicht von Eingabefeldern wird klar identifiziert, um die Nutzung zu erleichtern.
6. #### 1.4.1 Use of Color:
   Informationen werden nicht ausschließlich durch Farbe vermittelt, um auch farbenblinden Benutzern den Zugang zu ermöglichen.
7. #### 3.1.1 Language of Page:
   Die Hauptsprache der Seite ist im HTML-Dokument definiert.
8. #### 3.2.1 On Focus:
   Elemente verändern nicht ihr Verhalten, wenn sie den Fokus erhalten, es sei denn, der Benutzer wird darauf hingewiesen.
9. #### 2.5.3 Label in Name:
   Die Beschriftung von Bedienelementen enthält den zugänglichen Namen, um die Interaktion zu erleichtern.
10. #### 2.4.2 Page Titled:
    Jede Seite hat einen eindeutigen und beschreibenden Titel.
11. #### 2.4.7 Focus Visible:
    Der Fokus ist immer sichtbar, damit Benutzer stets wissen, welches Element aktuell ausgewählt ist.
12. #### 3.3.1 Error Identification:
    Fehler werden klar und verständlich identifiziert und beschrieben, damit Benutzer sie leicht korrigieren können.


## Projektinformation

Dieses Projekt wurde im Rahmen des Moduls Webtech 2 im Sommersemester 2024 erstellt. Die Aufgaben wurden wie folgt aufgeteilt:

* Yelyzaveta: Implementierung der WCAG-Kriterien 1 bis 6
* Evelina: Implementierung der WCAG-Kriterien 7 bis 12

## Build

Zuerst muss man das Backend und danach Frontend bauen. 

### Backend

1. Führen Sie zuerst `npm install` aus, um die Abhängigkeiten zu installieren.

### Frontend 

1. Führen Sie zuerst `npm install` aus, um die Abhängigkeiten zu installieren.
2. Führen Sie `ng build` aus, um das Projekt zu erstellen. Die Build-Artefakte werden im Verzeichnis `dist/` gespeichert.

## Run

### Backend

1. Führen Sie die lokale MongoDb-Instanz aus und rufen Sie die db-url ab (z. B. mongodb://localhost:27017/cryptoPortfolio).
2. Aktualisieren Sie `mongoURI` (Datenbank-URL) in `config/database.ts`.
3. `npm start` führt den Backend-Service aus. Es wird von `http://localhost:8000` aus zugänglich sein

### Frontend

Führen Sie `ng serve` für einen Entwicklungsserver aus. Navigieren Sie zu `http://localhost:4200/`. 

## Usage

Signup page 

![Signup page](/screenshots/signup.png)

Login Page

![Login page](/screenshots/login.png)

Home page

![Home page](/screenshots/home.png)

Add page

![Add page](/screenshots/add.png)

Edit page

![Edit page](/screenshots/edit.png)
