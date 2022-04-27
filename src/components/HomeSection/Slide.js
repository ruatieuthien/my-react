import React, { useState } from 'react'
// import Data from './Data'

const Slide = (props) => {
    const [current, setCurrent] = useState(0)

    const length = props.slides.length

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if (!Array.isArray(props.slides) || props.slides.length <= 0) {
        return null
    }
  return (
    <>
          <section className='slider'>
              <div className='control-btn'>
                  <button className='prev' onClick={prevSlide}>
                      <i className='fas fa-caret-left'></i>
                  </button>
                  <button className='next' onClick={nextSlide}>
                      <i className='fas fa-caret-right'></i>
                  </button>
              </div>
          </section>

          {props.slides.map((slide, index) => {
              return (
                  <div className={index === current ? "slide active" : "slide" } key={index}>
                        {index === current && <img src={slide.images} alt='Home Image' />}
                  </div>
              )
          })}
     </>
  )
}

export default Slide