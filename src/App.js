import { faCar, faCity, faCloudBolt, faCloudRain, faDove, faFire, faLeaf, faMoon, faMugHot, faUmbrellaBeach, faWater, faWind } from '@fortawesome/free-solid-svg-icons';
import './App.css';
import SoundBox from './soundBox/SoundBox';
import { traffic, sea, river, thunder, rain, wind, night, cityNight, leaves, birds, coffe, fireplace } from './Sounds/index.js'

function App() {

  const soundsData = [
    {key:0, name:'Birds', icon:faDove, sound:birds},
    {key:1, name:'Rain', icon:faCloudRain, sound:rain},
    {key:2, name:'Wind', icon:faWind, sound:wind},
    {key:3, name:'Night', icon:faMoon, sound:night},
    {key:4, name:'Coffe', icon:faMugHot, sound:coffe},
    {key:5, name:'Fire', icon:faFire, sound:fireplace},
    {key:6, name:'River', icon:faWater, sound:river},
    {key:7, name:'Leaves', icon:faLeaf, sound:leaves},
    {key:8, name:'City', icon:faCity, sound:cityNight},
    {key:9, name:'Thunder', icon:faCloudBolt, sound:thunder},
    {key:10, name:'Sea', icon:faUmbrellaBeach, sound:sea},
    {key:11, name:'Traffic', icon:faCar, sound:traffic},
  ]

  const mySounds = soundsData.map((i) => (
    <SoundBox name={i.name} icon={i.icon} key={i.key} sound={i.sound}/>
  ))

  return (
    <div className="App">
      <div className='header'>
        <h1 className='header__title'>Noise & Chill</h1>
        <p className='header__text'>Click the icons to play calm and relaxing noises</p>
      </div>
      <div className='sounds__container'>
        {mySounds}
      </div>
      <div className='footer'>
        <p className='footer__text'>Made by Facundo Reartes</p>
      </div>
    </div>
  );
}

export default App;
