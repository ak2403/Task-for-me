import React from 'react'
import uuid from 'uuid/v4'

const Table = (props) => {
    let { columns, data } = props

    let columnDOM = columns.map(list => {
        return <div key={uuid()} className="rui-table-single-header">
            {list.text}
        </div>
    })

    let dataDOM = data.map(list => {
        let data_row = columns.map(column => {
            if(column.hasOwnProperty('render')){
                return column.render(list)
            }
            return <div>{list[column.dataIndex]}</div>
        })
        return <div key={uuid()} className="rui-table-row">
            {data_row}
        </div>
    })

    return (<div className="rui-table">
        <div className="rui-table-header">
            {columnDOM}
        </div>
        <div className="rui-table-tbody">
            {dataDOM}
        </div>
    </div>)
}

export default Table