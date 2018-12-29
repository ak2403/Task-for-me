import React from 'react'

const TextInput = (props) => {
    let { type, text, placeholder, onChange } = props
    return <div className="rui-form-element">
        <label>
            {text}
        </label>
        <input
            type={type}
            placeholder={placeholder}
            onChange={onChange} />
    </div>
}

export default TextInput