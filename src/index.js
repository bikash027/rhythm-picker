import WaveSurfer from 'wavesurfer.js';
const timestamps = [];

const wavesurfer = WaveSurfer.create({
    container: '#waveform',
    waveColor: '#4F4A85',
    progressColor: '#383351',
    url: '/iPhone.opus',
})

wavesurfer.on('finish', () => {
    console.log('Finish');
    console.log(timestamps)
})

wavesurfer.once('decode', () => {
    // const slider = document.querySelector('input[type="range"]')
  
    // slider.addEventListener('input', (e) => {
    //   const minPxPerSec = e.target.valueAsNumber
    //   wavesurfer.zoom(minPxPerSec)
    // })
  
    document.querySelector('button').addEventListener('click', () => {
      wavesurfer.playPause()
    })
})

document.addEventListener('keydown', (e) => {
    if(wavesurfer.isPlaying() && e.code == 'Digit8'){
        console.log(wavesurfer.getCurrentTime());
        timestamps.push(wavesurfer.getCurrentTime())
    }
    // console.log(e.code);
})

// const output = [
//     2.803479,
//     3.600895,
//     4.491687,
//     5.332145,
//     6.223625,
//     7.06302,
//     7.906583,
//     8.794833,
//     9.635479,
//     10.477875,
//     11.368104,
//     12.212,
//     13.10477,
//     13.899833,
//     14.835375,
//     15.679791,
//     16.569854,
//     17.368583,
//     18.257354,
//     19.148666,
//     19.989791,
//     20.831875,
//     21.673708,
//     22.514354,
//     23.356604
//   ]