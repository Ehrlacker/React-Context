import { React, useState, createContext } from "react"
import { useContext } from "react"
import Child from "../components/Child"
import NumberContext from "../Contexts/NumberProvider"
import { NumberProvider } from "../Contexts/NumberProvider"

const Counter = () => {
  return (
    //Provider has to wrapped around all components that need access to it.
    <NumberProvider>
      <div>
        <Child />
      </div>
    </NumberProvider>
  )
}

export default Counter
