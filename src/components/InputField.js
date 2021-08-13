import React from 'react'
import "../styles/auth.css"

const InputField = (props) => {
    const { label, type, name, placeholder, value, change } = props
    return (
        <div className="mb-3" style={{ width: "100%" }}>
            <label HTMLfor={label} className="form-label">{label}</label>
            <input type={type} className="form-control" placeholder={placeholder} name={name} value={value} onChange={change} />
        </div>
    )
}

export default InputField;
