import React from 'react'
import { useState } from 'react'


function ItemListContainer( { greeting, manejarCount } ) {
    // console.log(children)
   
    const valorInicial = 1; //El número inicial de un contador, por sentido común tiene que ser mayor o igual a 1
    const stock = 10; //Limita el count, pensado en el stock de un producto
    
    // const [ count, setCount ] = useState( 0 )
    // const [ bool, setBool ] = useState ( true )

    // useEffect( () => {
        //     //acciones
    //     console.log("El 1 se ejecuta siempre 1")
    // })

    // useEffect( () => {
    //     //acciones
    //     console.log("Una sola vez despues del montado del componente 2")
    // }, [])

    // useEffect( () => {
    //     //acciones
    //     console.log("Solo cuando cambie bool 3")
    // }, [bool]) //Puedo agregar mas estados, filtros...
    
    // let count = 0;
    // const manejarCount = () => {
    //     // count=count+1
    //     // count ++
    //     // count =+ 1
    //     // console.log(count)
    //     setCount ( count + 1)
    // }
    

    // let datos = Date()
    // console.log('montaje y renderizando 4')

    // console.log(estado)

    

    //hook de estado
    const [ count, setCount] = useState(valorInicial)
    
    const addProduct = (num) => {
        setCount(count + num)
    }


    return (
    <div>
        {greeting}
        {/* <h2> {children} </h2> */}
        <br />

        <p> { count } </p>
        {/* <p> { datos } </p> */}
        {/* <button onClick = { () => setBool (!bool) } > Bool </button> */}
        <button onClick = { () => addProduct(-1) } disabled = {count === valorInicial ? true : null}> - </button>
        <button onClick = { () => manejarCount(count) } disabled = {stock === 0 ? true : null}> Agregar al carrito </button>
        <button onClick = { () => addProduct(+1) } disabled = {count === stock ? true : null}> + </button>
        {/* Cada vez que presiono un boton "onClick", me dispara un evento */}

        
    </div>
  )
}

export default ItemListContainer;