const audio = new AudioContext()

const NOTE_DETAILS = [
  { note: "C", key: "Z", frequency: 261.626 },
  { note: "Db", key: "S", frequency: 277.183 },
  { note: "D", key: "X", frequency: 293.665 },
  { note: "Eb", key: "D", frequency: 311.127 },
  { note: "E", key: "C", frequency: 329.628 },
  { note: "F", key: "V", frequzency: 349.228 },
  { note: "Gb", key: "G", frequency: 369.994 },
  { note: "G", key: "B", frequency: 391.995 },
  { note: "Ab", key: "H", frequency: 415.305 },
  { note: "A", key: "N", frequency: 440 },
  { note: "Bb", key: "J", frequency: 466.164 },
  { note: "B", key: "M", frequency: 493.883 }
]

document.addEventListener('keydown', e => {
       if(e.repeat) return
       console.log("down")
       
       const keyBoardKey = e.code
       const noteDetail = getNoteDetail(keyBoardKey)
       console.log(noteDetail) 

      if(noteDetail == null) return

      noteDetail.active = true
       playNote()
})

document.addEventListener('keyup', e => {
     const keyBoardKey = e.code
     const noteDetail = getNoteDetail(keyBoardKey)
    console.log(noteDetail) 

    if(noteDetail == null) return
    noteDetail.active = false
    playNote()

})



function getNoteDetail(keyBoardKey) {
    return NOTE_DETAILS.find(n => `Key${n.key}` === keyBoardKey)
}


function playNote() {
    NOTE_DETAILS.forEach(n => {
      const keyElement = document.querySelector(`[data-note="${n.note}"]`)
      keyElement.classList.toggle("active", n.active || false)
      if(n.osillator != null) {
        n.osillator.stop()
        n.osillator.disconnect()
      }
    })

    const activeNode = NOTE_DETAILS.filter(n => n.active)
    const gain = 1 / activeNode.length
    activeNode.forEach(n => {
        startNode(n, gain)
    })


}

function startNode(n, gain) {
    const gainNode = audio.createGain()
    gainNode.gain.value = gain
    const osillator = audio.createOscillator()
    osillator.frequency.value = n.frequency
    osillator.type = 'sine'
    osillator.connect(gainNode).connect(audio.destination)
    osillator.start()
    n.osillator = osillator
}