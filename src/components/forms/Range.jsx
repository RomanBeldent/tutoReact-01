export function Range({ placeholder, value, onChange, min, max }) {
    return <div className="input-group mb-3">
        <label htmlFor="customRange1" className="form-label">{placeholder}</label>
        <input
            type="range"
            className="form-range"
            id="customRange1"
            min={min}
            max={max}
            value={value}
            onChange={(e) => onChange(e.target.value)}
        />
    </div>
}