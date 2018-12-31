import React from 'react'
import uuid from 'uuid/v4'

const Table = (props) => {
    let { data } = props

    let dataDOM = data.map(list => {
        return <div key={uuid()}>
            <div>{list.title}</div>
        </div>
    })

    return (<div>
        <div>
            {dataDOM}
        </div>
    </div>)
}

export default Table