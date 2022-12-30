import React, { useState } from 'react';
import image1 from '../images/image-1.jpg';
import image2 from '../images/image-2.jpg';
import image3 from '../images/image-3.jpg';
import image4 from '../images/image-4.jpg';
import image5 from '../images/image-5.jpg';

const Processors = () => {
  return (
    <div className='component'>
      <h3>Processors</h3>
      <button>BUY</button>
    </div>
  )
}

const Mothers = () => {
  return (
    <div className='component'>
      <h3>Mothers</h3>
      <button>BUY</button>
    </div>
  )
}

const VideoCards = () => {
  return (
    <div className='component'>
      <h3>Video Cards</h3>
      <button>BUY</button>
    </div>    
  )
}

const RAM = () => {
  return (
    <div className='component'>
      <h3>RAM</h3>
      <button>BUY</button>
    </div>    
  )
}

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

  console.log(sections);

  return (
    <div className='home'>
      <img src={ image1 } alt='hero' />
      <h2>GAMING CULTURE SINCE 2021</h2>
      <div className='sections'>
        <div className='section' onMouseOver={ () => showLink('processors') } onMouseOut={ () => hideLink('processors') }  >
          <img src={ image2 } alt='processors' />
          { sections.processors ? <Processors /> : null }
        </div>
        <div className='section' onMouseOver={ () => showLink('videoCards') } onMouseOut={ () => hideLink('videoCards') } >
          <img src={ image3 } alt='video-cards' />
          { sections.videoCards ? <VideoCards /> : null }
        </div>
        <div className='section'  onMouseOver={ () => showLink('mothers') } onMouseLeave={ () => hideLink('mothers') }>
          <img src={ image4 } alt='mothers' />
          { sections.mothers ? <Mothers /> : null }
        </div>
        <div className='section' onMouseOver={ () => showLink('RAM') } onMouseOut={ () => hideLink('RAM') } >
          <img src={ image5 } alt='RAM' />
          { sections.RAM ? <RAM /> : null }
        </div>
      </div>
    </div>
  )
}

export default Home;