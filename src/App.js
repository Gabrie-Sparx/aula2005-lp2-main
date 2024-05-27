import React, { cloneElement } from 'react';
import InputCustomizado from '../src/Inputcustomizado.tsx';
import '../src/App.css';

const App = () => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [phone, setPhone] = React.useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form submitted!');
  };

  return (
    <div id="contato">
      <h2>Entre em contato</h2>
      <p></p>
    <form onSubmit={handleSubmit}>
    
      <div >
      <label>
        <InputCustomizado
          type="text"
          defaultValue="Nome"
          placeholder=""
        />
      </label>
      </div>
      <div class="campos">
      <label>
        <InputCustomizado
          type="email"
          defaultValue="E-mail"
          placeholder=""
        />
      </label>
      </div>
      
      <div>
      <label>
        <InputCustomizado
          type="number"
          defaultValue="Telefone"
          placeholder=""
        />
      </label>
      </div>
      <div></div>
      <div>
        <p></p>
        <p id="botao">
        <button type="submit">Fatec: Enviar mensagem</button>
        </p>
      </div>
    </form>
    </div>
  );
};

export default App;