import React, { Fragment } from "react"

const IconWithText = ({ component, style, children }) => {
  const Component = component
  return (
    <Fragment>
      <Component style={{ ...style, verticalAlign: "middle" }} />
      <span style={{ ...style, verticalAlign: "middle" }}>{children}</span>
    </Fragment>
  )
}

export default IconWithText
