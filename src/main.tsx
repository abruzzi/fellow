import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {RelayEnvironmentProvider} from "react-relay";
import environment from "./relay/environment.ts";
import {App} from "./App.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RelayEnvironmentProvider environment={environment}>
      <App />
    </RelayEnvironmentProvider>
  </React.StrictMode>,
)
