const Button = ({ label, disabled }) => {
    return (
        <div className="d-flex justify-content-center">
            <button type="submit" className={`btn btn-primary ${disabled ? 'disabled' : ''}`}>{label}</button>
        </div>
    )
};

export default Button;