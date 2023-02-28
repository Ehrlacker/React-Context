import { React, useState, createContext } from "react"

export const NumberContext = createContext()

export const NumberProvider = (props) => {
  const [number, setNumber] = useState(0)
  return (
    //Passing down the values to the context
    <NumberContext.Provider value={[number, setNumber]}>
      {/* Allows all children to access the values */}
      {props.children}
    </NumberContext.Provider>
  )
}

export default NumberContext
