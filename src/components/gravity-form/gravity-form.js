import React from "react"
import GravityFormForm from "gatsby-gravityforms-component"
import { AllGravityData ***REMOVED*** from "../../hooks/gravityforms"
import { navigate ***REMOVED*** from "gatsby"
import "./gravityFormStyles.scss"

function handleError({ values, error, reset ***REMOVED***) {
  console.log(error)
  console.log(values)
***REMOVED***

function handleSuccess({ values, reset, confirmations ***REMOVED***) {
  reset()
  navigate("/contact/thank-you")
***REMOVED***

const GravityForm = props => (
  <GravityFormForm
    id={1***REMOVED***
    formData={AllGravityData()***REMOVED***
    lambda={`/.netlify/functions/newGfEntry`***REMOVED***
    successCallback={handleSuccess***REMOVED***
    errorCallback={handleError***REMOVED***
    className={props.className***REMOVED***
  />
)

export default GravityForm
