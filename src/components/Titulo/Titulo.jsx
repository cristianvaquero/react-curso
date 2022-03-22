import React from 'react'

function Titulo ( { tituloProps, subti, texto } ) {
    /* destructuracion */
    // const {tituloProps, subti, texto} = props
    // console.log(props)

    return (
        <div className='titulo'>
            <h1> {tituloProps} </h1>
            <h4> {subti} </h4>
            <p> {texto} </p>
        </div>
    )
}

export default Titulo