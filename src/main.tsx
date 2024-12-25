import './style.css'
/*
import typescriptLogo from './typescript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.ts'
*/
import { Amplify } from 'aws-amplify';
import amplifyconfig from './amplifyconfiguration.json';
import React from "react";
import ReactDOM from "react-dom/client";
import TableData from "./TableData.jsx"; // Import the TableData component
Amplify.configure(amplifyconfig);

const rootElement = document.getElementById("root") as HTMLElement;
const root = ReactDOM.createRoot(rootElement);

const App: React.FC = () => {
  console.log("App component is rendering");
  return (
    <div className="App">
      <h1>Welcome to the DynamoDB Viewer</h1>
      <TableData />
    </div>
  );
}

// Render the App component to the DOM
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);




/*
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite and TypeScript logos to learn more
    </p>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
*/