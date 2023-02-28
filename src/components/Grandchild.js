import { useContext } from "react"

import { NumberContext } from "../Contexts/NumberProvider"

const GrandChild = () => {
  const [number, setNumber] = useContext(NumberContext)

  return (
    <div>
      <h1>{number}</h1>
      <button
        onClick={() => {
          console.log("yessss")
          setNumber(number + 1)
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          console.log("noooo")
          setNumber(number - 1)
        }}
      >
        -
      </button>
    </div>
  )
}

export default GrandChild
