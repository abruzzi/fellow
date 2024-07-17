import React from 'react'
import ReactDOM from 'react-dom/client'
import Board from './Board.tsx'
import './index.css'
import {RelayEnvironmentProvider} from "react-relay";
import environment from "./relay/environment.ts";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RelayEnvironmentProvider environment={environment}>
      <Board />
    </RelayEnvironmentProvider>
  </React.StrictMode>,
)
