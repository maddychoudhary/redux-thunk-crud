import React from 'react'

const Button = (props) => {
    const { id, className, name, handleButton, idName } = props
    return (
        <div id={id}>
            <button onClick={handleButton} type="button" id={idName} className={className}>{name}</button>
        </div>
    )
}

export default Button;
