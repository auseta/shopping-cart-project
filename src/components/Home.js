import React, { useState } from 'react';
import image1 from '../images/image-1.jpg';
import image2 from '../images/image-2.jpg';
import image3 from '../images/image-3.jpg';
import image4 from '../images/image-4.jpg';
import image5 from '../images/image-5.jpg';

const Home = () => {

  const [sections, setSections] = useState({
    processors : false,
    mothers: false,
    RAM: false,
    videoCards: false
  })

  const showLink = (section) => {
    setSections({
      ...sections,
      [`${ section }`] : true
    })
  }

  const hideLink = (section) => {
    setSections({
      ...sections,
      [`${ section }`] : false
    })
  }

  return (
    <div className='home'>
      <img className='home__img' src={ image1 } alt='hero' />
      <h2 className='home__h2' >GAMING CULTURE SINCE 2021</h2>
      <div className='home__section'>
        <div className='home__article' onMouseOver={ () => showLink('processors') } onMouseOut={ () => hideLink('processors') }  >
          <img className='home__img--article' src={ image2 } alt='processors' />
        </div>
        <div className='home__article' onMouseOver={ () => showLink('videoCards') } onMouseOut={ () => hideLink('videoCards') } >
          <img className='home__img--article' src={ image3 } alt='video-cards' />
        </div>
        <div className='home__article'  onMouseOver={ () => showLink('mothers') } onMouseLeave={ () => hideLink('mothers') }>
          <img className='home__img--article' src={ image4 } alt='mothers' />
        </div>
        <div className='home__article' onMouseOver={ () => showLink('RAM') } onMouseOut={ () => hideLink('RAM') } >
          <img className='home__img--article' src={ image5 } alt='RAM' />
        </div>
      </div>
      <h2 className='home__h2' >
          We have the best components you need for your PC and that fit your needs. We have the best technicians to help and advise you on the assembly and maintenance of your PC.
      </h2>
    </div>
  )
}

export default Home;