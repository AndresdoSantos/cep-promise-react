import React, { useState } from 'react';
import cep from 'cep-promise';
import InputMask from 'react-input-mask';

import './styles/main.css';

export default function App() {
  const [info, setInfo] = useState('');
  const [docs, setDocs] = useState([]);

  async function handleSubmit(event) {
    event.preventDefault();

    await cep(info)
      .then(response => {
        setDocs([response]);
        console.log(docs);
      });
    };

  return (
    <div className="container">
      <div className="wrapper">
        <h3>Busque o 
          <span className="color-one"> C</span>
          <span className="color-two">E</span>
          <span className="color-tree">P</span>
        </h3>
        <InputMask 
          className="input"
          mask="99999-999"
          maskChar="-"
          type="text"
          name="cep"
          placeholder="Informe o CEP"
          value={info}
          onChange={event => setInfo(event.target.value)}  
        />
        <ul>
          {docs.map(doc => (
            <div className="content">
              <li key={doc.cep}>
                <span>
                  <h4>Estado</h4>
                  <p>{doc.state}</p>
                </span>

                <span>
                  <h4>Cidade</h4>
                  <p>{doc.city}</p>
                </span>

                <span>
                  <h4>Bairro</h4>
                  <p>{doc.neighborhood}</p>
                </span>

                <span>
                  <h4>Rua</h4>
                  <p>{doc.street}</p>
                </span>
              </li>
            </div>
          ))}
          </ul>
          <button 
            className="button"
            type="submit"
            onClick={handleSubmit}  
          >
          <p>Enviar</p>
        </button>
      </div>
    </div>
  )
};
