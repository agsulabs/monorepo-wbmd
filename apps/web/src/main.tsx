/**
 * apps/web/src/main.tsx
 *
 * Main должен быть “чистым”:
 * - импорт init
 * - render App
 */

import React from 'react';
import ReactDOM from 'react-dom/client';
import './shared/api/init';
import { App } from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
