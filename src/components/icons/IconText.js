import React from "react"
import { Icon } from "antd"

const IconText = ({ component, children, style }) => {
  return (
    <div>
      <Icon component={component} style={style} />
      <span style={style}>{children}</span>
    </div>
  )
}

export default IconText
