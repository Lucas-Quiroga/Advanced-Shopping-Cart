import { useState, useEffect } from "react"

export function useLocalStorage<T>(key: string, intialValue: T | (()=> T)) {
    const [value, setValue] = useState<T>(()=> {
        const jsonValue = localStorage.getItem(key)
        if (jsonValue != null) return JSON.parse(jsonValue)

        if (typeof intialValue === "function") {
            return(intialValue as () => T)()
        } else {
            return intialValue
        }
    })

    useEffect(() => {
      localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])
    
    return [value, setValue] as [typeof value, typeof setValue]
}

/**
 * es una función personalizada llamada useLocalStorage que utiliza los hooks useState y useEffect de React.

La función useLocalStorage tiene dos parámetros: key, que es una cadena que se utilizará como clave para almacenar el valor en el almacenamiento local del navegador; e initialValue, que es el valor inicial que se utilizará para la clave proporcionada.

La función devuelve un array que contiene dos elementos: value y setValue. El valor value es el valor actual de la clave proporcionada en el almacenamiento local, y setValue es una función que se puede utilizar para actualizar el valor almacenado.

La función useEffect se utiliza para almacenar el valor actual de la clave proporcionada en el almacenamiento local del navegador siempre que cambie el valor.

En resumen, la función useLocalStorage es útil cuando necesitas almacenar y recuperar datos del almacenamiento local del navegador de una manera fácil y eficiente.
 */