import { useState } from 'react';
import CampoNumero from '../CampoNumero';

// Componente de formulário para entrada de números
const Formulario = ({ calcular }) => {
    const [valorX, setValorX] = useState('');
    const [valorY, setValorY] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Verifique se os valores estão válidos antes de chamar calcular
        if (parseFloat(valorX) >= 0 && parseFloat(valorY) >= 0 && parseFloat(valorX) <= parseFloat(valorY)) {
            calcular(valorX, valorY);
        } else {
            alert("Por favor, insira valores válidos: X não deve ser maior que Y e ambos devem ser não negativos.");
        }
    };

    return (
        <section className="formulario">
            <form onSubmit={handleSubmit}>
                <h2>Verificador de Menor Múltiplo Comum</h2>
                <CampoNumero
                    label='Número x:'
                    value={valorX}
                    onChange={(e) => setValorX(e.target.value)} // Atualiza valorX livremente
                />
                <CampoNumero
                    label='Número y:'
                    value={valorY}
                    onChange={(e) => setValorY(e.target.value)} // Atualiza valorY livremente
                />
                <button type="submit">Calcular</button>
            </form>
        </section>
    );
};

export default Formulario;
