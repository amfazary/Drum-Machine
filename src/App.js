import { useState } from "react";
import DrumControl from "./DrumContol";
import Keyboard from "./Keyboard";

function App() {

  const firstSoundGroup= [
    {
        "heyCode": 81,
        "key": "Q",
        "id": "Heater-1",
        "url": "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3"
    },
    {
        "heyCode": 87,
        "key": "W",
        "id": "Heater-2",
        "url": "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3"
    },
    {
        "heyCode": 69,
        "key": "E",
        "id": "Heater-3",
        "url": "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"
    },
    {
        "heyCode": 65,
        "key": "A",
        "id": "Heater-4",
        "url": "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3"
    },
    {
        "heyCode": 83,
        "key": "S",
        "id": "Clap",
        "url": "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3"
    },
    {
        "heyCode": 68,
        "key": "D",
        "id": "Open-HH",
        "url": "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3"
    },
    {
        "heyCode": 90,
        "key": "Z",
        "id": "Kick-n'-Hat",
        "url": "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3"
    },
    {
        "heyCode": 88,
        "key": "X",
        "id": "Kick",
        "url": "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3"
    },
    {
        "heyCode": 67,
        "key": "C",
        "id": "Closed-HH",
        "url": "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3"
    }
  ]

  const secondSoundGroup = [
    {
        "heyCode": 81,
        "key": "Q",
        "id": "Chord-1",
        "url": "https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3"
    },
    {
        "heyCode": 87,
        "key": "W",
        "id": "Chord-2",
        "url": "https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3"
    },
    {
        "heyCode": 69,
        "key": "E",
        "id": "Chord-3",
        "url": "https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3"
    },
    {
        "heyCode": 65,
        "key": "A",
        "id": "Shaker",
        "url": "https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3"
    },
    {
        "heyCode": 83,
        "key": "S",
        "id": "Open-HH",
        "url": "https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3"
    },
    {
        "heyCode": 68,
        "key": "D",
        "id": "Closed-HH",
        "url": "https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3"
    },
    {
        "heyCode": 90,
        "key": "Z",
        "id": "Punchy-kick",
        "url": "https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3"
    },
    {
        "heyCode": 88,
        "key": "X",
        "id": "Side-stick",
        "url": "https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3"
    },
    {
        "heyCode": 67,
        "key": "C",
        "id": "Snare",
        "url": "https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3"
    }
  ]

  const soundsName = {
    heaterKit: "Heater kit",
    smoothPianoKit: "Smooth Piano Kit" 
  }

  const soundsGroup = {
    heaterKit: firstSoundGroup,
    smoothPianoKit: secondSoundGroup
  }

  const [soundType, setSoundType]= useState("heaterKit");
  const [sounds, setSounds] = useState(soundsGroup[soundType]);
  const [display, setDisplay] = useState(soundsName[soundType]);
  const [volume, setVolume] = useState(1);
  const [power, setPower] = useState(true);
  const activeClass = "active";

  const stop = ((activeClass)=>{
    setPower(!power);
    const button = document.getElementById("button-1");
    button.classList.add(activeClass);
    setTimeout(() => button.classList.remove(activeClass), 250);
  })

  const handleVolumeChange= (e) => {
    setVolume(e.target.value)
  }

  const play = (key, activeClass) => {
    const audio = document.getElementById(key);
    const button = audio.parentElement;
    setDisplay(button.getAttribute("id"));
    button.classList.add(activeClass);
    setTimeout(() => button.classList.remove(activeClass), 250);
    audio.currentTime = 0;
    audio.play();
  }

  const changeSounds = (activeClass) => {
    const button = document.getElementById("button-2");
    button.classList.add(activeClass);
    setTimeout(() => button.classList.remove(activeClass), 250);
    if (soundType === "heaterKit") {
      setSounds(secondSoundGroup);
      setSoundType("smoothPianoKit");
      setDisplay(soundsName["smoothPianoKit"]);
    } else {
      setSounds(firstSoundGroup);
      setSoundType("heaterKit");
      setDisplay(soundsName["heaterKit"]);
    }
  }

  const setKeyVolume = () => {
    const audios = sounds.map(sound => document.getElementById(sound.key))
    audios.forEach(audio => {
      if(audio) {
        audio.volume = volume; 
      }
    })
  }

  return (
    <div id="drum-machine">
      { setKeyVolume() }
      <div className="wrapper">
        <Keyboard 
          activeClass = { activeClass }
          play={play} 
          sounds={sounds} 
          power= { power }
        />
        <DrumControl
          changeSounds={ changeSounds } 
          name={ display } 
          volume={ volume } 
          handleVolumeChange= { handleVolumeChange } 
          power= { power }
          stop= { stop }
          activeClass= { activeClass }
        />
      </div>
    </div>
  );
}

export default App;
