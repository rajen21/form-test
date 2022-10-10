const Input = ({ label, type, id, placeholder, value, onChange, isRequired, pattern, title }) => {
    return (
        <div className="mb-3">
            <label htmlFor={id} className="form-label">{label}</label>
            <input type={type} className="form-control" id={id} value={value} 
                onChange={(e) => onChange(e.target.value)} 
                placeholder={placeholder} 
                title={title}
                pattern={pattern}
                required={isRequired} />
        </div>
    )
};

export default Input;
