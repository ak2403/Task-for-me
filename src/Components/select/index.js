import React from 'react'

const Select = (props) => {
    let { text, options, onChange, value } = props

    let option_DOM = options.map(list => {
        return <option value={list.value} selected={value === list.value ? 'selected' : ''}>{list.name}</option>
    })

    return (<div className="rui-form-element">
        <label>
            {text}
        </label>
        <select onChange={onChange}>
            <option selected="true" disabled="disabled">Choose option</option>
            {option_DOM}
        </select>
    </div >)
}

Select.defaultValue = {
    options: []
}

export default Select