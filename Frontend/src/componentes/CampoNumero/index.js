import './CampoNumero.css'

// Componente para entrada de número
const CampoNumero = (props) => {
    const {label, value, onChange} = props
    
    const handleChange = (e) => {
        const inputValue = e.target.value;
        
        // Verifica se o valor é um número e se é maior ou igual a um
        if (inputValue === '' || parseFloat(inputValue) >= 1) {
            onChange(inputValue); 
        }
    };
    return (
        <div className="campo-numero">
            <label>{props.label}</label>
            <input placeholder='Número '
                value={value}
                type="number"
                onChange={onChange}
                min={1}/>
        </div>
    )
}

export default CampoNumero;