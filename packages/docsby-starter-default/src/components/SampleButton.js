import React from "react"

const SampleButton = ({ children, primary }) => {
  return (
    <button className={`button ${primary ? "--primary" : ""}`}>
      {children}
    </button>
  )
}

export default SampleButton
