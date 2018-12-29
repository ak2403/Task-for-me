import React from 'react'

const Button = (props) => {
    let { type, text, onClick } = props
    return <div className="rui-form-element">
        <button type={type}>{text}</button>
    </div>
}

export default Button