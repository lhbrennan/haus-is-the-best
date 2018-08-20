// ----------------------------------------------------------------------------
// ISSUES
// ----------------------------------------------------------------------------
// why is file extension required if react is not imported?
// why do you need reducer defualts if you initialize the store with default values?

playOsc(time, activeStep) {
  const noteLength = .05;
  let osc = this.audioContext.createOscillator();
  osc.connect(this.audioContext.destination);

  if (! (activeStep % 16) ) {         // beat 0 == low pitch
    osc.frequency.value = 220.0;
  } else if (activeStep % 4) {          // quarter notes = medium pitch
    osc.frequency.value = 440.0;
  } else {                           // other 16th notes = high pitch
    osc.frequency.value = 880.0;
  }

  osc.start(time);
  osc.stop(time + noteLength);
}