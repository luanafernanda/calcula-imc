import { useState } from 'react';
import './styles.css';

const IMCForm = () => {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [result, setResult] = useState(null);
  const [classific, setClassific] = useState("");

  const calculaIMC = (altura, peso) => {
    return peso / ((altura / 100) ** 2);
  }

  const submit = (event) => {
    event.preventDefault();

    const imc = calculaIMC(parseFloat(altura), parseFloat(peso));

    setResult(imc.toFixed(2));

    if (imc < 18.5) setClassific("Abaixo do peso");
    else if (imc >= 18.5 && imc <= 24.9) setClassific("Peso normal");
    else if (imc >= 25 && imc <= 29.9) setClassific("Sobrepeso");
    else if (imc >= 30 && imc <= 34.9) setClassific("Obesidade grau 1");
    else if (imc >= 35 && imc <= 39.9) setClassific("Obesidade grau 2");
    else setClassific("Obesidade grau 3");
  }

  return (
    <div className="container"> {/* Ajustado aqui */}
      <form onSubmit={submit}>
        <div>
          <label htmlFor="peso">Peso (kg): </label>
          <input type="number" id="peso" value={peso} onChange={e => setPeso(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="altura">Altura (cm): </label>
          <input type="number" id="altura" value={altura} onChange={e => setAltura(e.target.value)} required />
        </div>
        <button type="submit">Calcular</button>
      </form>
      {result && (
        <div className="results"> {/* Ajustado aqui */}
          <p>IMC: {result}</p>
          <p>Classificação: {classific}</p>
        </div>
      )}
    </div>
  );
}

export default IMCForm;
