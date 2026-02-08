// apps/desktop/src/main.tsx
//
// Entry для desktop-приложения.
// Делаем main “чистым”:
// 1) подключаем общий init API
// 2) рендерим App

import React from 'react';
import ReactDOM from 'react-dom/client';

// Важно: этот импорт должен выполниться ДО любых вызовов SDK,
// чтобы initApiClient успел выставить baseUrl.
import './shared/api/init';

import { App } from './App';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
