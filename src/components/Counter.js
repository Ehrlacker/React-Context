import { React, useState, createContext, useContext } from "react"

const NumberContext = createContext(null)

const Counter = () => {
  const [number, setNumber] = useState(0)

  //   const addNumber = () => {
  //     setNumber(number + 1)
  //   }

  //   const subtractNumber = () => {
  //     setNumber(number - 1)
  //   }

  return (
    <NumberContext.Provider value={{ number, setNumber }}>
      <div>
        <h1>{number}</h1>
        {/* <button onClick={addNumber}>+</button>
        <button onClick={subtractNumber}>-</button> */}
        <Child />
      </div>
    </NumberContext.Provider>
  )
}
export const Child = () => {
  return <GrandChild />
}

export const GrandChild = () => {
  const { number, setNumber } = useContext(NumberContext)

  return (
    <div>
      <button
        onClick={() => {
          setNumber(number + 1)
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setNumber(number - 1)
        }}
      >
        -
      </button>
    </div>
  )
}

export default Counter
