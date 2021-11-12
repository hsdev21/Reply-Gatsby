import * as React from "react"

export const onRenderBody = ({ setPostBodyComponents }) => {
  setPostBodyComponents([
   <link key="calendy-css" src="https://assets.calendly.com/assets/external/widget.css" />,
   <script key="calendy-js" src="https://assets.calendly.com/assets/external/widget.js" />
  ])
}