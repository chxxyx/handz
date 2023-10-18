import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import "./style/App.css"

const root = ReactDOM.createRoot(document.getElementById('root'));

// createRoot로 생성한 root를 사용하여 앱을 렌더링합니다.
root.render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);
