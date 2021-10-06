import React from "react"
import SlickSlider from "react-slick"
import PropTypes from "prop-types"

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import "./slider.scss"

const Slider = ({ children ***REMOVED***) => {
  let settings = {
    autoplay: true,
    autoplaySpeed: 10000,
    infinite: true,
    speed: 700,
    fade: true,
    cssEase: "linear",
    dots: true,
    arrows: true,
  ***REMOVED***

  return (
    <div className={`sliderWrap`***REMOVED***>
      <SlickSlider {...settings***REMOVED***>{children***REMOVED***</SlickSlider>
    </div>
  )
***REMOVED***

Slider.propTypes = {
  children: PropTypes.node.isRequired,
***REMOVED***

export default Slider
