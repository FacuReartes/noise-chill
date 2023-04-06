import React, { useEffect, useState } from 'react'
import sound from '../Sounds/thunder.mp3'
import './SoundBox.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Slider } from '@mui/material'

function SoundBox(props) {

  const [volume, setVolume] = useState(0.5)
  const [isClicked, setIsClicked] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)
  const [audio, setAudio] = useState(new Audio(props.sound))

  const handleSlider = (event, newVolume) => {
    setVolume(newVolume)
    audio.volume = newVolume
  }

  const handleSliderClick = (event) => {
    event.stopPropagation()
  }

  const handleClick = (event) => {
    setIsClicked(!isClicked);
    if (isPlaying) {
      audio.pause()
      setIsPlaying(!isPlaying)
    }
    else {
      audio.play()
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <div className={`container ${isClicked ? 'active' : ''}`} onClick={handleClick}>
      <p className='container__title'>{props.name}</p>
      <FontAwesomeIcon className='container__icon' icon={props.icon}/>
      <Slider defaultValue={0.5} aria-label='Volume' min={0} max={1} step={0.02} onChange={handleSlider} onClick={handleSliderClick}
       className={`container__slider ${isClicked && 'active'}` }
       sx={{color: '#fff'}}/>
    </div>
  )
}

export default SoundBox