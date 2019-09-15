import React from "react"

const IconWithText = ({ component, className, style, children }) => {
  const Component = component
  return (
    <div className={className} style={style}>
      <Component style={{ verticalAlign: "middle" }} />
      <span style={{ verticalAlign: "middle" }}>{children}</span>
    </div>
  )
}

export default IconWithText
