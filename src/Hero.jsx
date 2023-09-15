import React from 'react'
import heroImg from './assets/hero.svg'
const Hero = () => {
  return (
    <section className='hero'>
            <div className="hero-center">
                <div className="hero-title">
                    <h1>Contentful CMS</h1>
                    <p>Pitchfork schlitz tonx, coloring book celiac tousled succulents ascot affogato cardigan jianbing crucifix seitan. Synth man braid everyday carry try-hard pour-over keffiyeh slow-carb sriracha chillwave banjo gochujang kinfolk small batch mustache.</p>
                </div>
            </div>
            <div className="img-container">
                <img src={heroImg} alt="woman and the browser" className='img' />
            </div>
    </section>
  )
}

export default Hero