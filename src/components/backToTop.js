import React, { useState, useEffect ***REMOVED*** from "react"
import { makeStyles ***REMOVED*** from "@material-ui/core/styles"
import ExpandLessIcon from "@material-ui/icons/ExpandLess"
import IconButton from "@material-ui/core/IconButton"

const useStyles = makeStyles(theme => ({
  toTop: {
    zIndex: 2,
    position: "fixed",
    bottom: "2vh",
    backgroundColor: "#DCDCDC",
    color: "black",
    "&:hover, &.Mui-focusVisible": {
      transition: "0.3s",
      color: "#397BA6",
      backgroundColor: "#DCDCDC",
  ***REMOVED***
    [theme.breakpoints.up("xs")]: {
      right: "5%",
      backgroundColor: "rgb(220,220,220,0.7)",
  ***REMOVED***
    [theme.breakpoints.up("lg")]: {
      right: "5%",
  ***REMOVED***
***REMOVED***
***REMOVED***))

const BackToTop = ({ showBelow ***REMOVED***) => {
  const classes = useStyles()

  const [show, setShow] = useState(showBelow ? false : true)

  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow(true)
    ***REMOVED*** else {
      if (show) setShow(false)
    ***REMOVED***
  ***REMOVED***

  const handleClick = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` ***REMOVED***)
  ***REMOVED***

  useEffect(() => {
    if (showBelow) {
      window.addEventListener(`scroll`, handleScroll)
      return () => window.removeEventListener(`scroll`, handleScroll)
    ***REMOVED***
  ***REMOVED***)

  return (
    <div>
  ***REMOVED***show && (
        <IconButton
          onClick={handleClick***REMOVED***
          className={classes.toTop***REMOVED***
          aria-label="to top"
          component="span"
        >
          <ExpandLessIcon />
        </IconButton>
      )***REMOVED***
    </div>
  )
***REMOVED***
export default BackToTop
