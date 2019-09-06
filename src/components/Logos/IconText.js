import React from "react"
import { Icon } from "antd"

const IconText = ({ component, children, style }) => {
  return (
    <div style={{ margin: "0em 1em" }}>
      <Icon component={component} style={{ ...style, marginRight: "10px" }} />
      <span style={style}>{children}</span>
    </div>
  )
}

export default IconText
