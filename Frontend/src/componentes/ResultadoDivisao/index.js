// ResultadoDivisao.js

import './ResultadoDivisao.css';
//exibe o resultado do mmc
const ResultadoDivisao = ({ resultado, divisoes }) => {
    // Retorna nulo se não houver resultado
    if (!resultado) return null;

    return (
        <section className="resultado-divisao">
            <h2>Resultado do MMC: {resultado}</h2>
            <h3>Divisões:</h3>
            <ul>
                {divisoes.map((item, index) => (
                    <li key={index}>{item}</li>
                ))}
            </ul>
        </section>
    );
}

export default ResultadoDivisao;
