// App.js

import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import ResultadoDivisao from './componentes/ResultadoDivisao';

function App() {
    const [resultado, setResultado] = useState(null);
    const [divisoes, setDivisoes] = useState([]);

    const calcular = async (x, y) => {
        try {
            const response = await fetch(`http://localhost:8000/galeria/calcular-mmc/?x=${x}&y=${y}`);
            const data = await response.json();

            if (response.ok) {
                setResultado(data.resultado);
                setDivisoes(data.divisoes);  // Atualizando as divisões
            } else {
                alert(data.error);
            }
        } catch (error) {
            console.error("Erro ao chamar a API:", error);
            alert("Erro ao calcular o MMC. Tente novamente mais tarde.");
        }
    };

    return (
        <div className="App">
            <Banner />
            <Formulario calcular={calcular} />
            <ResultadoDivisao resultado={resultado} divisoes={divisoes} />  // Passando divisões
        </div>
    );
}

export default App;
