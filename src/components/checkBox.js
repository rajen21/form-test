const Checkbox = ({ value, onChange }) => {
    return (
        <div className="form-check d-flex justify-content-center">
            <input
                className="form-check-input me-2"
                type="checkbox"
                checked={value}
                onChange={() => onChange((prevState) => !prevState)}
                id="flexCheckDefault"
            />
            <label className="form-check-label" htmlFor="flexCheckDefault">
                I agree to the Terms and Conditions.
            </label>
        </div>
    )
};

export default Checkbox;