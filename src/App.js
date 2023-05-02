import React, { useState } from 'react';
import './App.css';

function App() {
  const [password, setPassword] = useState('');

  const generatePassword = () => {
    const passwordLength = 10; // define o tamanho da senha
    const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'; // define os caracteres usados para gerar a senha
    let result = '';
    for (let i = 0; i < passwordLength; i++) {
      result += charset.charAt(Math.floor(Math.random() * charset.length));
    }
    setPassword(result); // atualiza o estado com a senha gerada
  }

  return (
    <div className="color-change-2x" style={{display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>Gerador de Senhas</h1>
      <button className="shadow-drop-center" onClick={generatePassword}>
        Gerar Senha
      </button>
      <h2>{password}</h2>
    </div>
  );
}

export default App;
